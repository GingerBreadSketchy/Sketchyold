/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const sin = `💠📃 ● *Text සිට Image Effect List* ● 📃💠\n\n` + 
`⚙️විධානය: *.glitch*\nℹ️විස්තර: Text සිට Tiktok glitch effect.\n_(Ex: .glitch Queen/Amdi)_\n\n` + 
`⚙️විධානය: *.pemoji*\nℹ️විස්තර: Emoji සිට පින්තූරයට.\n\n` + 
`⚙️විධානය: *.hacker*\nℹ️විස්තර: ඔබේ නම සමඟ hacker wallpaper සෑදීම.\n\n` + 
`⚙️විධානය: *.gaming*\nℹ️විස්තර: ඔබේ නම සමඟ gaming logo සෑදීම.\n\n` + 
`⚙️විධානය: *.fpslogo*\nℹ️විස්තර: ඔබේ නම සමඟ fps gaming logo සෑදීම.\n\n` + 
`⚙️විධානය: *.sand*\nℹ️විස්තර: ඔබේ text සමඟ sand summer effect wallpaper සෑදීම.\n\n` + 
`⚙️විධානය: *.holo*\nℹ️විස්තර: ඔබේ text සඳහා holographic effect wallpaper සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.shadow*\nℹ️විස්තර: ඔබේ text සඳහා සෙවනැලි effect wallpaper සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.grafiti*\nℹ️විස්තර: ඔබේ text සඳහා grafiti wallpaper සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.cup*\nℹ️විස්තර: ඔබට ඔබේ text කෝප්පයක් මත ටයිප් කළ හැකිය.\n\n` + 
`⚙️විධානය: *.sad*\nℹ️විස්තර: ඔබට ඔබේ text glass මත ටයිප් කළ හැකිය.\n\n` + 
`⚙️විධානය: *.wolfm*\nℹ️විස්තර: ලෝහමය වෘක බැනරයකින් ඔබේ text ටයිප් කළ හැකිය.\n\n` + 
`⚙️විධානය: *.fflogo*\nℹ️විස්තර: ඔබේ නම සමඟ Free Fire logo සෑදීම.\n\n` + 
`⚙️විධානය: *.flame*\nℹ️විස්තර: ඔබට ඔබේ text ගිනිදැල් බවට පත් කළ හැකිය.\n\n` + 
`⚙️විධානය: *.avenger*\nℹ️විස්තර: ඔබේ නම සමඟ Avengers logo සෑදීම.\n_(Ex: .avenger Queen/Amdi)_\n\n` + 
`⚙️විධානය: *.harrypoter*\nℹ️විස්තර: ඔබට හැරීපොටර් වර්ගයේ logo සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.dota*\nℹ️විස්තර: ඔබේ නම සමඟ DOTA logo සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.lol*\nℹ️විස්තර: ඔබේ නම සමඟ LEAGUE OF LEGENDS logo සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.aov*\nℹ️විස්තර: ඔබේ නම සමඟ Arena Of Valor logo සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.ml*\nℹ️විස්තර: ඔබේ නම සමඟ Mobile Legends logo සෑදිය හැකිය.\n\n` + 
`⚙️විධානය: *.valorant*\nℹ️විස්තර: ඔබේ නම සමඟ valorant logo සෑදිය හැකිය. \n_(Ex: .valorant QueenAmdi/Facebook/Twitter)_\n\n` + 
`⚙️විධානය: *.lionlogo*\nℹ️විස්තර: ඔබේ නම සමඟ lion logo සෑදීම.\n_(Ex: .lionlogo Queen/Amdi)_\n\n` + 
`⚙️විධානය: *.metal*\nℹ️විස්තර: ඔබේ නම සමඟ iron logo සෑදීම.\n\n` + 
`⚙️විධානය: *.pornhub*\nℹ️විස්තර: එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n` + 
`⚙️විධානය: *.sandwriting*\nℹ️විස්තර: එය සපයා ඇති textයේ වැලි රූපයක් යවයි.\n\n` + 
`⚙️විධානය: *.vintage*\nℹ️විස්තර: එය සපයා ඇති textයේ buld display රූපයක් යවයි. \n_(Ex: .vintage Queen/Amdi_\n\n` + 
`⚙️විධානය: *.bplogo*\nℹ️විස්තර: එය සපයා ඇති textයේ black pink logo යවයි.\n\n` + 
`⚙️විධානය: *.blood*\nℹ️විස්තර: එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.\n\n` + 
`⚙️විධානය: *.thunder*\nℹ️විස්තර: එය සපයා ඇති textයේ අකුණු සහිත රූපයක් යවයි.\n\n` + 
`⚙️විධානය: *.snow*\nℹ️විස්තර: එය සපයා ඇති textයේ හිම රූපයක් යවයි.\n\n` + 
`⚙️විධානය: *.light*\nℹ️විස්තර: එය සපයා ඇති textයේ light effect යවයි.\n\n` + 
`⚙️විධානය: *.cloud*\nℹ️විස්තර: එය සපයා ඇති textයේ අහස රූපයක් යවයි.\n\n` + 
`⚙️විධානය: *.sparkling*\nℹ️විස්තර: Text දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n` + 
`⚙️විධානය: *.watercolour*\nℹ️විස්තර: Text ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
`⚙️විධානය: *.royal*\nℹ️විස්තර: Text royal තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
`⚙️විධානය: *.neonlight*\nℹ️විස්තර: Text නියොන් ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
`⚙️විධානය: *.gneon*\nℹ️විස්තර: Text green neon ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
`⚙️විධානය: *.3dtext*\nℹ️විස්තර: ලබා දී ඇති text ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
`⚙️විධානය: *.v3d*\nℹ️විස්තර: සපයා ඇති text violet ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
`Check github for bot:  https://github.com/BlackAmda/QueenAmdi`

const eng = `💠📃 ● *Text to effect images List* ● 📃💠\n\n` + 
`⚙️Command: *.glitch*\nℹ️Description: Text to Tiktok glitch effect.\n_(Ex: .glitch Queen/Amdi)_\n\n` + 
`⚙️Command: *.pemoji*\nℹ️Description: Emoji to PNG.\n\n` + 
`⚙️Command: *.hacker*\nℹ️Description: Text to Hacker wallpaper.\n\n` + 
`⚙️Command: *.gaming*\nℹ️Description: Text to Gaming logo.\n\n` + 
`⚙️Command: *.fpslogo*\nℹ️Description: Text to FPS Gaming logo.\n\n` + 
`⚙️Command: *.sand*\nℹ️Description: Text to Sand summer themed wallpaper.\n\n` + 
`⚙️Command: *.holo*\nℹ️Description: Text to holographic effect.\n\n` + 
`⚙️Command: *.shadow*\nℹ️Description: Text to shadow effect.\n\n` + 
`⚙️Command: *.grafiti*\nℹ️Description: Text to grafiti wallpaper.\n\n` + 
`⚙️Command: *.cup*\nℹ️Description: Cup themed image.\n\n` + 
`⚙️Command: *.sad*\nℹ️Description: Text to wet glass effect.\n\n` + 
`⚙️Command: *.wolfm*\nℹ️Description: Text to metal wolf badge.\n\n` + 
`⚙️Command: *.fflogo*\nℹ️Description: Text to FreeFire logo\n\n` + 
`⚙️Command: *.flame*\nℹ️Description: Text to fire effect.\n\n` + 
`⚙️Command: *.avenger*\nℹ️Description: Text to avenger logo\n_(Ex: .avenger Queen/Amdi)_\n\n` + 
`⚙️Command: *.harrypoter*\nℹ️Description: Text to harry potter themed logo.\n\n` + 
`⚙️Command: *.dota*\nℹ️Description: Text to DOTA logo.\n\n` + 
`⚙️Command: *.lol*\nℹ️Description: Text to League Of Legends logo.\n\n` + 
`⚙️Command: *.aov*\nℹ️Description: Text to  Arena Of Valor logo.\n\n` + 
`⚙️Command: *.ml*\nℹ️Description: Text to Mobile Legends logo.\n\n` + 
`⚙️Command: *.valorant*\nℹ️Description: Text to Valorant Banner. \n_(Ex: .valorant QueenAmdi/Facebook/Twitter)_\n\n` + 
`⚙️Command: *.lionlogo*\nℹ️Description: Text to lion logo.\n_(Ex: .lionlogo Queen/Amdi)_\n\n` + 
`⚙️Command: *.metal*\nℹ️Description: Text to metalic logo.\n\n` + 
`⚙️Command: *.pornhub*\nℹ️Description: Text to PornHub themed logo.\nType */* to split two words.\n\n` + 
`⚙️Command: *.sandwriting*\nℹ️Description: Text to sand themed logo.\n\n` + 
`⚙️Command: *.vintage*\nℹ️Description: Text to bulb display unit. \n_(Ex: .vintage Queen/Amdi_\n\n` + 
`⚙️Command: *.bplogo*\nℹ️Description: Text to Black Pink themed logo.\n\n` + 
`⚙️Command: *.blood*\nℹ️Description: Text to Blood themed.\n\n` + 
`⚙️Command: *.thunder*\nℹ️Description: Text to thunder effect wallpaper.\n\n` + 
`⚙️Command: *.snow*\nℹ️Description: Text to Snow theme.\n\n` + 
`⚙️Command: *.light*\nℹ️Description: Text to light theme banner.\n\n` + 
`⚙️Command: *.cloud*\nℹ️Description: Text to CLoud themed wallpaper.\n\n` + 
`⚙️Command: *.sparkling*\nℹ️Description: Text to sparkling effect.\nType */* to split two words.\n\n` + 
`⚙️Command: *.watercolour*\nℹ️Description: Text to Water Colour art.\n\n` + 
`⚙️Command: *.royal*\nℹ️Description: Text to royal themed text.\n\n` + 
`⚙️Command: *.neonlight*\nℹ️Description: Text to neon light theme.\n\n` + 
`⚙️Command: *.gneon*\nℹ️Description: Text to green neon light theme.\n\n` + 
`⚙️Command: *.3dtext*\nℹ️Description: Text to 3D text effect.\n\n` + 
`⚙️Command: *.v3d*\nℹ️Description: Text to 3D violet text effect.\n\n` + 
`Check github for bot:  https://github.com/BlackAmda/QueenAmdi`

if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'effectimg', fromMe: true,  deleteCommand: false, desc: Lang.EFFECT_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'effectimg', fromMe: false, desc: Lang.EFFECT_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
}

if (Config.LANG == 'SI') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'effectimg', fromMe: true,  deleteCommand: false, desc: Lang.EFFECT_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'effectimg', fromMe: false, desc: Lang.EFFECT_DESC}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,sin, MessageType.text,{quoted: message.data});
        }));
    }
}