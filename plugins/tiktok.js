//Basic requirements
const Amdi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');

// Config Checker
const read = require('../config');

// Strings
const Language = require('../language');
const Lang = Language.getString('tiktok');

if (read.WORKTYPE == 'private') {

  Amdi.applyCMD({ pattern: 'tiktok ?(.*)', fromMe: true, dontAddCommandList: true}, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text)

        await message.client.sendMessage(message.jid, Lang.DLOAD_TK, MessageType.text,{quoted: message.data})

        await axios
          .get(`https://api.xteam.xyz/dl/tiktok?url=${userName}&APIKEY=5bd33b276d41d6b4`)
          .then(async (response) => {
            const {
              server_1,
            } = response.data

            const profileBuffer = await axios.get(server_1, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: '❰🍁🔱  T Rex BOT  🔱🍁❱',
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Lang.NO_RESULT + userName, MessageType.text),
          )
      },
    )
}

else if (read.WORKTYPE == 'public') {

  Amdi.applyCMD({ pattern: 'tiktok ?(.*)', fromMe: true, dontAddCommandList: true}, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text)

        await message.client.sendMessage(message.jid, Lang.DLOAD_TK, MessageType.text,{quoted: message.data})

        await axios
          .get(`https://api.xteam.xyz/dl/tiktok?url=${userName}&APIKEY=5bd33b276d41d6b4}`)
          .then(async (response) => {
            const {
              server_1,
            } = response.data

            const profileBuffer = await axios.get(server_1, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: '❰🍁🔱  T Rex BOT  🔱🍁❱',
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Lang.NO_RESULT + userName, MessageType.text),
          )
      },
    )
  
   Amdi.applyCMD({ pattern: 'tiktok ?(.*)', fromMe: false, dontAddCommandList: true}, async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid, Lang.NEED_WORD, MessageType.text)

        await message.client.sendMessage(message.jid, Lang.DLOAD_TK, MessageType.text,{quoted: message.data})

        await axios
          .get(`https://api.xteam.xyz/dl/tiktok?url=${userName}&APIKEY=5bd33b276d41d6b4`)
          .then(async (response) => {
            const {
              server_1,
            } = response.data

            const profileBuffer = await axios.get(server_1, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
              caption: '❰🍁🔱  T Rex BOT  🔱🍁❱',
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Lang.NO_RESULT + userName, MessageType.text),
          )
      },
    )

}
