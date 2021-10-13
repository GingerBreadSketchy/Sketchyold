const Trex = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');


Trex.applyCMD({pattern: 'check', fromMe: false, deleteCommand: true, desc: 'verify 👿',}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] ="0420 SKETCHY CONFIRMED 👿 2021|>";
    r_text[2] ="0421 SKETCHY CONFIRMED 👿 2022|>";
    r_text[3] ="0771 SKETCHY CONFIRMED 👿 2023|>";
    r_text[4] ="0891 SKETCHY CONFIRMED 👿 2024|>";
    r_text[5] ="0957 SKETCHY CONFIRMED 👿 2025|>";
    r_text[6] ="0582 SKETCHY CONFIRMED 👿 2026|>";
    r_text[7] ="0719 SKETCHY CONFIRMED 👿 2027|>";
    r_text[8] ="0269 SKETCHY CONFIRMED 👿 2028|>";
  

    var i = Math.floor(8*Math.random())

    await message.client.sendMessage(
        message.jid,(r_text[i])+'.', MessageType.text);

    }));
