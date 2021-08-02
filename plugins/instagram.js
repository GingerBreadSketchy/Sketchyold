/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda


const Amdi = require('../events')
const { MessageType } = require('@adiwajshing/baileys')
const axios = require('axios')
const cn = require('../config');

const Language = require('../language')
const { errorMessage, infoMessage } = require('../helpers')
const Lang = Language.getString('instagram')


if (cn.WORKTYPE == 'private') {

    Amdi.applyCMD({ pattern: 'readig ?(.*)', fromMe: true,  deleteCommand: false,  usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

        if (message.jid === '393475528094-1415817281@g.us') {

            return;
        }


        const userName = match[1]

        if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))

        await message.sendMessage(infoMessage(Lang.LOADING))

        await axios
          .get(`https://api.zeks.xyz/api/igstalk?apikey=fHZpP3j61LgH80BzanBm92jch1Q&username=${userName}`)
          .then(async (response) => {
            const {
            username,
            fullname,
            follower,
            following,
            post_count,
            highlight_count,
            profile_pic,
            bio,
            } = response.data.result

            const profileBuffer = await axios.get(profile_pic, {
              responseType: 'arraybuffer',
            })

            const msg = `
            *${Lang.NAME}*: ${fullname}
            *${Lang.USERNAME}*: ${username}
            *${Lang.BIO}*: ${bio}
            *${Lang.FOLLOWERS}*: ${follower}
            *${Lang.FOLLOWS}*: ${following}
            *${Lang.POST_COUNT}*: ${post_count}
            *${Lang.HL_COUNT}*: ${highlight_count}`

            await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
          )
      },
    )
}
else if (cn.WORKTYPE == 'public') {

  Amdi.applyCMD({ pattern: 'readig ?(.*)', fromMe: false, usage: Lang.USAGE, desc: Lang.DESC }, async (message, match) => {

    if (message.jid === '393475528094-1415817281@g.us') {

        return;
    }


    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage(Lang.NEED_WORD))

    await message.sendMessage(infoMessage(Lang.LOADING))

    await axios
      .get(`https://api.zeks.xyz/api/igstalk?apikey=fHZpP3j61LgH80BzanBm92jch1Q&username=${userName}`)
      .then(async (response) => {
        const {
        username,
        fullname,
        follower,
        following,
        post_count,
        highlight_count,
        profile_pic,
        bio,
        } = response.data.result

        const profileBuffer = await axios.get(profile_pic, {
          responseType: 'arraybuffer',
        })

        const msg = `
        *${Lang.NAME}*: ${fullname}
        *${Lang.USERNAME}*: ${username}
        *${Lang.BIO}*: ${bio}
        *${Lang.FOLLOWERS}*: ${follower}
        *${Lang.FOLLOWS}*: ${following}
        *${Lang.POST_COUNT}*: ${post_count}
        *${Lang.HL_COUNT}*: ${highlight_count}`

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage(Lang.NOT_FOUND + userName)),
      )
  },
  )
}
*/
