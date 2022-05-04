const { Client, Intents } = require("discord");


// Secrets
const TOKEN = new Telegraf(process.env.TOKEN);

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.once('ready', () => {
	console.log('Ready!');
});


client.login(TOKEN);