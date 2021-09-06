const QueenSew = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('tagall');

QueenSew.applyCMD({pattern: 'tagall ?(.*)', fromMe: true }, (async (message, match) => {

    if (match[1] !== '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '▫️💠 @' + uye.id.split('@')[0] + ' 💠\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,`${match[1]}`, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    else if (match[1] == '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '▫️💠 @' + uye.id.split('@')[0] + ' 💠\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,'   ❄Group Members❄\n\n' + mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
    else if (message.reply_message && match[1] == '') {
        grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(
            async (uye) => {
                mesaj += '▫️💠 @' + uye.id.split('@')[0] + ' 💠\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        );
        await message.client.sendMessage(message.jid,message.reply_message.text, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }
}));
}
