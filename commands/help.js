const fetch = require('node-fetch');
const Discord = require('discord.js');
const utf8 = require('utf8');
const bot = new Discord.Client();

module.exports = {

    name: '.help',

    execute(msg, args) {
        console.log('help command called: ',args)
      /*  switch (args[0]) {
            case undefined:
                embedHelp();
                break;
            case 'search':
                embedHelpSr();
                break;
            case 'top3':
                embedHelpTop();
                break;
            case 'summary':
                embedHelpSummary();
                break;
        }*/
            const embedCommands = new Discord.MessageEmbed()
                .setTitle('BOT COMMANDS')
                .setFooter('Furkai#0331 for feedbacks,suggestions and bugs', 'https://static-cdn.jtvnw.net/emoticons/v2/435279/default/dark/1.0')
                .setColor('#0099ff')




                .addFields(
                    { name: '<:one:821889136947363861> search', value: '```.sr CharacterName ServerName \n Example: .sr furkai dm ```', inline: false },
                    { name: '<:two:821889263024472094> top3', value: '``` .top3 sr\n .top3 tr\n .top3sr/tr all\n .top3sr/tr className\n  Example: .top3sr sco  ```', inline: false },
                    { name: '<:three:821889275724431360> summary', value: '```.summary \n.summary sr className\n Example: .summary sr slinger ```', inline: false },
                );
            msg.reply(embedCommands);







        

        function embedHelpSr() {
            msg.reply('```.sr CharacterName ServerName (Example: .sr Furkai dm)\n  ```')
        }

        function embedHelpTop() {
            msg.reply('```brings the real top3s of each advanced class(160wins and above)\n.top3sr/.top3tr AdvancedClassName (Example: .top3sr mara)\n AdvancedClassName:shadow,sin,assassin,sorc,sorcerer,vg,vanguard,pt,powertech,mando,commando,merc,mercenary,slinger,gunslinger,sniper,snip,sco,scoundrel,oper,operative,sent,sentinel,marauder,mara,guardian,jugg \n .top3sr/.top3tr all : summary style real top3s of all advanced classes ```')
        }

        function embedHelpSummary() {
            msg.reply('```.summary sr/tr: classic rating based top5 of each base classes(this might take few seconds\n .summary sr AdvancedClassName (Example: .summary sr sin)\n AdvancedClassName:shadow,sin,assassin,sorc,sorcerer,vg,vanguard,pt,powertech,mando,commando,merc,mercenary,slinger,gunslinger,sniper,snip,sco,scoundrel,oper,operative,sent,sentinel,marauder,mara,guardian,jugg ) ```')
        }







    }

};