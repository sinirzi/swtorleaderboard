
require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    bot.commands.set(command.name, command);
}
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;
const prefix = process.env.prefix;
bot.login(TOKEN);

bot.on('ready', () => {

    console.info(`Logged in as ${bot.user.tag}!`);
    bot.user.setPresence({
        status: 'available',
        activity: {
            name: '.help for commands',
            type: 'PLAYING',
        }
    });
});
bot.on('message', msg => {
    const args = msg.content.split(/ +/);
    const command = args.shift().toLowerCase();
   // console.info(`Called command: ${command}`);
    // console.info(`Called command: ${args}`);

    if (!bot.commands.has(command) || !msg.content.startsWith(prefix)) return;


    try {
        bot.commands.get(command).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('.help to get commands info');
        console.info(`Logged in as ${bot.user.tag}!`);
    }
});
