/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');

const BTS_DESC = "BTS සංගීත කණ්ඩායමේ පින්තුර ලබා දෙයි."
const EXO_DESC = "EXO සංගීත කණ්ඩායමේ පින්තුර ලබා දෙයි."
const BP_DESC = "Black pink සංගීත කණ්ඩායමේ පින්තුර ලබා දෙයි."

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'bts ?(.*)', fromMe: true, desc: BTS_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/random/bts?apikey=queenamdi5652`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'exo ?(.*)', fromMe: true, desc: EXO_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/random/exo?apikey=queenamdi5652`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, desc: BP_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/random/blackpink?apikey=queenamdi5652`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));
}

else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'bts ?(.*)', fromMe: false, desc: BTS_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/random/bts?apikey=queenamdi5652`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'exo ?(.*)', fromMe: false, desc: EXO_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/random/exo?apikey=queenamdi5652`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: false, desc: BP_DESC}, (async (message, match) => {

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/random/blackpink?apikey=queenamdi5652`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));
}