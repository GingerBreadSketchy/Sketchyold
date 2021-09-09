const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_trex');
const fs = require("fs")
const amdi = fs.readFileSync('./voice/sound30.mp3')  

if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'panel ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        await message.client.sendMessage(message.jid,amdi, MessageType.audio, {mimetype: 'audio/mp4', ptt:true}, {quoted: message.data})
       
}
