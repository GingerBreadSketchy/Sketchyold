/*
Queen Amdi Bot - A whatsapp user bot.
Copyright (C) 2021 Black Amda
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
A.N.Tech any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const Amdi = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const cn = require('../config');
const { fetchJson, getBuffer } = require('./fetcher')

const Language = require('../language')
const Lang = Language.getString('search')


if (cn.WORKTYPE == 'private') {
    Amdi.applyCMD({ pattern: 'mod ?(.*)', fromMe: true, desc: Lang.USAGE,  deleteCommand: false }, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
      var reply = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

      get_result = await fetchJson(`https://api.lolhuman.xyz/api/moddroid?apikey=${cn.ZONE}&query=${match[1]}`)
                      get_result = get_result.result
                      ini_txt = ""
                      for (var x of get_result) {
                          ini_txt += `Name : ${x.name}\n`
                          ini_txt += `Link : ${x.link}\n\n`
                      }

      await message.client.sendMessage(message.jid,ini_txt,MessageType.text, {quoted: message.data});
      await reply.delete();
    })

    Amdi.applyCMD({ pattern: 'spoti ?(.*)', fromMe: true, desc: Lang.SPO_USAGE,  deleteCommand: false }, async (message, match) => {

      if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
      var reply = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

      get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${cn.ZONE}&query=${match[1]}`)
                      get_result = get_result.result
                      ini_txt = ""
                      for (var x of get_result) {
                          ini_txt += `Title : ${x.title}\n`
                          ini_txt += `Artists : ${x.artists}\n`
                          ini_txt += `Link : ${x.link}\n\n`
                      }

      await message.client.sendMessage(message.jid,ini_txt,MessageType.text, {quoted: message.data});
      await reply.delete();
    })
}
else if (cn.WORKTYPE == 'public') {
  Amdi.applyCMD({ pattern: 'mod ?(.*)', fromMe: false, desc: Lang.USAGE }, async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var reply = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/moddroid?apikey=${cn.ZONE}&query=${match[1]}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }

    await message.client.sendMessage(message.jid,ini_txt,MessageType.text, {quoted: message.data});
    await reply.delete();
  })

  Amdi.applyCMD({ pattern: 'spoti ?(.*)', fromMe: false, desc: Lang.SPO_USAGE,  deleteCommand: false }, async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
    var reply = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${cn.ZONE}&query=${match[1]}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Artists : ${x.artists}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }

    await message.client.sendMessage(message.jid,ini_txt,MessageType.text, {quoted: message.data});
    await reply.delete();
  })
    
}
