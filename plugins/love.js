const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const Ln = "  *Send Love Messages.. , ආදර පණිවිඩ යැවීමට..* "

 if (Config.WORKTYPE == 'public') {
  
  Asena.applyCMD({ pattern: 'lovepack', fromMe: false, dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '' ) return await message.sendMessage(ll);

        var ttinullimage = await axios.get(`https://telegra.ph/file/0e96fae1520475124d275.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `╔═══════════════════════╗

           ❰🍁🔱  T Rex BOT  🔱🍁❱

═════════════════════════

                  ♥ LOVE PACK ♥

                  
♥ Command : .love you
➢ Description :  Send I love you message with Image..

♥ Command : .miss you
➢ Description :  Send i miss you message with image..

♥ Command : .love you somuch
➢ Description :  Send I love you so much message with image..

♥ Command : .hate you
➢ Description :  Send i hate you message 😪..

♥ Command : .cry
➢ Description :  Send I m cry message..

♥ Command : .alone
➢ Description :  Send i am alone message..

♥ Command : .single
➢ Description : Send i am single message..

♥ Command : .need gf
➢ Description :  Send I need Girl friend message..

♥ Command : need bf
➢ Description :  Send i need Boy friend message..
`})

    }));
  
  Asena.applyCMD({pattern: 'love you', fromMe: false }, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://telegra.ph/file/9fdcba7310b4accd41119.jpg";

    r_text[1] = "https://telegra.ph/file/c91ce55d58336bee137a0.jpg";

    r_text[2] = "https://telegra.ph/file/01479ee5aa5964989bf30.jpg";

    r_text[3] = "https://telegra.ph/file/84f1b008c175b1dc3bcb5.jpg";

    r_text[4] = "https://telegra.ph/file/7aeaf5907f67f2cf9078c.jpg";

    r_text[5] = "https://telegra.ph/file/7809664f52214ec6eba99.jpg";

    r_text[6] = "https://telegra.ph/file/0e96fae15204751https://telegra.ph/file/72ba4b1a8caf38604c18c.jpg24d275.jpg";

    var i = Math.floor(8*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer'})

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╔══╗╔╗  ♡
╚╗╔╝║║╔═╦╦╦╔╗
╔╝╚╗║╚╣║║║║╔╣
╚══╝╚═╩═╩═╩═╝

ஜ۩۞۩ஜ YOU ஜ۩۞۩ஜ` })

    }));

  Asena.applyCMD({pattern: 'love you', fromMe: false }, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "https://telegra.ph/file/420aad8a5c96b545ddf52.jpg";

    r_text[1] = "https://telegra.ph/file/7af1f81554120ef582fa1.jpg";

    r_text[2] = "https://telegra.ph/file/f2c9064c9afc912d58a88.jpg";

    r_text[3] = "https://telegra.ph/file/506cbe50b126155882d2e.jpg";

    r_text[4] = "https://telegra.ph/file/72ba4b1a8caf38604c18c.jpg";

    r_text[5] = "https://telegra.ph/file/f2c9064c9afc912d58a88.jpg";

    r_text[6] = "https://telegra.ph/file/420aad8a5c96b545ddf52.jpg";

    var i = Math.floor(8*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer'})

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: ` })

    }));
 }
