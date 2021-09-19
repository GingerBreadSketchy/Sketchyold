const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');




Amdi.applyCMD({pattern: 'public', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid,'.setvar WORK_TYPE=public', MessageType.text);
        await message.client.sendMessage(message.jid,'YOUR BOT SET ON PUBLIC 👿👿',MessageType.text;
            
        }));
