const fetch = require('node-fetch');
const Discord = require('discord.js');
const fonks = require('./fonks');
const QuickChart = require('quickchart-js');
const seasonCurrent = process.env.seasonCurrent;
const seasonThirteen=process.env.seasonThirteen;
const season=[seasonCurrent,seasonThirteen];
const imagesUrl = 'https://raw.githubusercontent.com/sinirzi/swtorleaderboard/main/images.json';
const searchUrl = 'https://www.swtor.com/lb/search/';
const getUrl = 'https://www.swtor.com/lb/get/';
const footerUrl = 'https://static-cdn.jtvnw.net/emoticons/v2/435279/default/dark/1.0';
const charUrl = 'http://www.swtor.com/leaderboards/character/';
const impLogo = 'http://pm1.narvii.com/6699/a004bf79c862b6c01070ce8a44551c9d9c3d908f_00.jpg';
const repLogo = 'https://images.alphacoders.com/300/thumb-1920-300681.jpg';
const boardUrl = 'http://www.swtor.com/leaderboards/';
const topUrl = 'http://www.swtor.com/lb/top?'

module.exports = {

    name: '.summary',

   async execute(msg, args) {
    console.log('summary command called: ',args)
    const srEmoji = '1️⃣';
    const trEmoji = '2️⃣';
        var objectArrayValues;
        var summary;
        var summaryJugg;
        var summaryGuardian;
        var summaryMara;
        var summarySent;
        var summarySin;
        var summaryShadow;
        var summarySorc;
        var summarySage;
        var summaryPt;
        var summaryVg;
        var summaryMerc;
        var summaryCommando;
        var summarySniper;
        var summarySlinger;
        var summaryOper;
        var summarySco;
        var summaryClass;
        var summaryString;

        const chooseEmbed = new Discord.MessageEmbed()
            .setColor('0099ff')
                        .setTitle('Ranked Warzone Arena Leaderboards')
                        .setDescription(''
                        + srEmoji+' SR  \u200B\u200B\u200B\u200B\u200B\u200B'
                            +  trEmoji+ 'TR')
                            .setImage('https://wallpapercave.com/wp/0aK4XTd.jpg')
                            .setFooter('Developed by Furkai#0331 ', '' + footerUrl + '');
if(args[0]===undefined)
        msg.channel.send(chooseEmbed).then(chooseEmbed =>{
                 
            chooseEmbed.react(srEmoji).then(() => chooseEmbed.react(trEmoji));
           
   
           const filter = (reaction, user) => {
               return [srEmoji, trEmoji].includes(reaction.emoji.name) && user.id === msg.author.id;
           };
           
           const collector = chooseEmbed.createReactionCollector(filter,{time:60000});
           
           collector.on('collect', (reaction, user) => {
  
           

       
            fetch('http://www.swtor.com/lb/top?season='+season[0]+'').then(response => response.json()).then(file => {
                summary = fonks.summaryClassed(file);
                summaryJugg = Object.values(summary[0]);
                summaryMara = Object.values(summary[1]);
                summarySin = Object.values(summary[2]);
                summarySorc = Object.values(summary[3]);
                summaryPt = Object.values(summary[4]);
                summaryMerc = Object.values(summary[5]);
                summarySniper = Object.values(summary[6]);
                summaryOper = Object.values(summary[7]);
                summaryString = fonks.summaryStringed(summaryJugg, summaryMara, summarySin, summarySorc, summaryPt, summaryMerc, summarySniper, summaryOper);
                summaryClass= fonks.summaryEmbed(summaryString,true);
                if(reaction.emoji.name==srEmoji){
                    chooseEmbed.edit(summaryClass)
                   reaction.users.remove(user.id);
                   }


            }).then(response =>fetch('http://www.swtor.com/lb/top?group=true&season='+season[0]+'')).then(response => response.json()).then(file => {
                summary = fonks.summaryClassed(file);
                summaryJugg = Object.values(summary[0]);
                summaryMara = Object.values(summary[1]);
                summarySin = Object.values(summary[2]);
                summarySorc = Object.values(summary[3]);
                summaryPt = Object.values(summary[4]);
                summaryMerc = Object.values(summary[5]);
                summarySniper = Object.values(summary[6]);
                summaryOper = Object.values(summary[7]);
                summaryString = fonks.summaryStringed(summaryJugg, summaryMara, summarySin, summarySorc, summaryPt, summaryMerc, summarySniper, summaryOper);
                summaryClass=fonks.summaryEmbed(summaryString,false);
                if(reaction.emoji.name==trEmoji){
                    chooseEmbed.edit(summaryClass)
                   reaction.users.remove(user.id);
    
                   }


            });
            });
            collector.on('end', (reaction, user) => {
                chooseEmbed.reactions.removeAll()
               });

        });
        var summaryUrl='';
        if(args[0]=='sr')
             summaryUrl='solo';
        
        else
            summaryUrl='group';
        
        if ( args[1] == 'sin' || args[1] === 'Asssassin' || args[1] === 'assassin'  || args[1] === 'Shadow' || args[1] === 'shadow') {
    fetch('http://www.swtor.com/lb/data?page=1&class=shadow-assassin&column=pvp_ranked_'+summaryUrl+'&season='+season[0]+'').then(response => response.json()).then(file => {
        summary = Object.values(file.data);
        summarySin = summary.filter(summary => summary.class_name === 'Assassin');
        summaryShadow = summary.filter(summary => summary.class_name === 'Shadow');
        if (args[1] === 'sin' || args[1] === 'Assassin' || args[1] === 'assassin') {


            summaryString = fonks.summaryClassStringed(summarySin);
            summaryString= fonks.summaryClassEmbed('sin',summaryString);
            msg.reply(summaryString);
        }
        else {
            summaryString = fonks.summaryClassStringed(summaryShadow);
            summaryString=  fonks.summaryClassEmbed('Shadow',summaryString);
            msg.reply(summaryString);
        }


    });
        }
        if ( args[1] == 'sorc' || args[1] === 'sorcerer' || args[1] === 'Sorcerer' || args[1] === 'sage' || args[1] === 'Sage') {
            fetch('http://www.swtor.com/lb/data?page=1&class=sage-sorcerer&column=pvp_ranked_'+summaryUrl+'&season='+season[0]+'').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summarySorc = summary.filter(summary => summary.class_name === 'Sorcerer');
                summarySage = summary.filter(summary => summary.class_name === 'Sage');
                if (args[1] === 'sorc' || args[1] === 'sorcerer' || args[1] === 'Sorcerer') {


                    summaryString = fonks.summaryClassStringed(summarySorc);
                    summaryString=    fonks.summaryClassEmbed('Sorcerer',summaryString);
                    msg.reply(summaryString);
                }
                else {
                    summaryString = fonks.summaryClassStringed(summarySage);
                    summaryString=    fonks.summaryClassEmbed('Sage',summaryString);
                    msg.reply(summaryString);
                }


            });
        }
        if ( args[1] == 'merc' || args[1] === 'mercenary' || args[1] === 'mando' || args[1] === 'commando') {
            fetch('http://www.swtor.com/lb/data?page=1&class=comando-mercenary&column=pvp_ranked_'+summaryUrl+'&season='+season[0]+'').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summaryMerc = summary.filter(summary => summary.class_name === 'Mercenary');
                summaryCommando = summary.filter(summary => summary.class_name === 'Commando');
                if (args[1] === 'merc' || args[1] === 'mercenary' || args[1] === 'Mercenary') {


                    summaryString = fonks.summaryClassStringed(summaryMerc);
                    summaryString=   fonks.summaryClassEmbed('Merc',summaryString);
                    msg.reply(summaryString);
                }
                else {
                    summaryString = fonks.summaryClassStringed(summaryCommando);
                    summaryString=   fonks.summaryClassEmbed('Commando',summaryString);
                    msg.reply(summaryString);
                }


            });
        }
        if ( args[1] == 'jugg' || args[1] === 'juggernaut' || args[1] === 'guardian' || args[1] === 'Guardian') {
            fetch('http://www.swtor.com/lb/data?page=1&class=guardian-juggernaut&column=pvp_ranked_'+summaryUrl+'&season='+season[0]+'').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summaryJugg = summary.filter(summary => summary.class_name === 'Juggernaut');
                summaryGuardian = summary.filter(summary => summary.class_name === 'Guardian');
                if (args[1] === 'jugg' || args[1] === 'juggernaut') {


                    summaryString = fonks.summaryClassStringed(summaryJugg);
                    summaryString= fonks.summaryClassEmbed('Juggernaut',summaryString);
                    msg.reply(summaryString);
                }
                else {
                    summaryString = fonks.summaryClassStringed(summaryGuardian);
                    summaryString=   fonks.summaryClassEmbed('Guardian',summaryString);
                    msg.reply(summaryString);
                }


            });
        }
        if ( args[1] == 'mara' || args[1] === 'marauder' || args[1] === 'sent' || args[1] === 'sentinel') {
            fetch('http://www.swtor.com/lb/data?page=1&class=sentinel-marauder&column=pvp_ranked_'+summaryUrl+'&season='+season[0]+'').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summaryMara = summary.filter(summary => summary.class_name === 'Marauder');
                summarySent = summary.filter(summary => summary.class_name === 'Sentinel');
                if (args[1] === 'mara' || args[1] === 'marauder') {


                    summaryString = fonks.summaryClassStringed(summaryMara);
                    summaryString=    fonks.summaryClassEmbed('Marauder',summaryString);
                    msg.reply(summaryString);
                }
                else {
                    summaryString = fonks.summaryClassStringed(summarySent);
                    summaryString=    fonks.summaryClassEmbed('Sentinel',summaryString);
                    msg.reply(summaryString);
                }


            });
        }
        if ( args[1] == 'vg' || args[1] === 'vanguard' || args[1] === 'pt' || args[1] === 'powertech') {
            fetch('http://www.swtor.com/lb/data?page=1&class=vanguard-powertech&column=pvp_ranked_'+summaryUrl+'&season='+season[0]+'').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summaryVg = summary.filter(summary => summary.class_name === 'Vanguard');
                summaryPt = summary.filter(summary => summary.class_name === 'Powertech');
                if (args[1] === 'vg' || args[1] === 'vanguard') {


                    summaryString = fonks.summaryClassStringed(summaryVg);
                    summaryString=  fonks.summaryClassEmbed('Vanguard',summaryString);
                    msg.reply(summaryString);
                }
                else {
                    summaryString = fonks.summaryClassStringed(summaryPt);
                    summaryString=    fonks.summaryClassEmbed('Powertech',summaryString);
                    msg.reply(summaryString);
                }


            });
        }
        if ( args[1] == 'slinger' || args[1] === 'gunslinger' || args[1] === 'sniper' || args[1] === 'Sniper') {
            fetch('http://www.swtor.com/lb/data?page=1&class=gunslinger-sniper&column=pvp_ranked_'+summaryUrl+'&season='+season[0]+'').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summarySniper = summary.filter(summary => summary.class_name === 'Sniper');
                summarySlinger = summary.filter(summary => summary.class_name === 'Gunslinger');
                if (args[1] === 'sniper' || args[1] === 'Sniper') {


                    summaryString = fonks.summaryClassStringed(summarySniper);
                    summaryString=   fonks.summaryClassEmbed('Sniper',summaryString);
                    msg.reply(summaryString);
                }
                else {
                    summaryString = fonks.summaryClassStringed(summarySlinger);
                    summaryString=  fonks.summaryClassEmbed('Gunslinger',summaryString);
                    msg.reply(summaryString);
                }


            });
        }
        if ( args[1] == 'oper' || args[1] === 'operative' || args[1] === 'sco' || args[1] === 'scoundrel') {
            fetch('http://www.swtor.com/lb/data?page=1&class=scoundrel-operative&column=pvp_ranked_'+summaryUrl+'&season='+season[0]+'').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summaryOper = summary.filter(summary => summary.class_name === 'Operative');
                summarySco = summary.filter(summary => summary.class_name === 'Scoundrel');
                if (args[1] === 'oper' || args[1] === 'operative') {


                    summaryString = fonks.summaryClassStringed(summaryOper);
                    summaryString=    fonks.summaryClassEmbed('Operative',summaryString);
                    msg.reply(summaryString);
                }
                else {
                    summaryString = fonks.summaryClassStringed(summarySco);
                    summaryString=     fonks.summaryClassEmbed('Scoundrel',summaryString);
                    msg.reply(summaryString);
                }


            });
        }

        
        





    }

};