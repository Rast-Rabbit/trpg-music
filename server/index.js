// server.js
const express = require('express');
const app = express();
const port = 8080;
const {token} = require('../config.json')
// Discord bot
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds
    ]
});


client.login(token); 


app.get('/sendmessage', async (req, res) => {
    const guild = client.guilds.cache.get('756183113285107844'); // Your Discord server's id
    const channel = guild.channels.cache.get('756183113289302018'); // The id of the channel the bot should send a message to
    channel.send('Hello, world!');
    res.send('Message sent to the channel');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

