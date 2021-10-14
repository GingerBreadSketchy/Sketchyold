const Amdi = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const axios = require('axios')
const { errorMessage, infoMessage } = require('../helpers');

//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const TKlang = Language.getString('tiktok');

const wiki = require('wikijs').default;
var gis = require('g-i-s');


if (config.WORKTYPE == 'private') {
    
    
Amdi.applyCMD({pattern: 'play ?(.*)', fromMe: true, desc: Lang.PLAY_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,'NEED WORD 🍁',MessageType.text);
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,fs.readFileSync('./' + title + '.jpg'), MessageType.image, { caption: '\n```Song Name :\n'+ title +' ```\n\n'+Lang.UPLOADING_SONG+'\n' });
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg', contextInfo: { forwardingScore: 1, isForwarded: false }});
            });
    }));
    
    
    Amdi.applyCMD({pattern: 'song ?(.*)', fromMe: true, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio,  {mimetype: Mimetype.mp4Audio, quoted: message.data});
            });
    }));
   Amdi.applyCMD({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {


    const vcard = 'BEGIN:VCARD\n' // saidali said
            + 'VERSION:3.0\n' 
            + 'FN:╩Ь╩Пс┤Шс┤З╩А\n' //coded by saidali   not copy this
            + 'ORG:╔кс┤Ыs-с┤Нс┤З ═втБи╩Ь╩Пс┤Шс┤Зс╖л╩Ат╖ж┬╣;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=917025967090:918129624395\n' //created saidali
            + 'END:VCARD'
    await message.client.sendMessage(message.jid,{displayname: "╔кс┤Ыs-с┤Нс┤З ═втБи╩Ь╩Пс┤Шс┤Зс╖л╩Ат╖ж┬╣", vcard: vcard}, MessageType.contact)
}));
         
    Amdi.applyCMD({pattern: 'fsong ?(.*)', fromMe: true, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text  , {quoted: message.data});
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg'});
            });
    }));
  
      Amdi.applyCMD({ pattern: 'video ?(.*)', fromMe: true,  deleteCommand: false, desc: Lang.VIDEO_DESC}, (async (message, match) => {
  
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
      
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);
  
        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
  
        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4, caption: "❰🐼🧭Sketchy🧭🐼❱"});
        });
    }));

    Amdi.applyCMD({ pattern: 'insta ?(.*)', fromMe: true,  deleteCommand: false, desc: Lang.IG_DESC}, (async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text);

        await axios
          .get(`https://api.lolhuman.xyz/api/instagram?apikey=${config.ZONE}&url=${userName}`)
          .then(async (response) => {
            const {
              result,
              status,
            } = response.data

            const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

            const msg = `${status}`

      if (msg === '500') { await message.client.sendMessage(message.jid,Lang.ERR_VID,MessageType.text)}
          
      if (msg === '200') {
        await message.client.sendMessage(message.jid,Lang.DL_VID,MessageType.text);
        await message.client.sendMessage(message.jid,Lang.UP_VID,MessageType.text);
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {caption: "❰🐼🧭Sketchy🧭🐼❱"}) 
        }
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text),
          )
    }));

    Amdi.applyCMD({ pattern: 'fb ?(.*)', fromMe: true,  deleteCommand: false, desc: Lang.FBDESC}, (async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text);

        await axios
          .get(`https://api.lolhuman.xyz/api/facebook?apikey=d3be4b65ca9dab633c773d66&url=${userName}`)
          .then(async (response) => {
            const {
              result,
              status,
            } = response.data

            const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

            const msg = `${status}`

      if (msg === '500') { await message.client.sendMessage(message.jid,Lang.NOT_FOUNDFB,MessageType.text)}
          
      if (msg === '200') {
        await message.client.sendMessage(message.jid,Lang.DL_VID,MessageType.text);
        await message.client.sendMessage(message.jid,Lang.UP_VID,MessageType.text);
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {caption: "❰🐼🧭Sketchy🧭🐼❱"}) 
        }
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text),
          )
    }));

    Amdi.applyCMD({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: true}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*🍁 ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*🔱 ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));

    Amdi.applyCMD({pattern: 'spdf ?(.*)', fromMe: true,  deleteCommand: false, desc: Lang.SPDF_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.SPDF_LINK);
    
        var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Lang.SPDF_PROC);
    
        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
    
    }));

    Amdi.applyCMD({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: true,  deleteCommand: false, desc: Lang.CURRENCY_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    Amdi.applyCMD({pattern: 'tts (.*)', fromMe: true,  deleteCommand: false, desc: Lang.TTS_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if(match[1] === undefined || match[1] == "")
            return;
    
        let 
            LANG = config.LANG.toLowerCase(),
            ttsMessage = match[1],
            SPEED = 1.0

        if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
            LANG = langMatch[1]
            ttsMessage = ttsMessage.replace(langMatch[0], "")
        } 
        if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
            SPEED = parseFloat(speedMatch[1])
            ttsMessage = ttsMessage.replace(speedMatch[0], "")
        }
    
        var buffer = await googleTTS.synthesize({
            text: ttsMessage,
            voice: LANG
        });
        await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
    }));

    Amdi.applyCMD({pattern: 'yt ?(.*)', fromMe: true,  deleteCommand: false, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '🍁 *' + video.title + '* - ' + video.url + '\n\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    Amdi.applyCMD({pattern: 'wiki ?(.*)', fromMe: true,  deleteCommand: false, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    Amdi.applyCMD({pattern: 'img ?(.*)', fromMe: true, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        gis(match[1], async (error, result) => {
            for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image);
                });
            }

            message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
        });
    }));
    Amdi.applyCMD({pattern: 'quote ?(.*)', fromMe: true,  deleteCommand: false, desc: Lang.QUOTE_DESC}, async (message, match) => {
        if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
        const url = `https://api.quotable.io/random`;
        try {
            const response = await got(url);
            const json = JSON.parse(response.body);
            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*➢  ' + Lang.QUOTE +'* ```' + json.content + '```\n\n' +
            '*🍁' + Lang.AUTHOR +'* ```' + json.author+ '```\n', MessageType.text);
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDA, MessageType.text);
        }
    });

    Amdi.applyCMD({pattern: 'wame ?(.*)', fromMe: true,  deleteCommand: false, desc: Lang.WAME_DESC}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.WAME.format(message.reply_message.jid.split('@')[0], message.reply_message.jid.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.WAME.format(user.split('@')[0], user.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                }); 
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.NEED_UWONG, MessageType.text);
        }
    }));


    Amdi.applyCMD({ pattern: 'github ?(.*)', fromMe: true,  deleteCommand: false, desc: Glang.GİTHUB_DESC }, async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text)

        await axios
          .get(`https://api.lolhuman.xyz/api/github/${userName}?apikey=d3be4b65ca9dab633c773d66`)
          .then(async (response) => {

            const {
              hireable,
              type,
              avatar,
              name,
              fullname, 
              blog, 
              location,
              email,
              public_repos,
              bio,
              following,
              followers,
              public_gists,
              url,
              last_updated,
              joined_on,
            } = response.data.result

            const githubscrap = await axios.get(avatar, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${Glang.USERNAME}* ${name} \n*${Glang.NAME}* ${fullname} \n*${Glang.FOLLOWERS}* ${followers} \n*${Glang.FOLLOWİNG}* ${following} \n*${Glang.BİO}* ${bio} \n*${Glang.REPO}* ${public_repos} \n*${Glang.GİST}* ${public_gists} \n*${Glang.LOCATİON}* ${location} \n*${Glang.MAİL}* ${email} \n*${Glang.BLOG}* ${blog} \n*${Glang.COMPANY}* ${type} \n*${Glang.HİRE}* ${hireable === "true" ? Glang.HİRE_TRUE : Glang.HİRE_FALSE} \n*${Glang.JOİN}* ${joined_on} \n*${Glang.UPDATE}* ${last_updated} \n*${Glang.URL}* ${url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Glang.NOT, MessageType.text),
          )
      },
    )

    Amdi.applyCMD({ pattern: 'tk ?(.*)', fromMe: true,  deleteCommand: false, desc: TKlang.TK_DESC }, async (message, match) => {

       const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, TKlang.REPLY, MessageType.text)

        await axios
          .get(`https://api.lolhuman.xyz/api/stalktiktok/${userName}?apikey=d3be4b65ca9dab633c773d66`)
          .then(async (response) => {

            const {
              username,
              nickname,
              bio,
              followers,
              followings, 
              likes, 
              video,
              user_picture,
            } = response.data.result

            const tkscrap = await axios.get(user_picture, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${TKlang.USERNAME}* ${username} \n\n*${TKlang.NAME}* ${nickname} \n\n*${TKlang.BIO}*\n${bio} \n\n*${TKlang.FOLLOWERS}* ${followers} \n\n*${TKlang.FOLLOWING}* ${followings} \n\n*${TKlang.LIKES}* ${likes} \n\n*${TKlang.VIDEOS}* ${video} \n\n`

            await message.sendMessage(Buffer.from(tkscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, TKlang.NOT, MessageType.text),
          )
      },
    )
}
else if (config.WORKTYPE == 'public') {
    
    
    Amdi.applyCMD({pattern: 'play ?(.*)', fromMe: false, desc: Lang.PLAY_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,'NEED WORD 🍁',MessageType.text, {quoted: message.data});
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data});
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text, {quoted: message.data});

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,fs.readFileSync('./' + title + '.jpg'), MessageType.image, { caption: '\n```Song Name :\n'+ title +' ```\n\n'+Lang.UPLOADING_SONG+'\n' });
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg', contextInfo: { forwardingScore: 1, isForwarded: false }, quoted: message.data});
            });
    }));
    
    
    Amdi.applyCMD({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text, {quoted: message.data});
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data});
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text, {quoted: message.data});

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text, {quoted: message.data});
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio,  {mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: false});
            });
    }));
    Amdi.applyCMD({ pattern: 'fsong ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text, {quoted: message.data});    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data});
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text, {quoted: message.data});
  
        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();
  
                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text, {quoted: message.data});
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: title + '.mp3', mimetype: 'audio/mpeg'});
            });
    }));
  
      Amdi.applyCMD({ pattern: 'video ?(.*)', fromMe: false, desc: Lang.VIDEO_DESC}, (async (message, match) => {
  
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text, {quoted: message.data});    
      
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data});
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text, {quoted: message.data});
  
        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
  
        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text, {quoted: message.data});
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4, quoted:message.data ,caption: "❰🐼🧭Sketchy🧭🐼❱"});
        });
    }));

    Amdi.applyCMD({ pattern: 'insta ?(.*)', fromMe: false, desc: Lang.IG_DESC}, (async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text, {quoted: message.data});

        await axios
          .get(`https://api.lolhuman.xyz/api/instagram?apikey=d3be4b65ca9dab633c773d66&url=${userName}`)
          .then(async (response) => {
            const {
              result,
              status,
            } = response.data

            const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

            const msg = `${status}`

      if (msg === '500') { await message.client.sendMessage(message.jid,Lang.ERR_VID,MessageType.text, {quoted: message.data})}
          
      if (msg === '200') {
        await message.client.sendMessage(message.jid,Lang.DL_VID,MessageType.text, {quoted: message.data});
        await message.client.sendMessage(message.jid,Lang.UP_VID,MessageType.text, {quoted: message.data});
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {quoted: message.data}, {caption: "❰🐼🧭Sketchy🧭🐼❱"}) 
        }
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data}),
          )
    }));

      Amdi.applyCMD({ pattern: 'fb ?(.*)', fromMe: false, desc: Lang.FBDESC}, (async (message, match) => {

        const userName = match[1]

        if (!userName) return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text, {quoted: message.data});

        await axios
          .get(`https://api.lolhuman.xyz/api/facebook?apikey=d3be4b65ca9dab633c773d66&url=${userName}`)
          .then(async (response) => {
            const {
              result,
              status,
            } = response.data

            const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

            const msg = `${status}`

      if (msg === '500') { await message.client.sendMessage(message.jid,Lang.NOT_FOUNDFB,MessageType.text, {quoted: message.data})}
          
      if (msg === '200') {
        await message.client.sendMessage(message.jid,Lang.DL_VID,MessageType.text, {quoted: message.data});
        await message.client.sendMessage(message.jid,Lang.UP_VID,MessageType.text, {quoted: message.data});
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {caption: "❰🐼🧭Sketchy🧭🐼❱"}) 
        }
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text, {quoted: message.data}),
          )
    }));

    Amdi.applyCMD({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: false}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text, {quoted: message.data});
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*➢  ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*🔱 ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text, {quoted: message.data})
        }
    }));

    Amdi.applyCMD({pattern: 'spdf ?(.*)', fromMe: false, desc: Lang.SPDF_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.SPDF_LINK);
    
        var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Lang.SPDF_PROC);
    
        await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf})
    
    }));

    Amdi.applyCMD({pattern: 'quote ?(.*)', fromMe: false, desc: Lang.QUOTE_DESC}, async (message, match) => {
        if (match[1] === 'xx') return await message.reply(Lang.NEED_LOCATIONA);
        const url = `https://api.quotable.io/random`;
        try {
            const response = await got(url);
            const json = JSON.parse(response.body);
            if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🔱 ' + Lang.QUOTE +'* ```' + json.content + '```\n\n' +
            '*🍁' + Lang.AUTHOR +'* ```' + json.author+ '```\n', MessageType.text, {quoted: message.data});
        } catch {
            return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDA, MessageType.text, {quoted: message.data});
        }
    });

    Amdi.applyCMD({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: false, desc: Lang.CURRENCY_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text, {quoted: message.data});
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text, {quoted: message.data})
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text, {quoted: message.data})
                console.log(err)
            }
        }
    }));

    Amdi.applyCMD({pattern: 'tts (.*)', fromMe: false, desc: Lang.TTS_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if(match[1] === undefined || match[1] == "")
            return;
    
        let 
            LANG = config.LANG.toLowerCase(),
            ttsMessage = match[1],
            SPEED = 1.0

        if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
            LANG = langMatch[1]
            ttsMessage = ttsMessage.replace(langMatch[0], "")
        } 
        if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
            SPEED = parseFloat(speedMatch[1])
            ttsMessage = ttsMessage.replace(speedMatch[0], "")
        }
    
        var buffer = await googleTTS.synthesize({
            text: ttsMessage,
            voice: LANG
        });
        await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
    }));

    Amdi.applyCMD({pattern: 'yt ?(.*)', fromMe: false, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text, {quoted: message.data});

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text, {quoted: message.data});
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '🍁 *' + video.title + '* - ' + video.url + '\n\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text, {quoted: message.data});
        await reply.delete();
    }));

    Amdi.applyCMD({pattern: 'wiki ?(.*)', fromMe: false, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text, {quoted: message.data});

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    Amdi.applyCMD({pattern: 'img ?(.*)', fromMe: false, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});
        gis(match[1], async (error, result) => {
            for (var i = 0; i < (result.length < 6 ? result.length : 6); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image, {quoted: message.data});
                });
            }

            message.reply(Lang.IMG.format((result.length < 6 ? result.length : 6), match[1]));
        });
    }));

    Amdi.applyCMD({pattern: 'wame ?(.*)', fromMe: false, desc: Lang.WAME_DESC}, (async (message, match) => {    
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid, Lang.WAME.format(message.reply_message.jid.split('@')[0], message.reply_message.jid.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}
            });
        } else if (message.mention !== false) {
            message.mention.map(async user => {
                await message.client.sendMessage(message.jid, Lang.WAME.format(user.split('@')[0], user.replace('@s.whatsapp.net', ' ')), MessageType.text, {
                    contextInfo: {mentionedJid: [user.replace('c.us', 's.whatsapp.net')]}
                }); 
            });
        } else {
            await message.client.sendMessage(message.jid, Lang.NEED_UWONG, MessageType.text);
        }
    }));


    Amdi.applyCMD({ pattern: 'github ?(.*)', fromMe: false, desc: Glang.GİTHUB_DESC }, async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }


        const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text)

        await axios
          .get(`https://api.lolhuman.xyz/api/github/${userName}?apikey=d3be4b65ca9dab633c773d66`)
          .then(async (response) => {

            const {
              hireable,
              type,
              avatar,
              name,
              fullname, 
              blog, 
              location,
              email,
              public_repos,
              bio,
              following,
              followers,
              public_gists,
              url,
              last_updated,
              joined_on,
            } = response.data.result

            const githubscrap = await axios.get(avatar, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${Glang.USERNAME}* ${name} \n*${Glang.NAME}* ${fullname} \n*${Glang.FOLLOWERS}* ${followers} \n*${Glang.FOLLOWİNG}* ${following} \n*${Glang.BİO}* ${bio} \n*${Glang.REPO}* ${public_repos} \n*${Glang.GİST}* ${public_gists} \n*${Glang.LOCATİON}* ${location} \n*${Glang.MAİL}* ${email} \n*${Glang.BLOG}* ${blog} \n*${Glang.COMPANY}* ${type} \n*${Glang.HİRE}* ${hireable === "true" ? Glang.HİRE_TRUE : Glang.HİRE_FALSE} \n*${Glang.JOİN}* ${joined_on} \n*${Glang.UPDATE}* ${last_updated} \n*${Glang.URL}* ${url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Glang.NOT, MessageType.text),
          )
      },
    )

    Amdi.applyCMD({ pattern: 'tk ?(.*)', fromMe: false, desc: TKlang.TK_DESC }, async (message, match) => {

        const userName = match[1]
  
         if (userName === '') return await message.client.sendMessage(message.jid, TKlang.REPLY, MessageType.text)
 
         await axios
           .get(`https://api.lolhuman.xyz/api/stalktiktok/${userName}?apikey=d3be4b65ca9dab633c773d66`)
           .then(async (response) => {
 
             const {
               username,
               nickname,
               bio,
               followers,
               followings, 
               likes, 
               video,
               user_picture,
             } = response.data.result
 
             const tkscrap = await axios.get(user_picture, 
               {responseType: 'arraybuffer',
             })
 
             const msg = `*${TKlang.USERNAME}* ${username} \n\n*${TKlang.NAME}* ${nickname} \n\n*${TKlang.BIO}*\n${bio} \n\n*${TKlang.FOLLOWERS}* ${followers} \n\n*${TKlang.FOLLOWING}* ${followings} \n\n*${TKlang.LIKES}* ${likes} \n\n*${TKlang.VIDEOS}* ${video} \n\n`
 
             await message.sendMessage(Buffer.from(tkscrap.data), MessageType.image, { 
               caption: msg,
             })
           })
           .catch(
             async (err) => await message.client.sendMessage(message.jid, TKlang.NOT, MessageType.text),
           )
       },
     )
}
