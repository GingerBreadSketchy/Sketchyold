

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
        l_dsc = 'Activates the Antibad tool.'
        alr_on = 'Antibad is already open!'
        alr_off = 'Antibad is currently closed!'
        succ_on = 'Antibad Opened Successfully!'
        succ_off = 'Antibad Closed Successfully!'
    }
    
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the Antiband tool.'
        alr_on = 'Antibad is already open!'
        alr_off = 'Antibad is currently closed!'
        succ_on = 'Antibad Opened Successfully!'
        succ_off = 'Antibad Closed Successfully!'
    }

    Amdi.applyCMD({pattern: 'antibad ?(.*)', fromMe: true,  deleteCommand: false,  desc: l_dsc, usage: '.antibad on / off', dontAddCommandList: true }, (async (message, match) => {
        const anti_status = `${config.ANTIBAD}`
        if (match[1] == 'on') {
            if (anti_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTIBAD']: 'true'
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
                        ['ANTIBAD']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
            }
        }
    }));
