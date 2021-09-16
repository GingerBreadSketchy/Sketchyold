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
        l_dsc = 'Work type.'
        alr_on = 'බොට් දැනටමත් public'
        alr_off = 'බොට් තැනටමත් private'
        succ_on = 'බොට් public ලෙස සකසයි.'
        succ_off = 'බොට් private ලෙස සකසයි.'
    }
    
    if (config.LANG == 'EN') {
        l_dsc = 'work type'
        alr_on = 'BOT ALREADY PUBLIC'
        alr_off = 'BOT ALREADY PRIVATE'
        succ_on = 'YOUR BOT SET PUBLIC.'
        succ_off = 'YOUR BOT SET PRIVATE.'
    }
    Amdi.applyCMD({pattern: 'work ?(.*)', fromMe: true,  deleteCommand: false,  desc: l_dsc, usage: '.antilink on / off', dontAddCommandList: true }, (async (message, match) => {
        const anti_status = `${config.WORKTYPE}`
        if (match[1] == 'public') {
            if (anti_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'public'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'private') {
            if (anti_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['WORK_TYPE']: 'private'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
            }
        }
    }));
