/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const fs = require('fs')
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('memes');

if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'meme ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.MEMES_DESC}, (async (message, match) => {   

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }
 

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            bottomText = split[1];
            topText = split[0];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'ammo-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('ammo-meme.png'), MessageType.image, {filename: 'T-Rex-meme.png', mimetype: Mimetype.png, caption: '❰🍁🔱  T Rex BOT  🔱🍁❱ '});
            await info.delete();    
        });
    }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'meme ?(.*)', fromMe: false, desc: Lang.MEMES_DESC}, (async (message, match) => {    

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }


        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            bottomText = split[1];
            topText = split[0];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'ammo-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('ammo-meme.png'), MessageType.image, {filename: 'T-Rex-meme.png', mimetype: Mimetype.png, caption: '❰🍁🔱  T Rex BOT  🔱🍁❱ ' ,quoted: message.data});
            await info.delete();    
        });
    }));
}
