const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "  *Send Love Messages.. , ආදර පණිවිඩ යැවීමට..* "

 if (Config.WORKTYPE == 'public') {
  
  Asena.applyCMD({ pattern: 'love', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰\nසුබ දවසක් ➠ සතුටින් ඉන්න 😘' })

    }));
  
  Asena.applyCMD({ pattern: 'gn', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨\n\nසුබ රාත්‍රියක් ➠ හොදට නිදාගන්න හොදේ 🤭' })

    }));
 
  Asena.applyCMD({ pattern: 'gn', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨\n\nසුබ රත්‍රියක් ➠ හොදට නිදාගන්න හොදේ 🤭' })
    
    }));
 
 Asena.applyCMD({ pattern: 'gm', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰\n\nසුබ දවසක් ➠ සතුටින් ඉන්න 😘' })

    }));
   }
else if (Config.WORKTYPE == 'private') {
 
 Asena.applyCMD({ pattern: 'gn', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] ==='' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/1cff5bcdec0dcd5708ff5.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '🌃Ꮐᝪᝪᗞ 🙈ᑎᏆᏀᕼᎢ 💫✨\n\nසුබ රත්‍රියක් ➠ හොදට නිදාගන්න හොදේ 🤭' })

    

    }));

 

 Asena.applyCMD({ pattern: 'gm', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/b61c06d757b20d1bdfcee.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '🍃𝙶𝚘𝚘𝚍 🌻𝚖𝚘𝚛𝚗𝚒𝚗𝚐 🥰\n\nසුබ දවසක් ➠ සතුටින් ඉන්න 😘' })

    }));
 }
