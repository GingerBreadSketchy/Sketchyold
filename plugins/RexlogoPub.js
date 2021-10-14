const Trex = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command 🐼"

if (Config.WORKTYPE == 'public') {
   
   
   Trex.applyCMD({ pattern: 'rlpack', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔══════════════════════
║❌ 🐼*SKETCHY LOGO PACK 1*🐼 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🐼Cmd: *.phub*
╠══➢ 📛 Dec: *Send pornhub logo*
╠═➢ 🐼 Ex: *.phub Sketchy/Ginger*
║
╠═➢ 🐼 Cmd: *.stone*
╠══➢ 📛 Dec: *Send stone like logo*
╠═➢ 🐼Ex: *.stone Sketchy/Ginger*
║
╠═➢ 🐼Cmd: *.glitch*
╠══➢ 📛 Dec: *Send glitch logo*
╠═➢ 🐼 Ex: *.glitch Sketchy/Ginger*
║
╠═➢ 🐼Cmd: *.space*
╠══➢ 📛 Dec: *Send space logo*
╠═➢ 🐼Ex: *.space Sketchy/Ginger*
║
╠═➢ 🐼Cmd: *.blood*
╠══➢ 📛 Dec: *Send blood hor logo*
╠═➢ 🐼Ex: *.blood Sketchy*
║
╠═➢ 🐼Cmd: *.blackpink*
╠══➢ 📛 Dec: *Send bpink logo*
╠═➢ 🐼Ex: *.blackpink Sketchy*
║
╠═➢ 🐼Cmd: *.wall*
╠══➢ 📛 Dec: *Send wall art logo*
╠═➢ 🐼Ex: *.wall Sketchy*
║
╠═➢ 🐼Cmd: *.coding*
╠══➢📛 Dec: *Send coding logo*
╠═➢ 🐼 Ex: *.coding Sketchy*
║
╠═➢ 🐼Cmd: .*.sand1*
╠══➢ 📛  Dec: *Send sand writting*
╠═➢ 🐼 Ex: *.sand1 Sketchy*
║
╠═➢ 🐼Cmd: *.sand2*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🐼Ex: *.sand2 T-REX
║
╠═➢ 🐼Cmd: *.sand3*
╠══➢ 📛 Dec: *Send sand writting*
╠═➢ 🐼Ex: *.sand3 T-REX
║
╠═➢ 🐼Cmd: *.beach*
╠══➢ 📛 Dec: *Send beach logo*
╠═➢ 🐼Ex: *.beach T-REX
║
╠═➢ 🐼Cmd: *.gradient*
╠══➢ 📛  Dec: *Send logo*
╠═➢ 🐼 Ex: *.gradient Sketchy*
║
╠═➢ 🐼Cmd: *.luxury*
╠══➢ 📛  Dec: *Send luxury logo*
╠═➢ 🐼 Ex: *.luxury Sketchy*
║
╠═➢ 🐼Cmd: *.sky*
╠══➢ 📛  Dec: *Send sky logo*
╠═➢ 🐼 Ex: *.sky Sketchy*
║
╠═➢ 🐼Cmd: *.winter*
╠══➢ 📛  Dec: *Send winter logo*
╠═➢ 🐼 Ex: *.winter T-REX
║
╠═➢ 🐼Cmd: *.christmas*
╠══➢ 📛  Dec: *Send xmas logo*
╠═➢ 🐼 Ex: *.christmas Sketchy*
║
╠═➢ 🐼Cmd: *.neon*
╠══➢ 📛  Dec: *Send neon logo*
╠═➢ 🐼 Ex: *.neon Sketchy*
║
╠═➢ 🐼Cmd: *.king*
╠══➢ 📛  Dec: *Send king logo*
╠═➢ 🐼 Ex: *.king Sketchy*
║
╠═➢ 🐼Cmd: *.glue*
╠══➢ 📛  Dec: *Send Glue logo*
╠═➢ 🐼 Ex: *.glue Sketchy*
║
║      ╔═ 🐼SKETCHY BOT 🐼═╗
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
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱  ',quoted: message.data})
   
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
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱  ',quoted: message.data})
   
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
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱  ',quoted: message.data})
   
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
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱  ',quoted: message.data})
   
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
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱  ',quoted: message.data})
   
   }));
   
   
     Trex.applyCMD({ pattern: 'blood ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/horror?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'blackpink ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blackpink?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'coding ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/matrix?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'wall ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/graffiti?text=${encodeURIComponent(match[1])}&text2=Rex&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'sand1 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-writing?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'beach ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/beach?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'gradient ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/gradient?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'luxury ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/luxury?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'sky ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sky?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'winter ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/winter?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'christmas ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/christmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})
    }));
      
     Trex.applyCMD({ pattern: 'neon ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/neon-light?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
      
      Trex.applyCMD({ pattern: 'king ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-dark?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
      Trex.applyCMD({ pattern: 'sand2 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/summery-sand?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
      
      Trex.applyCMD({ pattern: 'sand3 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-engraved?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
      
      
      Trex.applyCMD({ pattern: 'glue ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glue-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ' ,quoted: message.data})

    }));
      
      
      
      
   
}
