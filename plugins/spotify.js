/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('spotify');

if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({ pattern: 'spotify ?(.*)', fromMe: true, desc: Lang.SPO_DESC,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,Lang.SPO_NEED,MessageType.text)
    
        await axios
          .get(`https://api.lolhuman.xyz/api/spotify?apikey=${Config.ZONE}&url=${link}`)
          .then(async (response) => {
            const {
              link,
              title,
            } = response.data.result
            
            await message.client.sendMessage(message.jid,Lang.SPO_DOWN,MessageType.text);
            const profileBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,Lang.SPO_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(profileBuffer.data), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg'})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}

else if (Config.WORKTYPE == 'public') {
    Amdi.applyCMD({ pattern: 'spotify ?(.*)', fromMe: false, desc: Lang.SPO_DESC}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,Lang.SPO_NEED,MessageType.text, {quoted: message.data})
    
        await axios
          .get(`https://api.lolhuman.xyz/api/spotify?apikey=${Config.ZONE}&url=${link}`)
          .then(async (response) => {
            const {
              link,
              title,
            } = response.data.result
    
            await message.client.sendMessage(message.jid,Lang.SPO_DOWN,MessageType.text);
            const profileBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,Lang.SPO_UP,MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(profileBuffer.data), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg'})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}