const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const { errorMessage, infoMessage } = require('../helpers');

const Config = require('../config');

const Language = require('../language');

const XN_DESC = "xnxx අඩවියේ සෙක්ස් වීඩියෝ බාගත කරයි අව්නර් සදහා පමණයි..Download sex videos on xnxx site"

const XN_NEED = "*xnxx Link අවශ්‍යයි! . Need Link Xnxx*\n\nEx. http://www.xnxx.com/video-xbs65be/que_loucura_acabei_transando_com_socio_do_meu_marido_e_pior_de_tudo_que_ele_estava_ali_do_lado_julia_mattos_e_sensacao_na_pele_"

const XN_D = "* ❰🍁🔱  NOTY REX  🔞 🔱🍁❱ Downloading Your XNXX Video*"

const XN_UP = "* ❰🍁🔱  NOTY REX  🔞 🔱🍁❱ Uploading Your XNXX Video*"

const XN_NO = "*කණගාටුයි හමු නොවීය...SORRI I CAN'T FIND*"

if (Config.WORKTYPE == 'private') {

   Asena.applyCMD({ pattern: 'xxx ?(.*)', fromMe: true, desc: XN_DESC}, async (message, match) => {

        const link = match[1]

    

        if (!link) return await message.client.sendMessage(message.jid,XN_NEED,MessageType.text, {quoted: message.data})

         await message.client.sendMessage(message.jid,XN_D,MessageType.text)

        await axios

          .get(`https://zenzapi.xyz/api/xnxx?url=${link}&apikey=aca83a4354ac`)

          .then(async (response) => {

            const {

              url,

            } = response.data.result

    

            const videoBuffer = await axios.get(url, {responseType: 'arraybuffer'})

    

            await message.client.sendMessage(message.jid,XN_UP,MessageType.text, {quoted: message.data});

            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false})

        })

        .catch(

          async (err) => await message.client.sendMessage(message.jid,XN_NO,MessageType.text, {quoted: message.data}),

        )

      },

    )

}

if (Config.WORKTYPE == 'public') {

   Asena.applyCMD({ pattern: 'xxx ?(.*)', fromMe: false, desc: XN_DESC}, async (message, match) => {

        const link = match[1]

    

        if (!link) return await message.client.sendMessage(message.jid,XN_NEED,MessageType.text, {quoted: message.data})

         await message.client.sendMessage(message.jid,XN_D,MessageType.text)

        await axios

          .get(`https://api.lolhuman.xyz/api/pornhub?apikey=d3be4b65ca9dab633c773d66&url=${link}`)

          .then(async (response) => {

            const {

              url,

            } = response.data.result

    

            const videoBuffer = await axios.get(url, {responseType: 'arraybuffer'})

    

            await message.client.sendMessage(message.jid,XN_UP,MessageType.text, {quoted: message.data});

            await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false})

        })

        .catch(

          async (err) => await message.client.sendMessage(message.jid,XN_NO,MessageType.text, {quoted: message.data}),

        )

      },

    )
   
   }
