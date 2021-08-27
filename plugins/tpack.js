const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*වචනයක් අවශ්‍යයි 😭*"
const Ln = "  *▷විවිදාකාර ලොගෝ ලබා දෙයි.. * "
 const code = "*╔═══❰🍁🔱 T Rex BOT 🔱🍁❱═══╗*\n             HIRUWA\n*❖═List═❖*\n*💠.tpk1       ❴your text❵*\n*send logo\n💠.tpk2       ❴your text❵*\n*send logo*\n*💠.tpk3       ❴your text❵*\n*send logo\n💠.tpk4       ❴your text❵*\n*send logo\n💠.tpk5       ❴your text❵*\n*send logo\n💠.tpk6       ❴your text❵*\n*send logo\n💠.tpk7       ❴your text❵*\n*send logo\n💠.tpk8       ❴your text❵*\n*send logo\n💠.tpk9       ❴your text❵*\n*send logo\n💠.tpk0       ❴your text❵*\n*send logo\n\n ❰🍁🔱  T Rex BOT  🔱🍁❱\n\nBY HIRUWA 🇱🇰."
if (Config.WORKTYPE == 'public') {
    
      Asena.applyCMD({pattern: 'tpack', fromMe: false, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text);
  
  }));
 
 Asena.applyCMD({ pattern: 'tpk0 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c57415e3378efd067f2cd.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱  ' })

    }));
 
 Asena.applyCMD({ pattern: 'tpk1 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4c3312ac9a6d6c23e5688.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱  ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk2 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f36446cfde5b0dde0ac98.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: ' ❰🍁🔱  T Rex BOT  🔱🍁❱  ' })
    
    }));
 
 Asena.applyCMD({ pattern: 'tpk3 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8fdf698f1f59aeead4a1a.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk4 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f2a8e30f8b19ef1b2d76e.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk5 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c5b1f0215907171aff9e8.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk6 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/77680d0e56ba835dca15d.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk7 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/5302dc82e61f04de8dbc6.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk8 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bddf2a454e39a28a40a88.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk9 ?(.*)', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4a6b93a29ddbe67762d91.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱  ' })

    }));
  Asena.applyCMD({ pattern: 'tpack', fromMe: true, desc: Ln,}, (async (message, match) => {

    await message.client.sendMessage(
  
      message.jid,code, MessageType.text);
  
  }));
 
 Asena.applyCMD({ pattern: 'tpk0 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c57415e3378efd067f2cd.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
 Asena.applyCMD({ pattern: 'tpk1 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4c3312ac9a6d6c23e5688.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk2 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f36446cfde5b0dde0ac98.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: ' ❰🍁🔱  T Rex BOT  🔱🍁❱  ' })
    
    }));
 
 Asena.applyCMD({ pattern: 'tpk3 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8fdf698f1f59aeead4a1a.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱  ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk4 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f2a8e30f8b19ef1b2d76e.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  '❰🍁🔱  T Rex BOT  🔱🍁❱' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk5 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c5b1f0215907171aff9e8.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk6 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/77680d0e56ba835dca15d.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk7 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/5302dc82e61f04de8dbc6.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk8 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bddf2a454e39a28a40a88.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
 
  Asena.applyCMD({ pattern: 'tpk9 ?(.*)', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4a6b93a29ddbe67762d91.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  ' ❰🍁🔱  T Rex BOT  🔱🍁❱   ' })

    }));
  
  }
