const Discord = require('discord.js');
// const Discord = require('discord.js');

// Using Intents class
// const client = new Discord.Client();

const client = new Discord.Client({ intents: [] })

client.login('MTA1NTM3NDE3NzM3MDExMjAwMA.G_3AaD.8oAYgCUCwxFOfS1QSYJBwALFBpmlHrXOLnMSz8');

// client.on('ready',readyDiscord);
// function readyDiscord(){
//     console.log("Ready!!!");
// }

client.once('ready', () => {
    console.log("Discord bot online")
});

client.on('message', (msg) => {
//   Send back a reply when the specific command has been written by a user.
console.log(msg.content);
  if (msg.content === 'ping') {
    msg.reply('Hello, World!');
  }
});


const token  ="MTA1NTM2NjY4OTEzMjM4ODQ0Mw.GcKn9I.DopxOvWXn4CrPgqUbaiiXAauJsF-iIoGHLGrr0";

// const token = "MTA1NTM3NDE3NzM3MDExMjAwMA.G_3AaD.8oAYgCUCwxFOfS1QSYJBwALFBpmlHrXOLnMSz8";
client.login(token);
