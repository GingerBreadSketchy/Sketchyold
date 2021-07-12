/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

    Asena.addCommand({ pattern: 'nekoanime', fromMe: false, dontAddCommandList: true}, async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        await axios
          .get(`https://videfikri.com/api/anime/neko`)
          .then(async (response) => {
            const {
              url_gbr,
            } = response.data.result

            const imageBuffer = await axios.get(url_gbr, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(imageBuffer.data), MessageType.image, {
                        caption: "Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ"
            })
          })
      },
    )
