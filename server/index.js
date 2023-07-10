// server.js
const express = require('express');
const app = express();
const port = 6666;
const {token} = require('../config.json')
// Discord bot
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds
    ]
});

client.once('ready', () => {
    console.log('Bot is ready!');

const guild = client.guilds.cache.get('756183113285107844');


const channel = guild.channels.cache.get('756183113289302018');


channel.send('Hello, world!');

});

client.login(token); 


/*
app.get('/join', async (req, res) => {
  // Retrieve the guild and the voice channel
  const guild = client.guilds.cache.get('756183113285107844'); // Your Discord server's id
  const channel = guild.channels.cache.get('756183113289302018'); // The id of the voice channel the bot should join

  if (channel.type === 'voice') {
    const connection = await channel.join();
    res.send('Bot has joined the voice channel');
  } else {
    res.send('Unable to join the voice channel');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
*/