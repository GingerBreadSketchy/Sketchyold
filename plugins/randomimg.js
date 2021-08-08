/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');

const Language = require('../language');
const Lang = Language.getString('random_pic');

if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'bts ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.BTS_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/bts?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi '})

    }));

    Amdi.applyCMD({pattern: 'exo ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.EXO_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/exo?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi '})

    }));

    Amdi.applyCMD({pattern: 'blackpink ?(.*)', fromMe: true,  deleteCommand: false,  desc: Lang.BP_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/blackpink?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi '})

    }));
}

else if (Config.WORKTYPE == 'public') {
    Amdi.applyCMD({pattern: 'bts ?(.*)', fromMe: false, desc: Lang.BTS_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/bts?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi '})

    }));

    Amdi.applyCMD({pattern: 'exo ?(.*)', fromMe: false, desc: Lang.EXO_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/exo?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi '})

    }));

    Amdi.applyCMD({pattern: 'blackpink ?(.*)', fromMe: false, desc: Lang.BP_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://api.lolhuman.xyz/api/random/blackpink?apikey=queenamdipublic`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi '})

    }));
}