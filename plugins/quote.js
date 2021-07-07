const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

// List
const QUOTE_DESC = "It Sends Random Quote"
const NEED_LOCATIONA = "*Invalid Request*"
const QUOTE = "Quote :"
const AUTHOR = "Author :"
const NOT_FOUNDA = "```Sorry,I could not find a quote. 😖```"

if (Config.WORKTYPE == 'private') {
	Asena.addCommand({pattern: 'quote ?(.*)', fromMe: true, desc: QUOTE_DESC}, async (message, match) => {
		if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
		const url = `https://api.quotable.io/random`;
		try {
			const response = await got(url);
			const json = JSON.parse(response.body);
			return await message.client.sendMessage(message.jid, '*📌 ' + QUOTE +'* ```' + json.content + '```\n\n' +
			'*✒️' + AUTHOR +'* ```' + json.author+ '```\n', MessageType.text);
		} catch {
			return await message.client.sendMessage(message.jid, NOT_FOUNDA, MessageType.text);
		}
	});
}

else if (Config.WORKTYPE == 'public') {
	Asena.addCommand({pattern: 'quote ?(.*)', fromMe: false, desc: QUOTE_DESC}, async (message, match) => {
		if (match[1] === 'xx') return await message.reply(NEED_LOCATIONA);
		const url = `https://api.quotable.io/random`;
		try {
			const response = await got(url);
			const json = JSON.parse(response.body);
			return await message.client.sendMessage(message.jid, '*📌 ' + QUOTE +'* ```' + json.content + '```\n\n' +
			'*✒️' + AUTHOR +'* ```' + json.author+ '```\n', MessageType.text);
		} catch {
			return await message.client.sendMessage(message.jid, NOT_FOUNDA, MessageType.text);
		}
	});
}