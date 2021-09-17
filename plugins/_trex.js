

const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_trex');
const fs = require("fs")
const amdi = fs.readFileSync('./Voice/gm.mp3')  
const fuck = fs.readFileSync('./Voice/gn.mp3') 
const hi = fs.readFileSync('./Voice/hi.mp3') 
const mk = fs.readFileSync('./Voice/mokuthna.mp3') 
const hm = fs.readFileSync('./Voice/hmm.mp3') 
const mn = fs.readFileSync('./Voice/mn.mp3')
const xxx = fs.readFileSync('./Voice/xxx.mp3') 
const kawa = fs.readFileSync('./Voice/kawa.mp3') 

if (Config.WORKTYPE == 'public') {
    
    
Amdi.applyCMD({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {  
    if (Config.AUTOVOICE == 'true') {
    if (Config.VTYPE == 'girl') {
    

        let get1 = new RegExp('gm')
        let get2 = new RegExp('Gm')
        let get3 = new RegExp('Good morning')
        let get4 = new RegExp('gn')
        let get5 = new RegExp('Gn')
        let get6 = new RegExp('GN')
        let get7 = new RegExp('Good night')
        let get8 = new RegExp('hi')
        let get9 = new RegExp('Hi')
        let get10 = new RegExp('හායි')
        let get11 = new RegExp('mk')
        let get12 = new RegExp('Mk')
        let get13 = new RegExp('මොකෝ කරන්නෙ')
        let get14 = new RegExp('hm')
        let get15 = new RegExp('Hm')
        let get16 = new RegExp('හ්ම්')
        let get17 = new RegExp('mn')
        let get18 = new RegExp('Mn')
        let get19 = new RegExp('MN')
        let get20 = new RegExp('sex')
        let get21 = new RegExp('fuck')
        let get22 = new RegExp('Sex')
        let get23 = new RegExp('Fuck')
        let get24 = new RegExp('hukamu')
        let get25 = new RegExp('Hukamu')
        let get26 = new RegExp('හුකමු')
        let get27 = new RegExp('kawada')
        let get28 = new RegExp('Kawada')
        let get29 = new RegExp('කෑවද')
        
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
        else if (get8.test(message.message)) {
            await message.client.sendMessage(message.jid, xxx, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get9.test(message.message)) {
            await message.client.sendMessage(message.jid, hi, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get10.test(message.message)) {
            await message.client.sendMessage(message.jid, hi, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get11.test(message.message)) {
            await message.client.sendMessage(message.jid, mk, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get12.test(message.message)) {
            await message.client.sendMessage(message.jid, mk, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get13.test(message.message)) {
            await message.client.sendMessage(message.jid, mk, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
        }
        else if (get14.test(message.message)) {
            await message.client.sendMessage(message.jid, hm, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get15.test(message.message)) {
            await message.client.sendMessage(message.jid, hm, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get16.test(message.message)) {
            await message.client.sendMessage(message.jid, hm, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get17.test(message.message)) {
            await message.client.sendMessage(message.jid, mn, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get18.test(message.message)) {
            await message.client.sendMessage(message.jid, mn, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get19.test(message.message)) {
            await message.client.sendMessage(message.jid, mn, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get20.test(message.message)) {
            await message.client.sendMessage(message.jid, xxx, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get21.test(message.message)) {
            await message.client.sendMessage(message.jid, xxx, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get22.test(message.message)) {
            await message.client.sendMessage(message.jid, xxx, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get23.test(message.message)) {
            await message.client.sendMessage(message.jid, xxx, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get24.test(message.message)) {
            await message.client.sendMessage(message.jid, xxx, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get25.test(message.message)) {
            await message.client.sendMessage(message.jid, xxx, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get26.test(message.message)) {
            await message.client.sendMessage(message.jid, xxx, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get27.test(message.message)) {
            await message.client.sendMessage(message.jid, kawa, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get28.test(message.message)) {
            await message.client.sendMessage(message.jid, kawa, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
        else if (get29.test(message.message)) {
            await message.client.sendMessage(message.jid, kawa, MessageType.audio, {mimetype:  audio/mp4 , ptt:true}, {quoted: message.data})
        }
    }
    }
}));

}
