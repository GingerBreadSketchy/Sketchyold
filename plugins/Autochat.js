const Amdi = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');


async function checkUsAdmin(message, user = message.data.participant) {

    var grup = await message.client.groupMetadata(message.jid);

    var sonuc = grup['participants'].map((member) => {     

        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;

    });

    return sonuc.includes(true);

}

async function checkImAdmin(message, user = message.client.user.jid) {

    var grup = await message.client.groupMetadata(message.jid);

    var sonuc = grup['participants'].map((member) => {     

        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;

    });

    return sonuc.includes(true);

}

const ADD = '94704029407,94788306130'

var kickmsg = ''

if (Config.LANG == 'SI') kickmsg = '_හායි කෝමද ඔයාට 🍁😊_ '

if (Config.LANG == 'EN') kickmsg = '_Hi! How are you 🍁😊_ '

Amdi.applyCMD({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {  
    if (Config.CHAT_BOT == 'true') {

        let get1 = new RegExp('hi')
        let get2 = new RegExp('Hi')
        let get3 = new RegExp('Mk')
        let get4 = new RegExp('mk')
        
        
        if (get1.test(message.message)) {
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })     

        } 
    else if (get2.test(message.message)) {
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })     
        } 
    else if (get3.test(message.message)) {
            await message.client.sendMessage(message.jid,'මොකුත් නෑ අනේ ඔහෙ ඉන්නවා 😊😒', MessageType.text, {quoted: message.data })     
        } 
    else if (get4.test(message.message)) {
            await message.client.sendMessage(message.jid,'මොකුත් නෑ අනේ ඔහෙ ඉන්නවා 😊😒', MessageType.text, {quoted: message.data })     
        } 
        
    }

}))
