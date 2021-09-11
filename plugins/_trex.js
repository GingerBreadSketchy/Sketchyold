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
const fuck = fs.readFileSync('./Voice/sound14.mp3')  

if (Config.WORKTYPE == 'public') {
    
    
Amdi.applyCMD({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {  
    if (Config.CHAT_BOT == 'true') {

        let get1 = new RegExp('sex')
        let get2 = new RegExp('Sex')
        let get3 = new RegExp('SEX')
        let get4 = new RegExp('fuck')
        let get5 = new RegExp('Fuck')
        let get6 = new RegExp('FUCK')
        let get7 = new RegExp('හුකමු')
        
        
        if (get1.test(message.message)) {
            await message.client.sendMessage(message.jid, amdi, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get2.test(message.message)) {
            await message.client.sendMessage(message.jid, amdi, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get3.test(message.message)) {
            await message.client.sendMessage(message.jid, amdi, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get4.test(message.message)) {
            await message.client.sendMessage(message.jid, fuck, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get5.test(message.message)) {
            await message.client.sendMessage(message.jid, fuck, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get6.test(message.message)) {
            await message.client.sendMessage(message.jid, fuck, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get7.test(message.message)) {
            await message.client.sendMessage(message.jid, fuck, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
    }
}));

}
