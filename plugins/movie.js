/* Copyright (C) 2021 Queen Amdi.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Queen Amdi - Black Amda
*/

const Amdi = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const Config = require('../config');
const got = require('got');

//Movie-scraper

if (Config.WORKTYPE == 'private') {
	Amdi.applyCMD({ pattern: 'movie ?(.*)', fromMe: true, desc: "Movies වල විස්තර ලබාදීම." }, (async (message, match) => {
		if (match[1] === '') return await message.client.sendMessage(message.jid, '*නමක් ලබාදෙන්න.*', MessageType.text, { quoted: message.data });
		let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
		let msg = '```';
		msg += 'Title      : ' + json.Title + '\n\n';
		msg += 'Year       : ' + json.Year + '\n\n';
		msg += 'Rated      : ' + json.Rated + '\n\n';
		msg += 'Released   : ' + json.Released + '\n\n';
		msg += 'Runtime    : ' + json.Runtime + '\n\n';
		msg += 'Genre      : ' + json.Genre + '\n\n';
		msg += 'Director   : ' + json.Director + '\n\n';
		msg += 'Writer     : ' + json.Writer + '\n\n';
		msg += 'Actors     : ' + json.Actors + '\n\n';
		msg += 'Plot       : ' + json.Plot + '\n\n';
		msg += 'Language   : ' + json.Language + '\n\n';
		msg += 'Country    : ' + json.Country + '\n\n';
		msg += 'Awards     : ' + json.Awards + '\n\n';
		msg += 'BoxOffice  : ' + json.BoxOffice + '\n\n';
		msg += 'Production : ' + json.Production + '\n\n';
		msg += 'imdbRating : ' + json.imdbRating + '\n\n';
		msg += 'imdbVotes  : ' + json.imdbVotes + '```';
		await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
	}));
}

else if (Config.WORKTYPE == 'public') {
	Amdi.applyCMD({ pattern: 'movie ?(.*)', fromMe: false, desc: "Movies වල විස්තර ලබාදීම." }, (async (message, match) => {
		if (match[1] === '') return await message.client.sendMessage(message.jid, '*නමක් ලබාදෙන්න.*', MessageType.text, { quoted: message.data });
		let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
		let msg = '```';
		msg += 'Title      : ' + json.Title + '\n\n';
		msg += 'Year       : ' + json.Year + '\n\n';
		msg += 'Rated      : ' + json.Rated + '\n\n';
		msg += 'Released   : ' + json.Released + '\n\n';
		msg += 'Runtime    : ' + json.Runtime + '\n\n';
		msg += 'Genre      : ' + json.Genre + '\n\n';
		msg += 'Director   : ' + json.Director + '\n\n';
		msg += 'Writer     : ' + json.Writer + '\n\n';
		msg += 'Actors     : ' + json.Actors + '\n\n';
		msg += 'Plot       : ' + json.Plot + '\n\n';
		msg += 'Language   : ' + json.Language + '\n\n';
		msg += 'Country    : ' + json.Country + '\n\n';
		msg += 'Awards     : ' + json.Awards + '\n\n';
		msg += 'BoxOffice  : ' + json.BoxOffice + '\n\n';
		msg += 'Production : ' + json.Production + '\n\n';
		msg += 'imdbRating : ' + json.imdbRating + '\n\n';
		msg += 'imdbVotes  : ' + json.imdbVotes + '```';
		await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
	}));
}