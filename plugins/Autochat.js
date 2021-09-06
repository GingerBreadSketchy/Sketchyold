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

if (Config.LANG == 'SI') kickmsg = '_*❌ ලින්ක් bot අයිතිකරු විසින් තහනම් කර ඇත.*_\n\n ❰🍁🔱  T Rex BOT  🔱🍁❱  '

if (Config.LANG == 'EN') kickmsg = '_*❌ Links are prohibited by the bot owner.*_\n\n ❰🍁🔱  T Rex BOT  🔱🍁❱  '

Amdi.applyCMD({on: 'text', fromMe: false,  deleteCommand: false}, (async (message, match) => {    

        let getword1bad = new RegExp('https://')

        let getword2bad = new RegExp('.com')

        let getword3bad = new RegExp('.lk')

        let getword4bad = new RegExp('hi')

        let getword5bad = new RegExp('http://')

        let getword6bad = new RegExp('http')

        let getword7bad = new RegExp('https')

        let getword8bad = new RegExp('www.')

        let getword9bad = new RegExp('WWW.')

        let getword10bad = new RegExp('youtube.com')
        
        
        
        
        if (getword1bad.test(message.message)) {

            var us = await checkUsAdmin(message)

            var im = await checkImAdmin(message)

            if (!im) return;

            if (us) return;

            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })

            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 
      
      else if (getword2bad.test(message.message)) {

            var us = await checkUsAdmin(message)

            var im = await checkImAdmin(message)

            if (!im) return;

            if (us) return;

            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })

            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 
      
      else if (getword3bad.test(message.message)) {

            var us = await checkUsAdmin(message)

            var im = await checkImAdmin(message)

            if (!im) return;

            if (us) return;

            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })

            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 

      else if (getword4bad.test(message.message)) {
            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })

            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 
      else if (getword5bad.test(message.message)) {

            var us = await checkUsAdmin(message)

            var im = await checkImAdmin(message)

            if (!im) return;

            if (us) return;

            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })

            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 
      else if (getword6bad.test(message.message)) {

            var us = await checkUsAdmin(message)

            var im = await checkImAdmin(message)

            if (!im) return;

            if (us) return;

            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })

            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 
      else if (getword7bad.test(message.message)) {

            var us = await checkUsAdmin(message)

            var im = await checkImAdmin(message)

            if (!im) return;

            if (us) return;

            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })

            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 
      else if (getword8bad.test(message.message)) {

            var us = await checkUsAdmin(message)

            var im = await checkImAdmin(message)

            if (!im) return;

            if (us) return;

            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })

            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 
      else if (getword9bad.test(message.message)) {

            var us = await checkUsAdmin(message)

            var im = await checkImAdmin(message)

            if (!im) return;

            if (us) return;

            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })

            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 
      else if (getword10bad.test(message.message)) {

            var us = await checkUsAdmin(message)

            var im = await checkImAdmin(message)

            if (!im) return;

            if (us) return;

            await message.client.sendMessage(message.jid,kickmsg, MessageType.text, {quoted: message.data })

            await message.client.groupRemove(message.jid, [message.data.participant]);         

        } 

}))
