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

if (Config.LANG == 'SI') kickmsg = '_*හායි කෝමද ඔයාට\n\n ❰🍁🔱  T Rex BOT  🔱🍁❱  '

if (Config.LANG == 'EN') kickmsg = '_*❌ Links are prohibited by the bot owner.*_\n\n ❰🍁🔱  T Rex BOT  🔱🍁❱  '

Amdi.applyCMD({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {    

        let getword1bad = new RegExp('hi')
        
        
        
        if (getword1bad.test(message.message)) {

            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })     

        } 

}))
