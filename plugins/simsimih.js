/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

/*
const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const { errorMessage, infoMessage } = require('../helpers');
const axios = require('axios');

// Description
const BOT_DESC = "Chat with an AI Bot.\n Use .bot <message>"
const BOT = ":"
const NOT_FOUNDAC = "*අවලංගු පණිවිඩයකි.*"
const NEED_LOCATIONA = "*අවලංගු පණිවිඩයකි.*"

Asena.addCommand({pattern: 'bot ?(.*)', fromMe: false, desc: BOT_DESC}, async (message, match) => {
	const userName = match[1]
		if (!userName) return await message.sendMessage(errorMessage(NEED_LOCATIONA))

		await axios
      	.get(`http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=amda&msg=${userName}`)
      	.then(async (response) => {
        const {
          cnt,
        } = response.data.result.cnt[0]

        const profileBuffer = await axios.get(cnt, {responseType: 'arraybuffer'})
		
		await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.text, {quoted: message.data})
		})
	},
	)
	*/