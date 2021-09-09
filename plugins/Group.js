const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP LIST ╗📛\n\n🍁 GROUP 01 🍁\n\n 🔱 ' + Config.GROUPN1 + ' 🔱\n➢ ' + Config.GROUPL1 + '\n\n🍁 GROUP 02 🍁\n\n🔱 ' + Config.GROUPN2 + '🔱\n➢ ' + Config.GROUPL2 + '\n\n🍁 GROUP 03 🍁\n\n🔱 ' + Config.GROUPN3 + ' 🔱\n➢ ' + Config.GROUPL3 + '\n\n🍁 GROUP 04 🍁\n\n🔱 ' + Config.GROUPN4 + ' 🔱\n➢ ' + Config.GROUPL4 + '\n\n\n       ❰🍁🔱  T Rex BOT  🔱🍁❱   '})

    }));
  
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'grp', fromMe: true,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP LIST ╗📛\n\n🍁 GROUP 01 🍁\n\n 🔱 ' + Config.GROUPN1 + ' 🔱\n➢ ' + Config.GROUPL1 + '\n\n🍁 GROUP 02 🍁\n\n🔱 ' + Config.GROUPN2 + '🔱\n➢ ' + Config.GROUPL2 + '\n\n🍁 GROUP 03 🍁\n\n🔱 ' + Config.GROUPN3 + ' 🔱\n➢ ' + Config.GROUPL3 + '\n\n🍁 GROUP 04 🍁\n\n🔱 ' + Config.GROUPN4 + ' 🔱\n➢ ' + Config.GROUPL4 + '\n\n\n       ❰🍁🔱  T Rex BOT  🔱🍁❱   '})

    }));
  
  Amdi.applyCMD({pattern: 'grp', fromMe: false,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP LIST ╗📛\n\n🍁 GROUP 01 🍁\n\n 🔱 ' + Config.GROUPN1 + ' 🔱\n➢ ' + Config.GROUPL1 + '\n\n🍁 GROUP 02 🍁\n\n🔱 ' + Config.GROUPN2 + '🔱\n➢ ' + Config.GROUPL2 + '\n\n🍁 GROUP 03 🍁\n\n🔱 ' + Config.GROUPN3 + ' 🔱\n➢ ' + Config.GROUPL3 + '\n\n🍁 GROUP 04 🍁\n\n🔱 ' + Config.GROUPN4 + ' 🔱\n➢ ' + Config.GROUPL4 + '\n\n\n       ❰🍁🔱  T Rex BOT  🔱🍁❱   '})

    }));
 
}
