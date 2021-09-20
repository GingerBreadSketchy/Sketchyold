const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');




Amdi.applyCMD({pattern: 'public', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid,'.setvar WORK_TYPE=public', MessageType.text);
        await message.client.sendMessage(message.jid,'YOUR BOT SET ON PUBLIC 👿👿',MessageType.text);
            
        }));

Amdi.applyCMD({pattern: 'private', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid,'.setvar WORK_TYPE=private', MessageType.text);
        await message.client.sendMessage(message.jid,'YOUR BOT SET ON PRIVATE 👿👿',MessageType.text);
            
        }));

Amdi.applyCMD({pattern: 'voice on', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid,'.setvar VOICE_CHAT=true', MessageType.text);
        await message.client.sendMessage(message.jid,'ACTIVATED VOICE CHAT 👿👿',MessageType.text);
            
        }));


Amdi.applyCMD({pattern: 'voice off', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid,'.setvar VOICE_CHAT=false', MessageType.text);
        await message.client.sendMessage(message.jid,'DEACTIVATED VOICE CHAT 👿👿',MessageType.text);
            
        }));
