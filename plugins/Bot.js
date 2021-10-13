const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {
            
            var image = await axios.get ('https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg', {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `❰🐼🧭SketchyWhatsapp Bot Ke🧭🐼❱
Use *.sketchy* to start  this Bot
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
  🥶AM ALIVE FAM🥶
🔖 *Developer* ɢɪɴɢᴇʀ ꜱᴋᴇᴛᴄʜʏ
🔖 *Language*  - NODE JS

     💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🧭 *Dark-Knight-Hiruwa* 🧭
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🧭 *Hiruwa-T-Rex* 
➻ *ʙᴏᴛ ʙᴀꜱᴇ ᴏᴡɴᴇʀ* 

🧭 *Shadowalker* 🧭
➻ *ʙᴏᴛ ᴛᴇꜱᴛ ʜᴇʟᴘᴇᴇʀ*       
         🧭 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🧭
         🧭 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🧭
         🧭 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🧭           
         
 🏅👻🐼🏅👻🐼🏅👻🐼🏅👻🐼🏅👻🐼
 🔖 *𝙲𝚁𝙴𝙰𝚃𝙴𝚁 -ɢɪɴɢᴇʀʙʀᴇᴀᴅꜱᴋᴇᴛᴄʜʏ* 🔖
           🧭 *ᴀᴅᴍɪɴꜱ* ™🧭
╹ 🏅 *SidohSprywire* ╹
╹ 🏅 *GeekBram*╹
╹ 🏅 *Escky*    ╹

 ♥  ʟɪɴᴋ - https://giveit.link/gingerbreadsketchy
  🏅 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🏅
🎈 *Telegram*  👉🏼 t.me/gingerbreadsketchy
🎈 *Whatsapp Me* 👉🏼  wa.me/+254792893310
 🇰🇪KENYA SINHALA WHATSAPP USER BOT🇰🇪`})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'bot', fromMe: true,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `❰🐼🧭SketchyWhatsapp Bot Ke🧭🐼❱
Use *.sketchy* to start  this Bot
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
  🥶AM ALIVE FAM🥶
🔖 *Developer* ɢɪɴɢᴇʀ ꜱᴋᴇᴛᴄʜʏ
🔖 *Language*  - NODE JS

     💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🧭 *Dark-Knight-Hiruwa* 🧭
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🧭 *Hiruwa-T-Rex* 
➻ *ʙᴏᴛ ʙᴀꜱᴇ ᴏᴡɴᴇʀ* 

🧭 *Shadowalker* 🧭
➻ *ʙᴏᴛ ᴛᴇꜱᴛ ʜᴇʟᴘᴇᴇʀ*       
         🧭 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🧭
         🧭 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🧭
         🧭 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🧭           
         
 🏅👻🐼🏅👻🐼🏅👻🐼🏅👻🐼🏅👻🐼
 🔖 *𝙲𝚁𝙴𝙰𝚃𝙴𝚁 -ɢɪɴɢᴇʀʙʀᴇᴀᴅꜱᴋᴇᴛᴄʜʏ* 🔖
           🧭 *ᴀᴅᴍɪɴꜱ* ™🧭
╹ 🏅 *SidohSprywire* ╹
╹ 🏅 *GeekBram*╹
╹ 🏅 *Escky*    ╹

 ♥  ʟɪɴᴋ - https://giveit.link/gingerbreadsketchy
  🏅 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🏅
🎈 *Telegram*  👉🏼 t.me/gingerbreadsketchy
🎈 *Whatsapp Me* 👉🏼  wa.me/+254792893310
 🇰🇪KENYA SINHALA WHATSAPP USER BOT🇰🇪` })

    }));
  
  Amdi.applyCMD({pattern: 'bot', fromMe: false,  deleteCommand: false }, (async (message, match) => {

          
            var image = await axios.get ('https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg', {responseType: 'arraybuffer'})
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: `❰🐼🧭SketchyWhatsapp Bot Ke🧭🐼❱
Use *.sketchy* to start  this Bot
╔┓┏╦━━╦┓╔┓╔━━╗╔╗
║┗┛║┗━╣┃║┃║╯╰║║║
║┏┓║┏━╣┗╣┗╣╰╯║╠╣
╚┛┗╩━━╩━╩━╩━━╝╚╝
  🥶AM ALIVE FAM🥶
🔖 *Developer* ɢɪɴɢᴇʀ ꜱᴋᴇᴛᴄʜʏ
🔖 *Language*  - NODE JS

     💢 *𝘚𝘗𝘌𝘊𝘐𝘈𝘓 𝘛𝘏𝘈𝘕𝘒𝘚* 💢

🧭 *Dark-Knight-Hiruwa* 🧭
➻ *ʙᴏᴛ ɢʀᴀᴘʜɪᴄ ᴅᴇꜱɪɢʜɴᴇʀ*

🧭 *Hiruwa-T-Rex* 
➻ *ʙᴏᴛ ʙᴀꜱᴇ ᴏᴡɴᴇʀ* 

🧭 *Shadowalker* 🧭
➻ *ʙᴏᴛ ᴛᴇꜱᴛ ʜᴇʟᴘᴇᴇʀ*       
         🧭 *𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴* 🧭
         🧭 *𝙻𝙸𝙺𝙴 𝚄𝚂* 🧭
         🧭 *𝙲𝙾𝙼𝙼𝙴𝙽𝚃 𝚄𝚂* 🧭           
         
 🏅👻🐼🏅👻🐼🏅👻🐼🏅👻🐼🏅👻🐼
 🔖 *𝙲𝚁𝙴𝙰𝚃𝙴𝚁 -ɢɪɴɢᴇʀʙʀᴇᴀᴅꜱᴋᴇᴛᴄʜʏ* 🔖
           🧭 *ᴀᴅᴍɪɴꜱ* ™🧭
╹ 🏅 *SidohSprywire* ╹
╹ 🏅 *GeekBram*╹
╹ 🏅 *Escky*    ╹

 ♥  ʟɪɴᴋ - https://giveit.link/gingerbreadsketchy
  🏅 *ꜰᴏʀ 24/7 ʜᴇʟᴘ ᴍꜱɢ ᴍᴇ* 🏅
🎈 *Telegram*  👉🏼 t.me/gingerbreadsketchy
🎈 *Whatsapp Me* 👉🏼  wa.me/+254792893310
 🇰🇪KENYA SINHALA WHATSAPP USER BOT🇰🇪 `  ,quoted: message.data})

    }));
}
