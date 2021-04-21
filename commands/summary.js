const fetch = require('node-fetch');
const Discord = require('discord.js');
const QuickChart = require('quickchart-js');

module.exports = {

    name: '.summary',

    execute(msg, args) {
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
        var summarySplit;
        var summaryString;

        if (args[0] == 'sr' && args.length === 1) {
            fetch('http://www.swtor.com/lb/top?season=13').then(response => response.json()).then(file => {
                summary = summaryClassed(file);
                summaryJugg = Object.values(summary[0]);
                summaryMara = Object.values(summary[1]);
                summarySin = Object.values(summary[2]);
                summarySorc = Object.values(summary[3]);
                summaryPt = Object.values(summary[4]);
                summaryMerc = Object.values(summary[5]);
                summarySniper = Object.values(summary[6]);
                summaryOper = Object.values(summary[7]);
                summaryString = summaryStringed(summaryJugg, summaryMara, summarySin, summarySorc, summaryPt, summaryMerc, summarySniper, summaryOper);
                summaryEmbed();

            });
        }


        else if (args[0] == 'tr' && args.length === 1) {
            fetch('http://www.swtor.com/lb/top?group=true&season=13').then(response => response.json()).then(file => {
                summary = summaryClassed(file);
                summaryJugg = Object.values(summary[0]);
                summaryMara = Object.values(summary[1]);
                summarySin = Object.values(summary[2]);
                summarySorc = Object.values(summary[3]);
                summaryPt = Object.values(summary[4]);
                summaryMerc = Object.values(summary[5]);
                summarySniper = Object.values(summary[6]);
                summaryOper = Object.values(summary[7]);
                summaryString = summaryStringed(summaryJugg, summaryMara, summarySin, summarySorc, summaryPt, summaryMerc, summarySniper, summaryOper);
                summaryEmbed();

            });
        }

        if (args[0] == 'sr' && args[1] == 'sin' || args[1] === 'Asssassin' || args[1] === 'assassin'  || args[1] === 'Shadow' || args[1] === 'shadow') {
    fetch('http://www.swtor.com/lb/data?page=1&class=shadow-assassin&column=pvp_ranked_solo&season=13').then(response => response.json()).then(file => {
        summary = Object.values(file.data);
        summarySin = summary.filter(summary => summary.class_name === 'Assassin');
        summaryShadow = summary.filter(summary => summary.class_name === 'Shadow');
        if (args[1] === 'sin' || args[1] === 'Assassin' || args[1] === 'assassin') {


            summaryString = summaryClassStringed(summarySin);
            summaryClassEmbed('sin');
        }
        else {
            summaryString = summaryClassStringed(summaryShadow);
            summaryClassEmbed('Shadow');
        }
        console.log(summaryString.length)


    });
        }
        if (args[0] == 'sr' && args[1] == 'sorc' || args[1] === 'sorcerer' || args[1] === 'Sorcerer' || args[1] === 'sage' || args[1] === 'Sage') {
            fetch('http://www.swtor.com/lb/data?page=1&class=sage-sorcerer&column=pvp_ranked_solo&season=13').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summarySorc = summary.filter(summary => summary.class_name === 'Sorcerer');
                summarySage = summary.filter(summary => summary.class_name === 'Sage');
                if (args[1] === 'sorc' || args[1] === 'sorcerer' || args[1] === 'Sorcerer') {


                    summaryString = summaryClassStringed(summarySorc);
                    summaryClassEmbed('Sorcerer');
                }
                else {
                    summaryString = summaryClassStringed(summarySage);
                    summaryClassEmbed('Sage');
                }


            });
        }
        if (args[0] == 'sr' && args[1] == 'merc' || args[1] === 'mercenary' || args[1] === 'mando' || args[1] === 'commando') {
            fetch('http://www.swtor.com/lb/data?page=1&class=comando-mercenary&column=pvp_ranked_solo&season=13').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summaryMerc = summary.filter(summary => summary.class_name === 'Mercenary');
                summaryCommando = summary.filter(summary => summary.class_name === 'Commando');
                if (args[1] === 'merc' || args[1] === 'mercenary' || args[1] === 'Mercenary') {


                    summaryString = summaryClassStringed(summaryMerc);
                    summaryClassEmbed('Merc');
                }
                else {
                    summaryString = summaryClassStringed(summaryCommando);
                    summaryClassEmbed('Commando');
                }


            });
        }
        if (args[0] == 'sr' && args[1] == 'jugg' || args[1] === 'juggernaut' || args[1] === 'guardian' || args[1] === 'Guardian') {
            fetch('http://www.swtor.com/lb/data?page=1&class=guardian-juggernaut&column=pvp_ranked_solo&season=13').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summaryJugg = summary.filter(summary => summary.class_name === 'Juggernaut');
                summaryGuardian = summary.filter(summary => summary.class_name === 'Guardian');
                if (args[1] === 'jugg' || args[1] === 'juggernaut') {


                    summaryString = summaryClassStringed(summaryJugg);
                    summaryClassEmbed('Juggernaut');
                }
                else {
                    summaryString = summaryClassStringed(summaryGuardian);
                    summaryClassEmbed('Guardian');
                }


            });
        }
        if (args[0] == 'sr' && args[1] == 'mara' || args[1] === 'marauder' || args[1] === 'sent' || args[1] === 'sentinel') {
            fetch('http://www.swtor.com/lb/data?page=1&class=sentinel-marauder&column=pvp_ranked_solo&season=13').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summaryMara = summary.filter(summary => summary.class_name === 'Marauder');
                summarySent = summary.filter(summary => summary.class_name === 'Sentinel');
                if (args[1] === 'mara' || args[1] === 'marauder') {


                    summaryString = summaryClassStringed(summaryMara);
                    summaryClassEmbed('Marauder');
                }
                else {
                    summaryString = summaryClassStringed(summarySent);
                    summaryClassEmbed('Sentinel');
                }


            });
        }
        if (args[0] == 'sr' && args[1] == 'vg' || args[1] === 'vanguard' || args[1] === 'pt' || args[1] === 'powertech') {
            fetch('http://www.swtor.com/lb/data?page=1&class=vanguard-powertech&column=pvp_ranked_solo&season=13').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summaryVg = summary.filter(summary => summary.class_name === 'Vanguard');
                summaryPt = summary.filter(summary => summary.class_name === 'Powertech');
                if (args[1] === 'vg' || args[1] === 'vanguard') {


                    summaryString = summaryClassStringed(summaryVg);
                    summaryClassEmbed('Vanguard');
                }
                else {
                    summaryString = summaryClassStringed(summaryPt);
                    summaryClassEmbed('Powertech');
                }


            });
        }
        if (args[0] == 'sr' && args[1] == 'slinger' || args[1] === 'gunslinger' || args[1] === 'sniper' || args[1] === 'Sniper') {
            fetch('http://www.swtor.com/lb/data?page=1&class=gunslinger-sniper&column=pvp_ranked_solo&season=13').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summarySniper = summary.filter(summary => summary.class_name === 'Sniper');
                summarySlinger = summary.filter(summary => summary.class_name === 'Gunslinger');
                if (args[1] === 'sniper' || args[1] === 'Sniper') {


                    summaryString = summaryClassStringed(summarySniper);
                    summaryClassEmbed('Sniper');
                }
                else {
                    summaryString = summaryClassStringed(summarySlinger);
                    summaryClassEmbed('Gunslinger');
                }


            });
        }
        if (args[0] == 'sr' && args[1] == 'oper' || args[1] === 'operative' || args[1] === 'sco' || args[1] === 'scoundrel') {
            fetch('http://www.swtor.com/lb/data?page=1&class=scoundrel-operative&column=pvp_ranked_solo&season=13').then(response => response.json()).then(file => {
                summary = Object.values(file.data);
                summaryOper = summary.filter(summary => summary.class_name === 'Operative');
                summarySco = summary.filter(summary => summary.class_name === 'Scoundrel');
                if (args[1] === 'oper' || args[1] === 'operative') {


                    summaryString = summaryClassStringed(summaryOper);
                    summaryClassEmbed('Operative');
                }
                else {
                    summaryString = summaryClassStringed(summarySco);
                    summaryClassEmbed('Scoundrel');
                }


            });
        }

        function summaryClassed(summary){
            var summaryLeaders = [];
            var summaryLeadersNames = [];
            var summaryLeadersRatings = [];

            for (i = 0; i < summary.length; i++) {
                summaryLeaders[i] = summary[i].leaders;
                summaryLeadersNames[i] = summaryLeaders[i].char_name;
                summaryLeadersRatings[i] = summaryLeaders[i].rating;
            }
            return summaryLeaders;
        }
        function summarySplitted(summary) {
            const n = 5
            const result = [[], [], [],[],[]] //we create it, then we'll fill it

            const wordsPerLine = Math.ceil(summary.length / n)

            for (let line = 0; line < n; line++) {
                for (let i = 0; i < wordsPerLine; i++) {
                    const value = summary[i + line * wordsPerLine]
                    if (!value) continue //avoid adding "undefined" values
                    result[line].push(value)
                }
            }
            return result;
        }
        function summaryClassStringed(summary1) {
            var String = '';
            for (i = 0; i < summary1.length; i++) {
                
                if ((summary1[i].char_name).length < 11) {
                    summary1[i].char_name += ' '.repeat(11 - (summary1[i].char_name).length)
                }
                else if ((summary1[i].char_name).length > 11) {
                    summary1[i].char_name = (summary1[i].char_name).slice(0, 11);
                    summary1[i].char_name = (summary1[i].char_name).substr(0, 8);
                    summary1[i].char_name += '...';
                }


                    String += summary1[i].char_name + '  ' + summary1[i].rating + '  ' +summary1[i].shard_name + '\n';
            }
            return String;
        }
        function summaryStringed(summary1, summary2, summary3, summary4, summary5, summary6, summary7, summary8) {
            var String1 = '';
            var String2 = '';
            var String3 = '';
            var String4 = '';
            var String5 = '';
            var String6 = '';
            var String7 = '';
            var String8 = '';
            for (i = 0; i < summary1.length; i++) {
                if ((summary1[i].char_name).length < 11) {
                    summary1[i].char_name += ' '.repeat(11 - (summary1[i].char_name).length)
                }
                else if ((summary1[i].char_name).length > 11) {
                    summary1[i].char_name = (summary1[i].char_name).slice(0, 11);
                    summary1[i].char_name = (summary1[i].char_name).substr(0, 8);
                    summary1[i].char_name += '...';
                }
               /* if ((summary1[i].class_name).length < 10) {
                    summary1[i].rating += ' '.repeat(10 - (summary1[i].class_name).length)
                } */

                String1 += summary1[i].char_name + '  ' + summary1[i].rating + '  ' + summary1[i].class_name + '\n';
            }
            for (i = 0; i < summary2.length; i++) {
                if ((summary2[i].char_name).length < 11) {
                    summary2[i].char_name += ' '.repeat(11 - (summary2[i].char_name).length)
                }
                else if ((summary2[i].char_name).length > 11) {
                    summary2[i].char_name = (summary2[i].char_name).slice(0, 11);
                    summary2[i].char_name = (summary2[i].char_name).substr(0, 8);
                    summary2[i].char_name += '...';
                }
                String2 += summary2[i].char_name + '  ' + summary2[i].rating + '  ' + summary2[i].class_name + '\n';
            }
            for (i = 0; i < summary3.length; i++) {
                if ((summary3[i].char_name).length < 11) {
                    summary3[i].char_name += ' '.repeat(11 - (summary3[i].char_name).length)
                }
                else if ((summary3[i].char_name).length > 11) {
                    summary3[i].char_name = (summary3[i].char_name).slice(0, 11);
                    summary3[i].char_name = (summary3[i].char_name).substr(0, 8);
                    summary3[i].char_name += '...';
                }
                String3 += summary3[i].char_name + '  ' + summary3[i].rating + '  ' + summary3[i].class_name +'\n';
            }
            for (i = 0; i < summary4.length; i++) {
                if ((summary4[i].char_name).length < 11) {
                    summary4[i].char_name += ' '.repeat(11 - (summary4[i].char_name).length)
                }
                else if ((summary4[i].char_name).length > 11) {
                    summary4[i].char_name = (summary4[i].char_name).slice(0, 11);
                    summary4[i].char_name = (summary4[i].char_name).substr(0, 8);
                    summary4[i].char_name += '...';
                }
                String4 += summary4[i].char_name + '  ' + summary4[i].rating + '  ' + summary4[i].class_name +'\n';
            }
            for (i = 0; i < summary5.length; i++) {
                if ((summary5[i].char_name).length < 11) {
                    summary5[i].char_name += ' '.repeat(11 - (summary5[i].char_name).length)
                }
                else if ((summary5[i].char_name).length > 11) {
                    summary5[i].char_name = (summary5[i].char_name).slice(0, 11);
                    summary5[i].char_name = (summary5[i].char_name).substr(0, 8);
                    summary5[i].char_name += '...';
                }
                String5 += summary5[i].char_name + '  ' + summary5[i].rating + '  ' + summary5[i].class_name + '\n';
            }
            for (i = 0; i < summary6.length; i++) {
                if ((summary6[i].char_name).length < 11) {
                    summary6[i].char_name += ' '.repeat(11 - (summary6[i].char_name).length)
                }
                else if ((summary6[i].char_name).length > 11) {
                    summary6[i].char_name = (summary6[i].char_name).slice(0, 11);
                    summary6[i].char_name = (summary6[i].char_name).substr(0, 8);
                    summary6[i].char_name += '...';
                }
                String6 += summary6[i].char_name + '  ' + summary6[i].rating + '  ' + summary6[i].class_name +'\n';
            }
            for (i = 0; i < summary7.length; i++) {
                if ((summary7[i].char_name).length < 11) {
                    summary7[i].char_name += ' '.repeat(11 - (summary7[i].char_name).length)
                }
                else if ((summary7[i].char_name).length > 11) {
                    summary7[i].char_name = (summary7[i].char_name).slice(0, 11);
                    summary7[i].char_name = (summary7[i].char_name).substr(0, 8);
                    summary7[i].char_name += '...';
                }
                String7 += summary7[i].char_name + '  ' + summary7[i].rating + '  ' + summary7[i].class_name + '\n';
            }
            for (i = 0; i < summary8.length; i++) {
                if ((summary8[i].char_name).length < 11) {
                    summary8[i].char_name += ' '.repeat(11 - (summary8[i].char_name).length)
                }
                else if ((summary8[i].char_name).length > 11) {
                    summary8[i].char_name = (summary8[i].char_name).slice(0, 11);
                    summary8[i].char_name = (summary8[i].char_name).substr(0, 8);
                    summary8[i].char_name += '...';
                }
                String8 += summary8[i].char_name + '  ' + summary8[i].rating + '  ' + summary8[i].class_name +'\n';
            }
            return [String1, String2, String3, String4, String5, String6, String7, String8];

        }
        function summaryClassEmbed(className) {

            switch (className) {
                case 'sin':
                    msg.reply('ASSASSIN`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Shadow':
                    msg.reply('Shadow`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Marauder':
                    msg.reply('Marauder`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Sentinel':
                    msg.reply('Sentinel`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Sorcerer':
                    msg.reply('Sorcerer`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Sage':
                    msg.reply('Sage`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Powertech':
                    msg.reply('Powertech`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Vanguard':
                    msg.reply('Vanguard`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Commando':
                    msg.reply('Commando`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Mercenary':
                    msg.reply('Mercenary`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Gunslinger':
                    msg.reply('Gunslinger`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Sniper':
                    msg.reply('Sniper`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Scoundrel':
                    msg.reply('Scoundrel`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Operative':
                    msg.reply('Operative`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Guardian':
                    msg.reply('Guardian`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
                case 'Juggernaut':
                    msg.reply('Juggernaut`s OF FIRST PAGE \n```' + summaryString + '```');
                    break;
            }
        }
        function summaryEmbed() {
            const summEmbed = new Discord.MessageEmbed()
              //  .setImage('https://wallpaperaccess.com/full/3004797.jpg')
                .setColor('#0099ff')
                // .setImage('https://www.vhv.rs/dpng/d/502-5023215_sith-logo-png-www-star-wars-old-republic.png')
                .setTimestamp()
                .setFooter('Furkai#0331 for feedbacks,suggestions and bugs', 'https://static-cdn.jtvnw.net/emoticons/v2/435279/default/dark/1.0')
                .addFields(
                    { name: 'GUARDIAN \u200B / \u200B JUGGERNAUT', value: '```' + summaryString[0]+ '```', inline: true },
                    { name: 'SENTINEL \u200B / \u200B MARAUDER', value: '```' + summaryString[1]+ '```', inline: true },
                    { name: '\u200B', value: '\u200B' },

                    { name: 'SHADOW \u200B /  \u200B ASSASSIN', value: '```' + summaryString[2]+ '```', inline: true },
                    { name: 'SAGE \u200B / \u200B SORCERER', value: '```' + summaryString[3]+ '```', inline: true },
                    { name: '\u200B', value: '\u200B' },

                    { name: 'VANGUARD \u200B / \u200B POWERTECH', value: '```' + summaryString[4]  + '```', inline: true },
                    { name: 'COMMANDO\u200B  / \u200B  MERCENARY', value: '```' + summaryString[5] + '```', inline: true },
                    { name: '\u200B', value: '\u200B' },

                    { name: 'GUNSLINGER \u200B / \u200B SNIPER', value: '```' + summaryString[6]  + '```', inline: true },
                    { name: 'SCOUNDREL \u200B / \u200B OPERATIVE', value: '```' + summaryString[7]  + '```', inline: true },
                );

            msg.reply(summEmbed);
        }




    }

};