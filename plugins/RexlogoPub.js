const Trex = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command 🍁"

if (Config.WORKTYPE == 'public') {
   
   
   Trex.applyCMD({ pattern: 'rlpack', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔══════════════════════
║❌ 🍁*REX LOGO PACK 1*🍁 ❌
╠══════════════════════
║
╠═➢ 🍁Cmd: *.phub*
╠══➢ 📛 Dec: *Send pornhub logo*
╠═➢ 🍁 Ex: *.phub T-Rex/Hiruwa*
║
╠═➢ 🍁 Cmd: *.stone*
╠══➢ 📛 Dec: *Send stone like logo*
╠═➢ 🍁Ex: *.stone T-REX/Hiruwa*
║
╠═➢ 🍁Cmd: *.glitch*
╠══➢ 📛 Dec: *Send glitch logo*
╠═➢ 🍁 Ex: *.glitch T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.space*
╠══➢ 📛 Dec: *Send space logo*
╠═➢ 🍁Ex: *.space T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.blood*
╠══➢ 📛 Dec: *Send blood hor logo*
╠═➢ 🍁Ex: *.blood T-REX*
║
╠═➢ 🍁Cmd: *.blackpink*
╠══➢ 📛 Dec: *Send bpink logo*
╠═➢ 🍁Ex: *.blackpink T-REX*
║
╠═➢ 🍁Cmd: *.wall*
╠══➢ 📛 Dec: *Send wall art logo*
╠═➢ 🍁Ex: *.wall T-Rex*
║
╠═➢ 🍁Cmd: *.coding*
╠══➢📛 Dec: *Send coding logo*
╠═➢ 🍁 Ex: *.coding T-REX*
║
╠═➢ 🍁Cmd: .*.sand1*
╠══➢ 📛  Dec: *Send sand writting*
╠═➢ 🍁 Ex: *.sand1 T-REX*
║
╠═➢ 🍁Cmd: *.sand2*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand2 T-REX
║
╠═➢ 🍁Cmd: *.sand3*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🍁Ex: *.sand3 T-REX
║
╠═➢ 🍁Cmd: *.beach*
╠══➢ 📛 Dec: *Send beach logo*
╠═➢ 🍁Ex: *.beach T-REX
║
╠═➢ 🍁Cmd: *.gradient*
╠══➢ 📛  Dec: *Send logo*
╠═➢ 🍁 Ex: *.gradient T-REX*
║
╠═➢ 🍁Cmd: *.luxury*
╠══➢ 📛  Dec: *Send luxury logo*
╠═➢ 🍁 Ex: *.luxury T-REX*
║
╠═➢ 🍁Cmd: *.sky*
╠══➢ 📛  Dec: *Send sky logo*
╠═➢ 🍁 Ex: *.sky T-REX*
║
╠═➢ 🍁Cmd: *.winter*
╠══➢ 📛  Dec: *Send winter logo*
╠═➢ 🍁 Ex: *.winter T-REX
║
╠═➢ 🍁Cmd: *.christmas*
╠══➢ 📛  Dec: *Send xmas logo*
╠═➢ 🍁 Ex: *.christmas T-REX*
║
╠═➢ 🍁Cmd: *.neon*
╠══➢ 📛  Dec: *Send neon logo*
╠═➢ 🍁 Ex: *.neon T-REX*
║
╠═➢ 🍁Cmd: *.king*
╠══➢ 📛  Dec: *Send king logo*
╠═➢ 🍁 Ex: *.king T-REX*
║
╠═➢ 🍁Cmd: *.glue*
╠══➢ 📛  Dec: *Send Glue logo*
╠═➢ 🍁 Ex: *.glue T-REX*
║
║      ╔═🍁 T-REX BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════`,quoted: message.data})

    }));

   Trex.applyCMD({pattern: 'gamma ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://api.lolhuman.xyz/api/meme8?apikey=d3be4b65ca9dab633c773d66&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: ' ❰🍁🔱  T Rex BOT  🔱🍁❱  '})
   
   }));
   
   Trex.applyCMD({pattern: 'stone ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/stone-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: ' ❰🍁🔱  T Rex BOT  🔱🍁❱  '})
   
   }));
   
   Trex.applyCMD({pattern: 'glitch ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/glitch-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: ' ❰🍁🔱  T Rex BOT  🔱🍁❱  '})
   
   }));
   
   Trex.applyCMD({pattern: 'space ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/space-3d?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: ' ❰🍁🔱  T Rex BOT  🔱🍁❱  '})
   
   }));
   
   Trex.applyCMD({pattern: 'phub ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/phub?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: ' ❰🍁🔱  T Rex BOT  🔱🍁❱  '})
   
   }));
   
   
     Trex.applyCMD({ pattern: 'blood ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/horror?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
   
   Trex.applyCMD({ pattern: 'blackpink ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blackpink?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
   
   Trex.applyCMD({ pattern: 'coding ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/matrix?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
   
   Trex.applyCMD({ pattern: 'wall ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/graffiti?text=${encodeURIComponent(match[1])}&text2=Rex&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
   
   Trex.applyCMD({ pattern: 'sand1 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-writing?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
   
   Trex.applyCMD({ pattern: 'beach ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/beach?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
   
   Trex.applyCMD({ pattern: 'gradient ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/gradient?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
   
   Trex.applyCMD({ pattern: 'luxury ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/luxury?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
   
   Trex.applyCMD({ pattern: 'sky ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sky?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
   
   Trex.applyCMD({ pattern: 'winter ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/winter?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
   
   Trex.applyCMD({ pattern: 'christmas ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/christmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})
    }));
      
     Trex.applyCMD({ pattern: 'neon ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/neon-light?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
      
      Trex.applyCMD({ pattern: 'king ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-dark?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
      Trex.applyCMD({ pattern: 'sand2 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/summery-sand?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
      
      Trex.applyCMD({ pattern: 'sand3 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-engraved?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
      
      
      Trex.applyCMD({ pattern: 'glue ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glue-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱ '})

    }));
      
      
      
      
   
}
