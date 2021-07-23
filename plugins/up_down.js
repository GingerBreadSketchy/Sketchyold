/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const got = require('got')
const fs = require('fs')
const Language = require('../language');
/*const Lang = Language.getString('up_down');

Amdi.applyCMD({pattern: 'download ?(.*)', fromMe: true, desc: Lang.MEMES_DESC, usage: 'meme top;bottom'}, (async (message, match) => {    
    if (message.reply_message === false) return await message.sendMessage(Lang.NEED_REPLY);

}));*/