const Discord = require('discord.js');
const yt = require('ytdl-core');
const tokens = require('./tokens.json');
const client = new Discord.Client();
const audio = require("./commandes/audio")
let type = 1;

client.on('ready', () => {
	console.log('ready!');
	client.user.setPresence({game:{ name: "rien pour le moment",url:"https://www.twitch.tv/discordapp",type}})
});

client.on('message', msg => {
	if (!msg.content.startsWith(tokens.prefix)) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0]](msg);
	audio(msg, client);
});
client.login(process.env.token);
