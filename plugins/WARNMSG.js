const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');


if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'warn1', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARNS ╗📛\n\n' + Config.WARN1 + '\n\n\n       ❰🍁🔱  T Rex BOT  🔱🍁❱   '})

    }));
  Amdi.applyCMD({pattern: 'warn2', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARNS ╗📛\n\n' + Config.WARN2 + '\n\n\n      ❰🍁🔱  T Rex BOT  🔱🍁❱   '})

    }));
  Amdi.applyCMD({pattern: 'warn3', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARNS ╗📛\n\n' + Config.WARN3 + '\n\n\n      ❰🍁🔱  T Rex BOT  🔱🍁❱   '})

    }));
  Amdi.applyCMD({pattern: 'warn4', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARNS ╗📛\n\n' + Config.WARN4 + '\n\n\n      ❰🍁🔱  T Rex BOT  🔱🍁❱   '})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'warn1', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARNS ╗📛\n\n' + Config.WARN1 + '\n\n\n      ❰🍁🔱  T Rex BOT  🔱🍁❱   '})

    }));
  
  Amdi.applyCMD({pattern: 'warn2', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARNS ╗📛\n\n' + Config.WARN2 + '\n\n\n      ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
  Amdi.applyCMD({pattern: 'warn3', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARNS ╗📛\n\n' + Config.WARN3 + '\n\n\n      ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
  Amdi.applyCMD({pattern: 'warn4', fromMe: true,  deleteCommand: false, onlyGroup: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8f6b8a908ff9e67f7467e.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n      📛╔ GROUP WARNS ╗📛\n\n' + Config.WARN4 + '\n\n\n      ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
}
