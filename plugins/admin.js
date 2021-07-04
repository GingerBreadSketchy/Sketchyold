/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Asena = require('../events');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('admin');

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Asena.addCommand({pattern: 'admin', desc: Lang.ADMINDESC, dontAddCommandList: false}, (async (message, match) => {    

    await message.sendMessage('💠🔑 ●QUEEN AMDI ADMIN PANEL● 🔑💠\n\n⚙️විධානය: *.ban*\nℹ️විස්තරය: කණ්ඩායමේ කෙනෙකු ඉවත් කරන්න. පණිවිඩයට mention දෙන්න හෝ විධානය භාවිතා කිරීමට පුද්ගලයෙකු ටැග් කරන්න.\n\n⚙️විධානය: *.add*\nℹ️විස්තරය: කණ්ඩායමට යමෙකු එකතු කරයි. \n\n⚙️විධානය: *.mute*\nℹ️විස්තරය: කණ්ඩායම් chat නිශ්ශබ්ද කරන්න. පණිවිඩ යැවිය හැක්කේ admin පමණි.\n\n⚙️විධානය: *.unmute*\nℹ️විස්තරය: කණ්ඩායම් chat නිශ්ශබ්ද කිරීම ඉවත් කිරීම. ඕනෑම කෙනෙකුට පණිවිඩයක් යැවිය හැකිය.\n\n⚙️විධානය: *.promote*\nℹ️විස්තරය: සාමාජිකයන් admin කරයි.\n\n⚙️විධානය: *.demote*\nℹ️විස්තරය: admin සාමාජිකයෙකු බවට පත් කරන්න.\n\n⚙️විධානය: *.plugin*\nℹ️විස්තරය: බාහිර plugins ස්ථාපනය කරන්න.\n\n⚙️විධානය: *.remove*\nℹ️විස්තරය: Plugin ඉවත් කරයි.\n\n⚙️විධානය: *.invite*\nℹ️විස්තරය: කණ්ඩායමේ ආරාධනා link සපයයි.\n\n⚙️විධානය: *.afk*\nℹ️විස්තරය: එය bot AFK බවට පත් කරයි - Away From Keyboard.\n\n⚙️විධානය: *.restart*\nℹ️විස්තරය: Restart the bot.\n\n⚙️විධානය: *.shutdown*\nℹ️විස්තරය: Shutdown the Bot.\n\n⚙️විධානය: *.setvar*\nℹ️විස්තරය: Heroku config vars සකසන්න.\n\n⚙️විධානය: *.getvar*\nℹ️විස්තරය: Heroku config var ලබා ගන්න.\n\n⚙️විධානය: *.speedtest*\nℹ️විස්තරය: Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.\n\n⚙️විධානය: *.filter*\nℹ️විස්තරය: එය filters එක් කරයි. කවුරුහරි ඔබේ filter word ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලිවුවහොත් එය ඔබගේ filters ලැයිස්තුව පෙන්වනු ඇත.\n\n⚙️විධානය: *.stop*\nℹ️විස්තරය: ඔබ කලින් එකතු කළ filters නවත්වයි.\n\n⚙️විධානය: *.welcome*\nℹ️විස්තරය: එය පිළිගැනීමේ පණිවිඩය සකසයි.\n\n⚙️විධානය: *.goodbye*\nℹ️විස්තරය: සමුගැනීමේ පණිවිඩය සකසයි.\n\n⚙️විධානය: *.kickme*\nℹ️විස්තරය: එය විධානය ලබා දී ඇති කණ්ඩායමෙන් bot ඉවත් කරයි.\n\n⚙️විධානය: *.pp*\nℹ️විස්තරය: ඔබ mention සපයන ඡායාරූපය, bot profile ඡායාරූපය කරයි.\n\n⚙️විධානය: *.block*\nℹ️විස්තරය: Block tagged user.\n\n⚙️විධානය: *.unblock*\nℹ️විස්තරය: Unblock tagged user.\n\n⚙️විධානය: *.jid*\nℹ️විස්තරය: පරිශීලකයාගේ JID ලබා දෙයි.\n\n⚙️විධානය *.tagall*\nℹ️විස්තරය: කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි.\n\n⚙️විධානය: *.update*\nℹ️විස්තරය: Updates පරීක්ෂා කරයි.\n\n⚙️විධානය: *.update now*\nℹ️විස්තරය: එය බොට් update කරයි.\n\n⚙️විධානය: *.dyno*\nℹ️විස්තරය: Showing heroku dyno hours.\n\n⚙️විධානය: *.sysd*\nℹ️විස්තරය: පද්ධති සංඛ්යාලේඛන පෙන්වීම.\n\n⚙️විධානය: *.scam*\nℹ️විස්තරය: මිනිත්තු 5 ක ව්යාජ ක්රියා නිර්මාණය කරයි.\n\n*⚠️ඉහත විධාන Admin, Bot සහ SUDO අංක සඳහා පමණක් වැඩ කරයි.*');

}));

Asena.addCommand({pattern: 'ban ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.BAN_DESC, dontAddCommandList: true}, (async (message, match) => {  
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Config.BANMSG == 'default') {
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupRemove(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
    else {
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Config.BANMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Config.BANMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupRemove(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
}));

Asena.addCommand({pattern: 'add(?: |$)(.*)', fromMe: true, onlyGroup: true, desc: Lang.ADD_DESC, dontAddCommandList: true}, (async (message, match) => {  
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);
    
    if (match[1] !== '') {
        match[1].split(' ').map(async (user) => {
            await message.client.groupAdd(message.jid, [user + "@s.whatsapp.net"]);
            await message.client.sendMessage(message.jid,'```' + user + ' ' + Lang.ADDED +'```');
        });
    } else {
        return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
    }
}));

Asena.addCommand({pattern: 'promote ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.PROMOTE_DESC, dontAddCommandList: true}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Config.PROMOTEMSG == 'default') {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant);
            if (checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Lang.PROMOTED, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupMakeAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
                }

                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Lang.PROMOTED, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupMakeAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
    else {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant);
            if (checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Config.PROMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupMakeAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
                }

                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Config.PROMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupMakeAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
}));

Asena.addCommand({pattern: 'demote ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.DEMOTE_DESC, dontAddCommandList: true}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN);

    if (Config.DEMOTEMSG == 'default') {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant.split('@')[0]);
            if (!checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Lang.DEMOTED, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupDemoteAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (!checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
                }
            
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Lang.DEMOTED, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupDemoteAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
    else {
        if (message.reply_message !== false) {
            var checkAlready = await checkImAdmin(message, message.reply_message.data.participant.split('@')[0]);
            if (!checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Config.DEMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupDemoteAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkImAdmin(message, user);
                if (!checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
                }
            
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Config.DEMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupDemoteAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
}));

Asena.addCommand({pattern: 'mute ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.MUTE_DESC, dontAddCommandList: true}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Config.MUTEMSG == 'default') {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
        await message.client.sendMessage(message.jid,Lang.MUTED,MessageType.text);
    }
    else {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
        await message.client.sendMessage(message.jid,Config.MUTEMSG,MessageType.text);
    }
}));

Asena.addCommand({pattern: 'unmute ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.UNMUTE_DESC, dontAddCommandList: true}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN,MessageType.text);

    if (Config.UNMUTEMSG == 'default') {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
        await message.client.sendMessage(message.jid,Lang.UNMUTED,MessageType.text);
    }
    else {
        await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
        await message.client.sendMessage(message.jid,Config.UNMUTEMSG,MessageType.text);
    }
}));

Asena.addCommand({pattern: 'invite ?(.*)', fromMe: true, onlyGroup: true, desc: Lang.INVITE_DESC, dontAddCommandList: true}, (async (message, match) => {    
    var im = await checkImAdmin(message);
    if (!im) return await message.client.sendMessage(message.jid,Lang.IM_NOT_ADMIN, MessageType.text);
    var invite = await message.client.groupInviteCode(message.jid);
    await message.client.sendMessage(message.jid,Lang.INVITE + ' https://chat.whatsapp.com/' + invite, MessageType.text);
}));

module.exports = {
    checkImAdmin: checkImAdmin
};
