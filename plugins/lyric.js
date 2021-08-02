/*
Copyright (C) 2021 Queen Amdi.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Queen Amdi - Black Amda
මේක copy කරන උබේ අම්මා වේස බඩුවක්. මකබැවියන් copy ගහන හුට්ටිගේ පුතා.
මේක උස්සන් ගියොත් උබ රෙනකොට වැටිච්ච අවජාතකයෙක් - COnfirmed!!
*/


//Basic requirements
const Amdi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const got = require("got");

// Config Checker
const read = require('../config');

//Language
const Language = require('../language');
const Lang = Language.getString('lyric');

if (read.WORKTYPE == 'private') {
    
	Amdi.applyCMD({pattern: 'lyric ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.LY_DESC}, async (message, match) => {
        if (match[1] === 'xx') return await message.reply(Lang.NEED_WORD);
        const url = `https://api.lolhuman.xyz/api/lirik?apikey=qamdi5652&query=${match[1]}`;
        try {
            const response = await got(url);
            const json = JSON.parse(response.body);
            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*You searched name :* ' + match[1] + '\n\n' + json.result, MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NO_RESULT, MessageType.text);
        }
    });
}

else if (read.WORKTYPE == 'public') {
    Amdi.applyCMD({pattern: 'lyric ?(.*)', fromMe: false, desc: Lang.LY_DESC}, async (message, match) => {
        if (match[1] === 'xx') return await message.reply(Lang.NEED_WORD);
        const url = `https://api.lolhuman.xyz/api/lirik?apikey=qamdi5652&query=${match[1]}`;
        try {
            const response = await got(url);
            const json = JSON.parse(response.body);
            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*You searched name :* ' + match[1] + '\n\n' + json.result, MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NO_RESULT, MessageType.text);
        }
    });
}