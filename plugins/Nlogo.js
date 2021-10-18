/*පකා ආවෙ මේක උස්සන්නද කැරියා හුකෝගන්නෙනැට්ගුව පල වද කැරියා අහුව්නොත් අම්මට හුකෝනවා දැනගන්
*/


const Trex = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command 🔶"

if (Config.WORKTYPE == 'public') {
   
   
   Trex.applyCMD({ pattern: 'tlpack', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔══════════════════════
║❌ 🔶*SKETCHY LOGO PACK 1*🔶 ❌
╠══════════════════════
║
║   `+Config.CAPTION+`
║
╠═➢ 🔶Cmd: *.wel*
╠══➢ 📛 Dec: *Send welcome logo*
╠═➢ 🔶 Ex: *.wel Ginger/Sketchy*
║
╠═➢ 🔶 Cmd: *.bye*
╠══➢ 📛 Dec: *Send bye logo*
╠═➢ 🔶Ex: *.bye Ginger/Sketchy*
║
╠═➢ 🔶Cmd: *.marvel*
╠══➢ 📛 Dec: *Send marve logo*
╠═➢ 🔶 Ex: *.marvel Ginger/Sketchy*
║
╠═➢ 🔶Cmd: *.2marvel*
╠══➢ 📛 Dec: *Send marvel logo*
╠═➢ 🔶Ex: *.2marvel Ginger/Sketchy*
║
╠═➢ 🔶Cmd: *.wolf*
╠══➢ 📛 Dec: *Send wolf logo*
╠═➢ 🔶Ex: *.wolf Ginger/Sketchy*
║
╠═➢ 🔶Cmd: *.lava*
╠══➢ 📛 Dec: *Send lava logo*
╠═➢ 🔶Ex: *.lava Ginger*
║
╠═➢ 🔶Cmd: *.xmas*
╠══➢ 📛 Dec: *Send xmas logo*
╠═➢ 🔶Ex: *.xmas Ginger*
║
╠═➢ 🔶Cmd: *.round*
╠══➢📛 Dec: *Send round logo*
╠═➢ 🔶 Ex: *.round { image url }*
║
╠═➢ 🔶Cmd: .*.quot*
╠══➢ 📛  Dec: *Send quote logo*
╠═➢ 🔶 Ex: *.quot Ginger*
║
╠═➢ 🔶Cmd: *.harta*
╠══➢ 📛 Dec: *Send harta logo*
╠═➢ 🔶Ex: *.harta T-REX
║
╠═➢ 🔶Cmd: *.1917*
╠══➢ 📛 Dec: *Send 1917 logo*
╠═➢ 🔶Ex: *.1917 T-REX
║
╠═➢ 🔶Cmd: *.minion*
╠══➢ 📛 Dec: *Send minion logo*
╠═➢ 🔶Ex: *.minion T-REX
║
╠═➢ 🔶Cmd: *.holo*
╠══➢ 📛  Dec: *Send holo logo*
╠═➢ 🔶 Ex: *.holo Ginger*
║
╠═➢ 🔶Cmd: *.metalp*
╠══➢ 📛  Dec: *Send metalp logo*
╠═➢ 🔶 Ex: *.metalp Ginger*
║
╠═➢ 🔶Cmd: *.avengers*
╠══➢ 📛  Dec: *Send avengers logo*
╠═➢ 🔶 Ex: *.avengers Ginger*
║
╠═➢ 🔶Cmd: *.halloween*
╠══➢ 📛  Dec: *Send halloween logo*
╠═➢ 🔶 Ex: *.halloween T-REX
║
╠═➢ 🔶Cmd: *.horror*
╠══➢ 📛  Dec: *Send horror logo*
╠═➢ 🔶 Ex: *.horror Ginger*
║
╠═➢ 🔶Cmd: *.glossyc*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🔶 Ex: *.glossyc Ginger*
║
╠═➢ 🔶Cmd: *.deluxe*
╠══➢ 📛  Dec: *Send deluxe logo*
╠═➢ 🔶 Ex: *.deluxe Ginger*
║
╠═➢ 🔶Cmd: *.glossyb*
╠══➢ 📛  Dec: *Send glossy logo*
╠═➢ 🔶 Ex: *.glossyb Ginger*
║
╠═➢ 🔶Cmd: *.joker*
╠══➢ 📛  Dec: *Send joker logo*
╠═➢ 🔶 Ex: *.joker Ginger*
║
║      ╔═🔶 SKETCHY BOT 🔶═╗
║        ╚ ENJOY WITH US ╝
╚══════════════════════`,quoted: message.data})

    }));

   Trex.applyCMD({pattern: 'wel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/welcome?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'bye ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://leyscoders-api.herokuapp.com/api/leave?name=${topText}&group=${bottomText}&profile=https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg&apikey=dappakntlll`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'marvel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: '2marvel ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/marvel-studios2?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱  ',quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'wolf ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/wolf?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱  ',quoted: message.data})
   
   }));
   
   
     Trex.applyCMD({ pattern: 'harta ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'quot ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'round ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${encodeURIComponent(match[1])}&apikey=dappakntlll`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'lava ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/lava?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: '1917 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/1917-style?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'minion ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/minion-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'holo ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/holographic-3d?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'metalp ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-purple?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'avengers ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/avengers-logo?text=T-Rex&text2=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'halloween ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/halloween?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'horror ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blood?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})
    }));
      
     Trex.applyCMD({ pattern: 'xmas ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/xmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
      
      Trex.applyCMD({ pattern: 'glossyc ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-carbon?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
      Trex.applyCMD({ pattern: 'deluxe ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/deluxe-gold?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
      
      Trex.applyCMD({ pattern: 'glossyb ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glossy-blue?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ',quoted: message.data})

    }));
      
      
      Trex.applyCMD({ pattern: 'joker ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/joker?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  Config.CAPTION+'\n\n   ❰🐼🧭Sketchy🧭🐼❱ ' ,quoted: message.data})

    }));
      
      
      
      
   
}
