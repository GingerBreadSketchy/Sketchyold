const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "Text effective රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."
const NEED_WORD = "*ඔබ වචනයක් ඇතුළත් කළ යුතුය*"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'effectimg', fromMe: true, desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('💠📃 ● *Text සිට Image Effect List* ● 📃💠\n\n⚙️විධානය: *.glitch*\nℹ️විස්තර: Text සිට Tiktok glitch effect.\n_(Ex: .glitch Queen/Amdi)_\n\n⚙️විධානය: *.pemoji*\nℹ️විස්තර: Emoji සිට පින්තූරයට.\n\n⚙️විධානය: *.gaming*\nℹ️විස්තර: ඔබේ නම සමඟ gaming logo සෑදීම.\n\n⚙️විධානය: *.fpslogo*\nℹ️විස්තර: ඔබේ නම සමඟ fps gaming logo සෑදීම.\n\n⚙️විධානය: *.shadow*\nℹ️විස්තර: ඔබේ text සඳහා සෙවනැලි effect wallpaper සෑදිය හැකිය.\n\n⚙️විධානය: *.cup*\nℹ️විස්තර: ඔබට ඔබේ text කෝප්පයක් මත ටයිප් කළ හැකිය.\n\n⚙️විධානය: *.wolfm*\nℹ️විස්තර: ලෝහමය වෘක බැනරයකින් ඔබේ text ටයිප් කළ හැකිය.\n\n⚙️විධානය: *.fflogo*\nℹ️විස්තර: ඔබේ නම සමඟ Free Fire logo සෑදීම.\n\n⚙️විධානය: *.flame*\nℹ️විස්තර: ඔබට ඔබේ text ගිනිදැල් බවට පත් කළ හැකිය.\n\n⚙️විධානය: *.avenger*\nℹ️විස්තර: ඔබේ නම සමඟ Avengers logo සෑදීම.\n\n⚙️විධානය: *.harrypoter*\nℹ️විස්තර: ඔබට හැරීපොටර් වර්ගයේ logo සෑදිය හැකිය.\n\n⚙️විධානය: *.dota*\nℹ️විස්තර: ඔබේ නම සමඟ DOTA logo සෑදිය හැකිය.\n\n⚙️විධානය: *.lol*\nℹ️විස්තර: ඔබේ නම සමඟ LEAGUE OF LEGENDS logo සෑදිය හැකිය.\n\n⚙️විධානය: *.lionlogo*\nℹ️විස්තර: ඔබේ නම සමඟ lion logo සෑදීම.\n_(Ex: .lionlogo Queen/Amdi)_\n\n⚙️විධානය: *.metal*\nℹ️විස්තර: ඔබේ නම සමඟ iron logo සෑදීම.\n\n⚙️විධානය: *.pornhub*\nℹ️විස්තර: එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n⚙️විධානය: *.sandwriting*\nℹ️විස්තර: එය සපයා ඇති textයේ වැලි රූපයක් යවයි.\n\n⚙️විධානය: *.blackpink*\nℹ️විස්තර: එය සපයා ඇති textයේ black pink logo යවයි.\n\n⚙️විධානය: *.blood*\nℹ️විස්තර: එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.\n\n⚙️විධානය: *.thunder*\nℹ️විස්තර: එය සපයා ඇති textයේ අකුණු සහිත රූපයක් යවයි.\n\n⚙️විධානය: *.snow*\nℹ️විස්තර: එය සපයා ඇති textයේ හිම රූපයක් යවයි.\n\n⚙️විධානය: *.light*\nℹ️විස්තර: එය සපයා ඇති textයේ light effect යවයි.\n\n⚙️විධානය: *.cloud*\nℹ️විස්තර: එය සපයා ඇති textයේ අහස රූපයක් යවයි.\n\n⚙️විධානය: *.sparkling*\nℹ️විස්තර: Text දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n⚙️විධානය: *.watercolour*\nℹ️විස්තර: Text ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.neonlight*\nℹ️විස්තර: Text නියොන් ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.3dtext*\nℹ️විස්තර: ලබා දී ඇති text ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.v3d*\nℹ️විස්තර: සපයා ඇති text violet ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\nCheck github for bot:  https://github.com/BlackAmda/QueenAmdi');
        
    }));

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

    Asena.addCommand({pattern: 'wolfm ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/wolfmetal?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
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

    Asena.addCommand({pattern: 'v3d ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

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

    Asena.addCommand({pattern: 'blackpink ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

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

    Asena.addCommand({pattern: 'effectimg', desc: EFFECT_DESC}, (async (message, match) => {    

    await message.sendMessage('💠📃 ● *Text සිට Image Effect List* ● 📃💠\n\n⚙️විධානය: *.glitch*\nℹ️විස්තර: Text සිට Tiktok glitch effect.\n_(Ex: .glitch Queen/Amdi)_\n\n⚙️විධානය: *.pemoji*\nℹ️විස්තර: Emoji සිට පින්තූරයට.\n\n⚙️විධානය: *.gaming*\nℹ️විස්තර: ඔබේ නම සමඟ gaming logo සෑදීම.\n\n⚙️විධානය: *.fpslogo*\nℹ️විස්තර: ඔබේ නම සමඟ fps gaming logo සෑදීම.\n\n⚙️විධානය: *.shadow*\nℹ️විස්තර: ඔබේ text සඳහා සෙවනැලි effect wallpaper සෑදිය හැකිය.\n\n⚙️විධානය: *.cup*\nℹ️විස්තර: ඔබට ඔබේ text කෝප්පයක් මත ටයිප් කළ හැකිය.\n\n⚙️විධානය: *.wolfm*\nℹ️විස්තර: ලෝහමය වෘක බැනරයකින් ඔබේ text ටයිප් කළ හැකිය.\n\n⚙️විධානය: *.fflogo*\nℹ️විස්තර: ඔබේ නම සමඟ Free Fire logo සෑදීම.\n\n⚙️විධානය: *.flame*\nℹ️විස්තර: ඔබට ඔබේ text ගිනිදැල් බවට පත් කළ හැකිය.\n\n⚙️විධානය: *.avenger*\nℹ️විස්තර: ඔබේ නම සමඟ Avengers logo සෑදීම.\n\n⚙️විධානය: *.harrypoter*\nℹ️විස්තර: ඔබට හැරීපොටර් වර්ගයේ logo සෑදිය හැකිය.\n\n⚙️විධානය: *.dota*\nℹ️විස්තර: ඔබේ නම සමඟ DOTA logo සෑදිය හැකිය.\n\n⚙️විධානය: *.lol*\nℹ️විස්තර: ඔබේ නම සමඟ LEAGUE OF LEGENDS logo සෑදිය හැකිය.\n\n⚙️විධානය: *.lionlogo*\nℹ️විස්තර: ඔබේ නම සමඟ lion logo සෑදීම.\n_(Ex: .lionlogo Queen/Amdi)_\n\n⚙️විධානය: *.metal*\nℹ️විස්තර: ඔබේ නම සමඟ iron logo සෑදීම.\n\n⚙️විධානය: *.pornhub*\nℹ️විස්තර: එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n⚙️විධානය: *.sandwriting*\nℹ️විස්තර: එය සපයා ඇති textයේ වැලි රූපයක් යවයි.\n\n⚙️විධානය: *.blackpink*\nℹ️විස්තර: එය සපයා ඇති textයේ black pink logo යවයි.\n\n⚙️විධානය: *.blood*\nℹ️විස්තර: එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.\n\n⚙️විධානය: *.thunder*\nℹ️විස්තර: එය සපයා ඇති textයේ අකුණු සහිත රූපයක් යවයි.\n\n⚙️විධානය: *.snow*\nℹ️විස්තර: එය සපයා ඇති textයේ හිම රූපයක් යවයි.\n\n⚙️විධානය: *.light*\nℹ️විස්තර: එය සපයා ඇති textයේ light effect යවයි.\n\n⚙️විධානය: *.cloud*\nℹ️විස්තර: එය සපයා ඇති textයේ අහස රූපයක් යවයි.\n\n⚙️විධානය: *.sparkling*\nℹ️විස්තර: Text දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n⚙️විධානය: *.watercolour*\nℹ️විස්තර: Text ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.neonlight*\nℹ️විස්තර: Text නියොන් ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.3dtext*\nℹ️විස්තර: ලබා දී ඇති text ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n⚙️විධානය: *.v3d*\nℹ️විස්තර: සපයා ඇති text violet ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\nCheck github for bot:  https://github.com/BlackAmda/QueenAmdi');
    }));

    Asena.addCommand({pattern: 'glitch ?(.*)', dontAddCommandList: true}, (async (message, match) => {

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

    Asena.addCommand({pattern: 'pemoji ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
        
    var uri = encodeURI(match[1])

    var ttinullimage = await axios.get('https://api.zeks.xyz/api/emoji-image?apikey=fHZpP3j61LgH80BzanBm92jch1Q&emoji=' + uri, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ' })

    }));


    Asena.addCommand({pattern: 'fflogo ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'shadow ?(.*)', dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/shadow?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
      }));

    Asena.addCommand({pattern: 'cup ?(.*)', dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
    
        var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/cup?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
    
    }));

    Asena.addCommand({pattern: 'wolfm ?(.*)', dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/wolfmetal?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'avenger ?(.*)', dontAddCommandList: true}, (async (message, match) => {

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

    Asena.addCommand({pattern: 'v3d ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

  await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'thunder ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/thundertext?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'light ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/tlight?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'metal ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'candy ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/sweetcandy/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'flame ?(.*)', dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/flamming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'dota ?(.*)', dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/avatardota?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'harrypotter ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/photooxy1/harrypotter?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'sparkling ?(.*)', dontAddCommandList: true}, (async (message, match) => {

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

    Asena.addCommand({pattern: 'watercolour ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/watercolor?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'ninjalogo ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/gaming?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'lol ?(.*)', dontAddCommandList: true}, (async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
      var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/avatarlolnew?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })
  
      await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})
  
    }));

    Asena.addCommand({pattern: 'neonlight ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/futureneon?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'sandwriting ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'cloud ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/cloud?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'pornhub ?(.*)', dontAddCommandList: true}, (async (message, match) => {

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

    Asena.addCommand({pattern: 'snow ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/snow3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'lionlogo ?(.*)', dontAddCommandList: true}, (async (message, match) => {

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

    Asena.addCommand({pattern: 'gaming ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/logogaming?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'fpslogo ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/ephoto1/fpslogo?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'lovemsg ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'blood ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/bloodfrosted?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: 'blackpink ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=fHZpP3j61LgH80BzanBm92jch1Q&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));

    Asena.addCommand({pattern: '3dtext ?(.*)', dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`https://lolhuman.herokuapp.com/api/textprome/box3d?apikey=e1ee2b3d3b00e58f2511ad95&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Copyright © 2021 | Queen Amdi-ᴮʸ ᴮˡᵃᶜᵏ ᴬᵐᵈᵃ'})

    }));
}
