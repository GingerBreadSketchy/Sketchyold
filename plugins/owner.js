const Amdi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'owner', fromMe: true, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'*𝓖𝓲𝓷𝓰𝓮𝓻𝓑𝓻𝓮𝓪𝓭𝓢𝓴𝓮𝓽𝓬𝓱𝔂* wa.me/+254792893310' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n---------------------', MessageType.text);
        }
    }));
}

else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'owner', fromMe: false, desc: 'shows the detail of bot owner'}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        if (Config.OWNER == 'default') {
            await message.client.sendMessage(message.jid,'𝓖𝓲𝓷𝓰𝓮𝓻𝓑𝓻𝓮𝓪𝓭𝓢𝓴𝓮𝓽𝓬𝓱𝔂 🐙 wa.me/+254792893310' , MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,Config.OWNER + '\n\n--------------------', MessageType.text);
        }
    }));
}
