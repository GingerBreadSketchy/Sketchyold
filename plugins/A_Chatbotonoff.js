const Amdi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
const Language = require('../language');
var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var succ_on = ''
    var succ_off = ''
    if (config.LANG == 'SI') {
        l_dsc = 'Activates the Chatbot tool..'
        alr_on = 'Chatbot is already open!'
        alr_off = 'Chatbot is currently closed!'
        succ_on = 'Chatbot Opened Successfully!'
        succ_off = 'Chatbot Closed Successfully!'
    }
    
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the Chatbot tool.'
        alr_on = 'Chatbot is already open!'
        alr_off = 'Chatbot is currently closed!'
        succ_on = 'Chatbot Opened Successfully!'
        succ_off = 'Chatbot Closed Successfully!'
    }
    Amdi.applyCMD({pattern: 'chatbot ?(.*)', fromMe: true,  deleteCommand: false,  desc: l_dsc, usage: '.antilink on / off', dontAddCommandList: true }, (async (message, match) => {
        const anti_status = `${config.CHAT_BOT}`
        if (match[1] == 'on') {
            if (anti_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHAT_BOT']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (anti_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['CHAT_BOT']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
            }
        }
    }));

