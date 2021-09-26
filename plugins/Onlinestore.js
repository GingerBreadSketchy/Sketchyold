const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
let LOL = Config.WORKTYPE == 'public' ? false : true

if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'online store', fromMe: LOL,  deleteCommand: true }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `
╭───────────────
│  🍁 ONLINE STORE 🍁
│
│   SELECT YOUR TYPE
│
│▷ .ladies
│─▷ For girl cloths
│
│▷ .mens
│─▷ For mens cloths
│
│    ONLY SRI LANKA 
│        BUYERS
│
│     🍁POWERD BY🍁
│      👿 T-REX 👿
╰──────────────`,quoted: message.data})

    }));
  

    Amdi.applyCMD({pattern: 'ladies', fromMe: LOL,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/e7c7eed8746345d71f33f.jpg', {responseType: 'arraybuffer'})
            var image1 = await axios.get ('https://telegra.ph/file/702275a2775de05ea9d6f.jpg', {responseType: 'arraybuffer'})
            var image2 = await axios.get ('https://telegra.ph/file/bb408a4bec780fd3811d3.jpg', {responseType: 'arraybuffer'})
            var image3 = await axios.get ('https://telegra.ph/file/2d3be7fd4bd981dcb14d6.jpg', {responseType: 'arraybuffer'})
            var image4 = await axios.get ('https://telegra.ph/file/8e5adbcc948812fa5d61d.jpg.', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁 RS.1000.00\n\n🍁 Dilivary available \n🍁Charge RS.300.00\n\n🍁 More details call 0775849690\n\n 👿 POWERD BY T REX 👿',quoted: message.data})
        await message.client.sendMessage (message.jid, Buffer.from (image1.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁 RS.1000.00\n\n🍁 Dilivary available \n🍁Charge RS.300.00\n\n🍁 More details call 0775849690\n\n 👿 POWERD BY T REX 👿',quoted: message.data})
        await message.client.sendMessage (message.jid, Buffer.from (image2.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁 RS.1000.00\n\n🍁 Dilivary available \n🍁Charge RS.300.00\n\n🍁 More details call 0775849690\n\n 👿 POWERD BY T REX 👿',quoted: message.data})
        await message.client.sendMessage (message.jid, Buffer.from (image3.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁 RS.1000.00\n\n🍁 Dilivary available \n🍁Charge RS.300.00\n\n🍁 More details call 0775849690\n\n 👿 POWERD BY T REX 👿',quoted: message.data})
        await message.client.sendMessage (message.jid, Buffer.from (image4.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁 RS.1000.00\n\n🍁 Dilivary available \n🍁Charge RS.300.00\n\n🍁 More details call 0775849690\n\n 👿 POWERD BY T REX 👿',quoted: message.data})

        

    }));
  
  Amdi.applyCMD({pattern: 'mens', fromMe: LOL,  deleteCommand: true }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/b260087f89c4f5cfd5bdd.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image4.data), MessageType.image, {mimetype: Mimetype.png, caption: '\n🍁 RS.1000.00\n\n🍁 Dilivary available \n🍁Charge RS.300.00\n\n🍁 More details call 0775849690\n\n 👿 POWERD BY T REX 👿',quoted: message.data})

    }));
 
}
