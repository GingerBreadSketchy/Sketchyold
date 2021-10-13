const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*කමාන්ඩ් එක සමග වචනයක් අවශයයි 😪*"
const Ln = "  *❰🐼🧭Sketchy🧭🐼❱* "
 const code = "*═════════════════════*\n            ❰🐼🧭Sketchy🧭🐼❱  \n*❖═List═❖*\n*💠.ff1       ❴your text❵*\n*send free fire logo\n💠.ff2       ❴your text❵*\n*send free fire logo*\n*💠.ff3       ❴your text❵*\n*send free fire logo\n💠.ff4       ❴your text❵*\n*send free fire logo\n💠.ff5       ❴your text❵*\n*send free fire logo\n💠.ff6       ❴your text❵*\n*send free fire logo\n💠.ff7       ❴your text❵*\n*send free fire logo\n💠.ff8       ❴your text❵*\n*send free fire logo\n💠.ff9       ❴your text❵*\n*send free fire logo\n💠.ff10       ❴your text❵*\n*send free fire logo\n💠.ff12       ❴your text❵*\n*send free fire logo\n💠.ff13       ❴your text❵*\n*send free fire logo\n💠.ff14       ❴your text❵*\n*send free fire logo\n💠.ff15       ❴your text❵*\n*send free fire logo\n💠.ff16       ❴your text❵*\n*send free fire logo\n💠.ff17       ❴your text❵*\n*send free fire logo\n💠.ff18       ❴your text❵*\n*send free fire logo\n💠.ff19       ❴your text❵*\n*send free fire logo\n💠.ff20       ❴your text❵*\n*send free fire logo\n💠.ff21       ❴your text❵*\n*send free fire logo\n💠.ff22       ❴your text❵*\n*send free fire logo\n💠.ff23       ❴your text❵*\n*send free fire logo\n💠.ff24       ❴your text❵*\n*send free fire logo\n💠.ff25       ❴your text❵*\n*send free fire logo\n💠.ff26       ❴your text❵*\n*send free fire logo\n💠.ff27       ❴your text❵*\n*send free fire logo\n💠.ff28       ❴your text❵*\n*send free fire logo\n💠.ff29       ❴your text❵*\n*send free fire logo\n💠.ff30       ❴your text❵*\n*send free fire logo\n💠.ff31       ❴your text❵*\n*send free fire logo\n💠.ff32       ❴your text❵*\n*send free fire logo\n💠.ff33       ❴your text❵*\n*send free fire logo\n💠.ff34       ❴your text❵*\n*send free fire logo\n💠.ff35       ❴your text❵*\n*send free fire logo\n💠.ff36       ❴your text❵*\n*send free fire logo\n💠.ff37       ❴your text❵*\n*send free fire logo\n💠.ff38       ❴your text❵*\n*send free fire logo\n💠.ff39       ❴your text❵*\n*send free fire logo\n💠.ff40       ❴your text❵*\n*send free fire logo\n💠.ff41       ❴your text❵*\n*send free fire logo\n💠.ff42       ❴your text❵*\n*send free fire logo\n💠.ff43       ❴your text❵*\n*send free fire logo\n💠.ff44       ❴your text❵*\n*send free fire logo\n💠.ff45       ❴your text❵*\n*send free fire logo\n💠.ff46       ❴your text❵*\n*send free fire logo\n💠.ff47       ❴your text❵*\n*send free fire logo\n💠.ff48       ❴your text❵*\n*send free fire logo\n💠.ff49       ❴your text❵*\n*send free fire logo\n💠.ff50       ❴your text❵*\n*send free fire logo\n*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Creator: HIRUSHA*"

if (Config.WORKTYPE == 'private') {
    
      Asena.applyCMD({pattern:  'ffpack', fromMe: true }, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://telegra.ph/file/60ed08a879ef94dcf8e35.jpg";

    r_text[1] = "https://telegra.ph/file/60ed08a879ef94dcf8e35.jpg";

    r_text[2] = "https://telegra.ph/file/60ed08a879ef94dcf8e35.jpg";

    r_text[3] = "https://telegra.ph/file/60ed08a879ef94dcf8e35.jpg";

    r_text[4] = "https://telegra.ph/file/60ed08a879ef94dcf8e35.jpg";

    r_text[5] = "https://telegra.ph/file/60ed08a879ef94dcf8e35.jpg";

    r_text[6] = "https://telegra.ph/file/60ed08a879ef94dcf8e35.jpg";

    var i = Math.floor(8*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer'})    
    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╔═════════════════════╗
║      ❰🐼🧭Sketchy🧭🐼❱  
║         ║🍁╚FF PACK╝🍁║
║
╠═➢ 🍁.ff9       ❴your text❵
║send fiee fire logo
╠═➢ 🍁.ff10      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff11      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff12      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff13      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff14      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff15      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff16      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff17      ❴your text❵
║send free fire logo
╠═➢ 🍁.ff18       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff19       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff20       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff21       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff22       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff23       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff24       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff25       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff26       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff27       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff28       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff29       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff30       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff31       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff32       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff33       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff34       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff35       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff36       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff37       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff38       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff39       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff40       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff41       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff42       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff43       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff44       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff45       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff46       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff47       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff48       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff49       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff50       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff51       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff52       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff53       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff54       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff55       ❴your text❵
║send free fire logo
╠═➢ 🍁.ff56       ❴your text❵
║send free fire logo
║
║
║▷Creator: HIRUSHA
║
║ ❰🐼🧭Sketchy🧭🐼❱  
╚═════════════════════╝` })
   
   }));
  
  Asena.applyCMD({ pattern: 'ff9 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/ecf60ef31d7e75c2620fd.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
 Asena.applyCMD({ pattern: 'ff10 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/db68993a2656b4748a16a.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff11 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4cc2fe3ca2a712d3b14cc.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: ' ❰🐼🧭Sketchy🧭🐼❱  ' })
    
    }));
 
 Asena.applyCMD({ pattern: 'ff12 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0a25356767c7833bbd9ca.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff13 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {
        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/33eb446f4132e76a2fd58.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff14 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/2f7de65a46ed366a63676.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff15 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/e5f8d6f2e9f9000ebe3d9.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff16 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6090aadefff57762e8b35.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff17 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6ad8890337f9f2ea3b92a.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff18 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/244312383300b34f99bcc.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff19 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b670c4eca0fafdb88a7f0.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff20 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/95a088f7b0453d4d82b7a.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff21 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/fd7500684c9ae986befc3.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff22 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1e962653c4412f5271844.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff23 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/24483aa07e99edad88b4c.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff24 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/129a6861e1efdfd0f7bca.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff25 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/deab8459bd6d06b4f9421.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff26 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/696f93289f32687d3b4f7.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff27 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f0145f46d111ed493e62b.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff28 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f577262bce9b3733402ea.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff29 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/099f8580a45433eb6688c.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff30 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a1fe3fe9e295c24256ede.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff31 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/2056e2cdd3a30971da0a6.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff32 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c730c8c57cfccb7756dc4.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff33 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/d3749dfe51e3f13012e8e.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff34 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f376a881b40c1e994d75d.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'ff35 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1d307457e0778ae9b0d44.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 
   Asena.applyCMD({ pattern: 'ff36 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bf886fc083f66fb404ff1.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff37 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/d60199bc191c261497813.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff38 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a4c9fa2db7598d876345b.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff39 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0c87d73846b138193b203.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff40 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c41f0c5ec4a3874dfd7fe.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff41 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8c082e45671f2726c4010.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff42 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/dd660681c36a3126c590f.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff43 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6c1412d523455abb2677a.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff44 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a421f4d85a38545be4926.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff45 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f0568921ca66fc0b01b83.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff46 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff47 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/91ec01a9b6375b414803c.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff48 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/5e0c5e4999b8aa21c021f.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff49 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0a9ae825b02db2cc591bb.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff50 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0df898e2ad77b8f69f91c.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff51 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/e354930c0989a3077485e.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff52 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b41fc723da2d9835f0151.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff53 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bc64365aa73d60de3dcfd.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff54 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b82196ba630383df9da76.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff55 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8013933a6603cf2d75f94.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff56 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4cd1004d8c8f3a800138f.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff57 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e9911e44f490fd5ba4bf.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
   Asena.applyCMD({ pattern: 'ff58 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🐼🧭Sketchy🧭🐼❱   ' })

    }));
 }
