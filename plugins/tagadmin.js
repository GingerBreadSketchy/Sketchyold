const QueenSew = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Config = require('../config');

const Language = require('../language');

if (Config.WORKTYPE == 'private') {

    QueenSew.applyCMD({pattern: 'tagadmin', fromMe: true }, (async (message, match) => {

        let grup = await message.client.groupMetadata(message.jid);

        var jids = [];

        mesaj = '';

        grup['participants'].map(async (uye) => {

            if (uye.isAdmin) {

                mesaj += '╠═➢ ⛔ @' + uye.id.split('@')[0] + '\n╠══➢ 👑 wa.me/'+ uye.id.split('@')[0] + '  👑\n║\n';

                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));

            }

        });

        await message.client.sendMessage(message.jid,'╔═════════════════════════\n║\n║ ⛔    *👑 Group Admins 👑*    ⛔\n║\n║\n' + mesaj + '╚═════════════════════════', MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})

    }));

}

else if (Config.WORKTYPE == 'public') {

    QueenSew.applyCMD({pattern: 'tagadmin', fromMe: false }, (async (message, match) => {

        let grup = await message.client.groupMetadata(message.jid);

        var jids = [];

        mesaj = '';

        grup['participants'].map(async (uye) => {

            if (uye.isAdmin) {

                mesaj += '╠═➢ ⛔ @' + uye.id.split('@')[0] + '\n╠══➢ 👑 wa.me/' + uye.id.split('@')[0] + '  👑\n║\n';

                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));

            }

        });

        await message.client.sendMessage(message.jid,'╔═════════════════════════\n║\n║ ⛔    *👑 Group Admins 👑*    ⛔\n║\n║\n' + mesaj + '╚═════════════════════════', MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})

    }));

    QueenSew.applyCMD({pattern: 'tagadmin', fromMe: true }, (async (message, match) => {

        let grup = await message.client.groupMetadata(message.jid);

        var jids = [];

        mesaj = '';

        grup['participants'].map(async (uye) => {

            if (uye.isAdmin) {

                mesaj += '╠═➢⛔ @' + uye.id.split('@')[0] + '\n╠══➢ 👑 wa.me/' + uye.id.split('@')[0] + '  👑\n║\n';

                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));

            }

        });

        await message.client.sendMessage(message.jid,'╔═════════════════════════\n║\n║ ⛔    *👑 Group Admins 👑*    ⛔\n║\n║\n' + mesaj + '╚═════════════════════════', MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})

    }));

}
