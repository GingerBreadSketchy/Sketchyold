const Trex = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command 🍁"

if (Config.WORKTYPE == 'public') {
   
   
   Trex.applyCMD({ pattern: 'tlpack', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔══════════════════════
║❌ 🍁*REX LOGO PACK 1*🍁 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🍁Cmd: *.wel*
╠══➢ 📛 Dec: *Send welcome logo*
╠═➢ 🍁 Ex: *.wel T-Rex/Hiruwa*
║
╠═➢ 🍁 Cmd: *.bye*
╠══➢ 📛 Dec: *Send bye logo*
╠═➢ 🍁Ex: *.bye T-REX/Hiruwa*
║
╠═➢ 🍁Cmd: *.marvel*
╠══➢ 📛 Dec: *Send marve logo*
╠═➢ 🍁 Ex: *.marvel T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.2marvel*
╠══➢ 📛 Dec: *Send marvel logo*
╠═➢ 🍁Ex: *.2marvel T-Rex/Hiruwa*
║
╠═➢ 🍁Cmd: *.wolf*
╠══➢ 📛 Dec: *Send wolf logo*
╠═➢ 🍁Ex: *.wolf T-REX/HIRUWA*
║
╠═➢ 🍁Cmd: *.lava*
╠══➢ 📛 Dec: *Send lava logo*
╠═➢ 🍁Ex: *.lava T-REX*
║
╠═➢ 🍁Cmd: *.xmas*
╠══➢ 📛 Dec: *Send xmas logo*
╠═➢ 🍁Ex: *.xmas T-Rex*
║
╠═➢ 🍁Cmd: *.round*
╠══➢📛 Dec: *Send round logo*
╠═➢ 🍁 Ex: *.round { image url }*
║
╠═➢ 🍁Cmd: .*.quot*
╠══➢ 📛  Dec: *Send quote logo*
╠═➢ 🍁 Ex: *.quot T-REX*
║
╠═➢ 🍁Cmd: *.harta*
╠══➢ 📛 Dec: *Send harta logo*
╠═➢ 🍁Ex: *.harta T-REX
║
╠═➢ 🍁Cmd: *.1917*
╠══➢ 📛 Dec: *Send 1917 logo*
╠═➢ 🍁Ex: *.1917 T-REX
║
╠═➢ 🍁Cmd: *.minion*
╠══➢ 📛 Dec: *Send minion logo*
╠═➢ 🍁Ex: *.minion T-REX
║
╠═➢ 🍁Cmd: *.holo*
╠══➢ 📛  Dec: *Send holo logo*
╠═➢ 🍁 Ex: *.holo T-REX*
║
╠═➢ 🍁Cmd: *.metalp*
╠══➢ 📛  Dec: *Send metalp logo*
╠═➢ 🍁 Ex: *.metalp T-REX*
║
╠═➢ 🍁Cmd: *.avengers*
╠══➢ 📛  Dec: *Send avengers logo*
╠═➢ 🍁 Ex: *.avengers T-REX*
║
╠═➢ 🍁Cmd: *.halloween*
╠══➢ 📛  Dec: *Send halloween logo*
╠═➢ 🍁 Ex: *.halloween T-REX
║
╠═➢ 🍁Cmd: *.horror*
╠══➢ 📛  Dec: *Send horror logo*
╠═➢ 🍁 Ex: *.horror T-REX*
║
╠═➢ 🍁Cmd: *.glossyc*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyc T-REX*
║
╠═➢ 🍁Cmd: *.deluxe*
╠══➢ 📛  Dec: *Send deluxe logo*
╠═➢ 🍁 Ex: *.deluxe T-REX*
║
╠═➢ 🍁Cmd: *.glossyb*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🍁 Ex: *.glossyb T-REX*
║
╠═➢ 🍁Cmd: *.joker*
╠══➢ 📛  Dec: *Send joker logo*
╠═➢ 🍁 Ex: *.joker T-REX*
║
║      ╔═🍁 T-REX BOT 🍁═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════`,quoted: message.data})

    }));

   Trex.applyCMD({pattern: 'wel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/welcome?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'bye ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/leave?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'marvel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: '2marvel ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios2?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'wolf ?(.*)', fromMe: false, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/wolf?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱  ',quoted: message.data})
   
   }));
   
   
     Trex.applyCMD({ pattern: 'harta ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'quot ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'round ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'lava ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/lava?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: '1917 ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/1917-style?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'minion ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/minion-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'holo ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/holographic-3d?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'metalp ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-purple?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'avengers ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/avengers-logo?text=T-Rex&text2=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'halloween ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/halloween?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'horror ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blood?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})
    }));
      
     Trex.applyCMD({ pattern: 'xmas ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/xmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
      
      Trex.applyCMD({ pattern: 'glossyc ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-carbon?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
      Trex.applyCMD({ pattern: 'deluxe ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/deluxe-gold?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
      
      Trex.applyCMD({ pattern: 'glossyb ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-blue?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ',quoted: message.data})

    }));
      
      
      Trex.applyCMD({ pattern: 'joker ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/joker?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🍁🔱  T Rex BOT  🔱🍁❱ ' ,quoted: message.data})

    }));
      
      
      
      
   
}
