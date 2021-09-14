const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './queenamdi.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: '❰🍁🔱  T Rex BOT v1.0 🔱🍁❱ - Public Stable',
    SESSION: process.env.TREX_SESSION === undefined ? '' : process.env.TREX_SESSION,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.ibb.co/WGNfQhB/IMG-20210820-001112.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'si' : process.env.LANGUAGE.toUpperCase(),
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    AUTO_BIO: process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO,
    RULES: process.env.GROUP_RULES === undefined ? 'No Rules' : process.env.GROUP_RULES,
    ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    MENU: process.env.MENU === undefined ? 'panel' : process.env.MENU,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://i.ibb.co/WGNfQhB/IMG-20210820-001112.jpg' : process.env.ALIVE_LOGO,
    WELCOME_LOGO: process.env.WELCOME_LOGO === undefined ? 'https://www.mboxdrive.com/1413772033.mp4' : process.env.WELCOME_LOGO,
    BYE_LOGO: process.env.BYE_LOGO === undefined ? 'https://tinyurl.com/queenamdi-goodbye' : process.env.BYE_LOGO,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    ANTIBAD: process.env.ANTIBAD === undefined ? 'false' : process.env.ANTIBAD,
    WARN1: process.env.WARN_MSG_1 === undefined ? '\n    📛 GROUP WARN 📛 \n\n🔱 NO WARNS 🔱\n\n': process.env.WARN_MSG_1,
    WARN2: process.env.WARN_MSG_2 === undefined ? '\n    📛 GROUP WARN 📛 \n\n🔱 NO WARNA 🔱\n\n': process.env.WARN_MSG_2,
    WARN3: process.env.WARN_MSG_3 === undefined ? '\n    📛 GROUP WARN 📛 \n\n🔱 NO WARNA 🔱\n\n': process.env.WARN_MSG_3,
    WARN4: process.env.WARN_MSG_4 === undefined ? '\n    📛 GROUP WARN 📛 \n\n🔱 NO WARNA 🔱\n\n': process.env.WARN_MSG_4,
    GROUPN1: process.env.GROUP_NAME_1 === undefined ? 'T-REX OFFICIAL SUPPORT': process.env.GROUP_NAME_1,
    GROUPL1: process.env.GROUP_LINK_1 === undefined ? 'https://chat.whatsapp.com/GT5V8RakkftB7DAKWMeQML': process.env.GROUP_LINK_1,
    GROUPN2: process.env.GROUP_NAME_2 === undefined ? 'T-REX OFFICIAL TEST': process.env.GROUP_NAME_2,
    GROUPL2: process.env.GROUP_LINK_2 === undefined ? 'https://chat.whatsapp.com/LtXba8cXnFjLZw0QAaiPau': process.env.GROUP_LINK_2,
    GROUPN3: process.env.GROUP_NAME_3 === undefined ? '': process.env.GROUP_NAME_3,
    GROUPL3: process.env.GROUP_LINK_3 === undefined ? '': process.env.GROUP_LINK_3,
    GROUPN4: process.env.GROUP_NAME_4 === undefined ? '': process.env.GROUP_NAME_4,
    GROUPL4: process.env.GROUP_LINK_4 === undefined ? '': process.env.GROUP_LINK_4,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    CHAT_BOT: process.env.CHAT_BOT === undefined ? 'true' : process.env.CHAT_BOT,
    AUTOVOICE: process.env.VOICE_CHAT === undefined ? 'true' : process.env.VOICE_CHAT,
    CCLEAR_JID: process.env.CCLEAR_JID === undefined ? 'default' : process.env.CCLEAR_JID,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    ZONE: process.env.ZONE === undefined ? 'TRextaken' : process.env.ZONE,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    BRANCH: 'main',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './queenamdi.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    AMDANIWASA: "393475528094-1415817281",
    SUPPORT1: "96176912958-1458298055",
    SUPPORT2: "393472769604-1446476993",
    NAGRP: "972542559113-1376904403"
};
