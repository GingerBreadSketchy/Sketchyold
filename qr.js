/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/


const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./queenamdi/');
const fs = require('fs');

async function queenAmdi () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 40000;
    
    conn.on('🍁➢ connecting', async () => {
        console.log(`${chalk.green.bold('T')}${chalk.blue.bold('-REX')}
${chalk.white.italic('T-REX Sting session')}

${chalk.blue.italic('ℹ️  Whatsapp වෙත සම්බන්ධ වෙමින්... කරුණාකර රැඳී සිටින්න.')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('T-REX session: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `TREX_SESSION="${st}"`);
        }

        console.log(
            chalk.blue.bold('If you are installing locale, you can start the bot with node bot.js.')
        );
        process.exit(0);
    });

    await conn.connect();
}

queenAmdi()
