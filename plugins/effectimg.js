const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');

// LIST
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"
const QR_DESC = "එය text Qr කේතයට පරිවර්තනය කරයි"
const NEED_TEXT = "*වචන ඇතුළත් කළ යුතුය*"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/glitch?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'pemoji ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var uri = encodeURI(match[1])
    
    var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=fHZpP3j61LgH80BzanBm92jch1Q&emoji=' + uri, { responseType: 'arraybuffer' })
    
    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ' })

    }));


    Asena.addCommand({pattern: 'fflogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'qr ?(.*)', fromMe: true, desc: QR_DESC}, (async (message, match) => {

      if (match[1] === '') return await message.sendMessage(NEED_TEXT);
  
      var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })
  
      await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: "Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ"})
  
    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/shadow?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
      }));

    Asena.addCommand({pattern: 'cup ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/cup?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
    
    }));

    Asena.addCommand({pattern: 'gneon ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/greenneon?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
    
    }));

    Asena.addCommand({pattern: 'wolfm ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/wolfmetal?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
  }));

  Asena.addCommand({pattern: 'ml ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/mlwall?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

  Asena.addCommand({pattern: 'hacker ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/anonymhacker?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

  Asena.addCommand({pattern: 'flame ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/flamming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

  }));

    Asena.addCommand({pattern: 'avenger ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'vintage ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var topText, bottomText;
      if (match[1].includes('/')) {
          var split = match[1].split('/');
          bottomText = split[1];
          topText = split[0];
  }
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto2/realvintage?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
      }));

    Asena.addCommand({pattern: 'v3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'valorant ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
     var topText, bottomText;
      if (match[1].includes('/')) {
          var split = match[1].split('/');
          bottomText = split[2];
          midText = split[1];
          topText = split[0];
  }
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto3/valorantbanner?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${midText}&text3=${bottomText}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
      }));

    Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'light ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'metal ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'candy ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'dota ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/avatardota?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'lol ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/avatarlolnew?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'aov ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/aovwall?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'grafiti ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto2/cutegravity?apikey=e1ee2b3d3b00e58f2511ad95&text1=${match[1]}&text2=QueenAmda`, { responseType: 'arraybuffer' })
  
     await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
      }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/harrypotter?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'sparkling ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy2/arcade8bit?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/watercolor?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'neonlight ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/futureneon?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'cloud ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/cloud?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'snow ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/snow3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'lionlogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

   var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}
    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/logogaming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'fpslogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/fpslogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'lovemsg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/bloodfrosted?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'bplogo ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/box3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'glitch ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/glitch?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'pemoji ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var uri = encodeURI(match[1])

    var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=fHZpP3j61LgH80BzanBm92jch1Q&emoji=' + uri, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ' })

    }));


    Asena.addCommand({pattern: 'fflogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/shadow?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
      }));

    Asena.addCommand({pattern: 'qr ?(.*)', fromMe: false, desc: QR_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(NEED_TEXT);
    
        var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: "Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ"})
    
    }));

    Asena.addCommand({pattern: 'cup ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/cup?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
    
    }));

    Asena.addCommand({pattern: 'wolfm ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/wolfmetal?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'avenger ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/logoaveng?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'v3d ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'thunder ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'light ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'metal ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'candy ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'flame ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/flamming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'dota ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/avatardota?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/harrypotter?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'sparkling ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy2/arcade8bit?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'watercolour ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/watercolor?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'ninjalogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'lol ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/avatarlolnew?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'neonlight ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/futureneon?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'hacker ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/anonymhacker?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
     await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
      }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'cloud ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/cloud?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
  var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}

    var webimage = await axios.get(`https://api.zeks.xyz/api/phlogo?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg , caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'snow ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/snow3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'grafiti ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto2/cutegravity?apikey=e1ee2b3d3b00e58f2511ad95&text1=${match[1]}&text2=QueenAmda`, { responseType: 'arraybuffer' })
  
     await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
      }));

    Asena.addCommand({pattern: 'lionlogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

   var topText, bottomText;
    if (match[1].includes('/')) {
        var split = match[1].split('/');
        bottomText = split[1];
        topText = split[0];
}
    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome2/lionlogo?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'vintage ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
    var topText, bottomText;
      if (match[1].includes('/')) {
          var split = match[1].split('/');
          bottomText = split[1];
          topText = split[0];
  }
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto2/realvintage?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
      }));

    Asena.addCommand({pattern: 'valorant ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
     var topText, bottomText;
      if (match[1].includes('/')) {
          var split = match[1].split('/');
          bottomText = split[2];
          midText = split[1];
          topText = split[0];
  }
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto3/valorantbanner?apikey=e1ee2b3d3b00e58f2511ad95&text1=${topText}&text2=${midText}&text3=${bottomText}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
      }));

    Asena.addCommand({pattern: 'gaming ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/logogaming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'gneon ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/greenneon?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
    
    }));

    Asena.addCommand({pattern: 'fpslogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/fpslogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'lovemsg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/bloodfrosted?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'ml ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/mlwall?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
     await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
      }));

    Asena.addCommand({pattern: 'aov ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/aovwall?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'bplogo ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/box3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));
}
