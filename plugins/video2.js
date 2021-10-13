const cobra = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const Config = require('../config');
const Language = require('../language');
const YTV_DESC = "Youtube Video Downloader V2 . යූ ටියුබ් වීඩියෝ ඩව්න්ලෝඩ් කිරීමට දෙවන මග... ."
const YT_NEED = "* ❰🐼🧭Sketchy🧭🐼❱  need word!.*"
const DWLOAD_VID = "* ❰🐼🧭Sketchy🧭🐼❱  SERCHING YOUR SONG PLEASE WAIT....*"
const YTV_UP = "* ❰🐼🧭Sketchy🧭🐼❱  UPLOADING YOUR VIDEO PLEASE WAIT...*"
const NO_RESULT = "*SORRY ❰🐼🧭Sketchy🧭🐼❱ can't Find Anything...*"


if (Config.WORKTYPE == 'private') {

    cobra.applyCMD({ pattern: 'vid2 ?(.*)', fromMe: true, desc: YTV_DESC,  deleteCommand: false}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text)
        await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text);
        await axios
          .get(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=mWEXrVIEfCOBzwKZEMfxb7MHjP9&q=${link}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const videoBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.document, {mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}

else if (Config.WORKTYPE == 'public') {
    cobra.applyCMD({ pattern: 'vid2 ?(.*)', fromMe: false, desc: YTV_DESC}, async (message, match) => {

        const link = match[1]
    
        if (!link) return await message.client.sendMessage(message.jid,YT_NEED,MessageType.text, {quoted: message.data})
         await message.client.sendMessage(message.jid,DWLOAD_VID,MessageType.text)
        await axios
          .get(`https://api.zeks.xyz/api/ytplaymp4/2?apikey=mWEXrVIEfCOBzwKZEMfxb7MHjP9&q=${link}`)
          .then(async (response) => {
            const {
              link,
            } = response.data.result
    
            const videoBuffer = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,YTV_UP,MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.document, {mimetype: Mimetype.mp4, ptt: false})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,NO_RESULT,MessageType.text, {quoted: message.data}),
        )
      },
    )
}
