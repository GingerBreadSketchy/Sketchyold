/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_trex');
const fs = require("fs")
const amdi = fs.readFileSync('./Voice/sound6.mp3')  


if (Config.WORKTYPE == 'public') {
    
    
Amdi.applyCMD({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {  
    if (Config.CHAT_BOT == 'true') {

        let get1 = new RegExp('sex')
        
        
        if (get1.test(message.message)) {
            await message.client.sendMessage(message.jid, amdi, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
    }
}));

}
