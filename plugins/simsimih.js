/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

// Description
const BOT_DESC = "Chat with an AI Bot.\n Use .bot <message>"
const BOT = ":"
const NOT_FOUNDAC = "*අවලංගු පණිවිඩයකි.*"
const NEED_LOCATIONA = "*අවලංගු පණිවිඩයකි.*"

Asena.addCommand({pattern: 'bot ?(.*)', fromMe: false, desc: BOT_DESC}, async (message, match) => {
		if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
		const url = `http://api.brainshop.ai/get?bid=157104&key=VzGieV1tp1IvxPl4&uid=amda&msg=${match[1]}`;
		try {
			const cnt = await got(url);
			const json = JSON.parse(cnt.body);
	 	 return await message.client.sendMessage(message.jid, '\n*🤖 ' + BOT +'* ```' + json.messages[0].cnt + '```\n\n' , MessageType.text,{quoted: message.data});
		} catch {
		return await message.client.sendMessage(message.jid, NOT_FOUNDAC, MessageType.text);
	}
	});