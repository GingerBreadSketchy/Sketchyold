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
const amdi = fs.readFileSync('./Voice/gn.mp3')  
const fuck = fs.readFileSync('./Voice/gm.mp3')  

if (Config.WORKTYPE == 'public') {
    
    
Amdi.applyCMD({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {  
    if (Config.AUTOVOICE == 'true') {
    if (Config.VTYPE == 'girl') {

        let get1 = new RegExp('gm')
        let get2 = new RegExp('Gm')
        let get3 = new RegExp('GM')
        let get4 = new RegExp('gn')
        let get5 = new RegExp('Gn')
        let get6 = new RegExp('GN')
        let get7 = new RegExp('Good night')
        
        
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
    }
}));

}
