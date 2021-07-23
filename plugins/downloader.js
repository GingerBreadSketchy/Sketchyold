/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda


const Amdi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const fs = require('fs');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');
const IG_DESC = "Instagram වෙතින් රූපය / වීඩියෝ බාගන්න"
const NEED_WORD = "Must Enter a link"
const FBDESC = "ෆේස්බුක් වෙතින් වීඩියෝ බාගත කරයි"
const LOADING = "වීඩියෝ බාගත කිරීම..."
const NOT_FOUNDFB = "වීඩියෝව හමු නොවීය"
const CAPTION = "Caption"

Amdi.applyCMD({ pattern: 'ig ?(.*)', fromMe: false, desc: IG_DESC}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(NEED_WORD))

    await message.sendMessage(infoMessage("Post බාගත කිරීම..."))

    await axios
      .get(`https://api.zeks.xyz/api/ig?apikey=fHZpP3j61LgH80BzanBm92jch1Q&url=${userName}`)
      .then(async (response) => {
        const {
          url,
          type,
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `${type}`

	 if (msg === 'jpg') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {quoted: message.data}, {
          caption: "Copyright © 2021 | Queen Amdi "
        })}
		 	 
	if (msg === 'mp4') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {quoted: message.data}, {
          caption: "Copyright © 2021 | Queen Amdi "
        })}
	
        
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("කරුණාකර වලංගු Instagram link ඇතුළත් කරන්න")),
      )
  },
)
*/