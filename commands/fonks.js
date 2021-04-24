const fetch = require('node-fetch');
const Discord = require('discord.js');
const utf8 = require('utf8');
const fonks = require('./fonks');
const season = process.env.season;
const imagesUrl = 'https://raw.githubusercontent.com/sinirzi/swtorleaderboard/main/images.json';
const searchUrl = 'https://www.swtor.com/lb/search/';
const getUrl = 'https://www.swtor.com/lb/get/';
const footerUrl = 'https://static-cdn.jtvnw.net/emoticons/v2/435279/default/dark/1.0';
const footer = 'Developed by Furkai#0331';
const charUrl = 'http://www.swtor.com/leaderboards/character/';
const impLogo = 'http://pm1.narvii.com/6699/a004bf79c862b6c01070ce8a44551c9d9c3d908f_00.jpg';
const repLogo = 'https://images.alphacoders.com/300/thumb-1920-300681.jpg';
const boardUrl = 'http://www.swtor.com/leaderboards/';
const classUrl = 'http://www.swtor.com/leaderboards/class/';

module.exports = {
    getRandomInt: function (number) {
    return Math.floor(Math.random() * Math.floor(number));
},

    embedError:function () {
        var link;
    link='https://giphy.com/gifs/awkward-pulp-fiction-john-travolta-6uGhT1O4sxpi8';
    return link;
    },

    calcTopThree:function(dataArray) {
    var i = 0;
    var topThreeArray = [];
    for (i = 0; i < dataArray.length; i++) {
        while (dataArray[i].wins >= 160) {
            topThreeArray[i] = dataArray[i];
            break;
        }
    }
    topThreeArray = topThreeArray.sort((a, b) => b.rating - a.rating);
    return topThreeArray;
    },

    summaryString:function(summary1) {
    var String1 = '';
    for (i = 0; i < summary1.length; i++) {
        if ((summary1[i].char_name).length < 11) {
            summary1[i].char_name += ' '.repeat(11 - (summary1[i].char_name).length)
        }
        else if ((summary1[i].char_name).length > 11) {
            summary1[i].char_name = (summary1[i].char_name).slice(0, 11);
            summary1[i].char_name = (summary1[i].char_name).substr(0, 8);
            summary1[i].char_name += '...';
        }
        String1 += summary1[i].char_name + '  ' + summary1[i].rating + '  ' + summary1[i].class_name + '\n';
    }
    return String1;
    },

    embedSummary: function (topThreeGj, topThreeSm, topThreeSa, topThreeSs, topThreeVp, topThreeCm, topThreeGs,topThreeSo) {
    const summEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTimestamp()
        .setFooter('' + footer+'', '' + footerUrl+'')
        .addFields(
            { name: 'GUARDIAN \u200B / \u200B JUGGERNAUT', value: '```' + topThreeGj + '```', inline: true },
            { name: 'SENTINEL \u200B / \u200B MARAUDER', value: '```' + topThreeSm + '```', inline: true },
            { name: '\u200B', value: '\u200B' },

            { name: 'SHADOW \u200B / \u200B ASSASSIN', value: '```' + topThreeSa + '```', inline: true },
            { name: 'SAGE \u200B / \u200B SORCERER', value: '```' + topThreeSs + '```', inline: true },
            { name: '\u200B', value: '\u200B' },

            { name: 'VANGUARD \u200B / \u200B POWERTECH', value: '```' + topThreeVp + '```', inline: true },
            { name: 'COMMANDO \u200B / \u200B MERCENARY', value: '```' + topThreeCm + '```', inline: true },
            { name: '\u200B', value: '\u200B' },

            { name: 'GUNSLINGER \u200B / \u200B SNIPER', value: '```' + topThreeGs + '```', inline: true },
            { name: 'SCOUNDREL \u200B / \u200B OPERATIVE', value: '```' + topThreeSo + '```', inline: true },
        );

        return summEmbed;
    },


    summaryClassEmbed: function(className,summaryString) {
       return ''+className+' OF FIRST PAGE \n```' + summaryString + '```'
    },

     summaryStringed:function(summary1, summary2, summary3, summary4, summary5, summary6, summary7, summary8) {
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

    },


    
     summaryEmbed:function(summaryString,isSolo) {
        const summEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setFooter('' + footer+'', '' + footerUrl+'')
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
            isSolo ? summEmbed.setDescription('SOLO RANKED') : summEmbed.setDescription('TEAM RANKED')

        return summEmbed;
    },

     summaryClassed:function(summary){
        var summaryLeaders = [];
        var summaryLeadersNames = [];
        var summaryLeadersRatings = [];

        for (i = 0; i < summary.length; i++) {
            summaryLeaders[i] = summary[i].leaders;
            summaryLeadersNames[i] = summaryLeaders[i].char_name;
            summaryLeadersRatings[i] = summaryLeaders[i].rating;
        }
        return summaryLeaders;
    },

     summaryClassStringed:function(summary1) {
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
    },

     embedDataset:function(className,topThree) {
        let randomImages = [];
        let republic = ['Shadow', 'Guardian', 'Sentinel', 'Sage', 'Vanguard', 'Commando', 'Gunslinger', 'Scoundrel'];
        let empire = ['Assassin', 'Juggernaut', 'Marauder', 'Sorcerer', 'Powertech', 'Mercenary', 'Sniper', 'Operative'];

        fetch(imagesUrl).then(response => response.json()).then(data => {
            randomImages = data;
            var adClassName=topThree[0].class_name;
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
        if (topThree[0] === undefined) {
            exampleEmbed.setThumbnail(''+thumbUrl+'')
            exampleEmbed.setDescription("no one has 160wins yet")
        }
        else if (empire.includes(adClassName))
            exampleEmbed.setThumbnail('' +impLogo+'')
        else if (republic.includes(adClassName))
            exampleEmbed.setThumbnail('' + repLogo + '')
            for (i = 0; topThree.length > i; i++) {
                var advClassName = topThree[i].class_name;
                if(advClassName=='Mercenary')
                exampleEmbed .setFooter('Developed by Furkai#0331, Arts: u/Greenecowpoke on reddit', ''+footerUrl+'');
                else
                exampleEmbed .setFooter('Developed by Furkai#0331', ''+footerUrl+'');
            var advancedClassImg = randomImages["imagesAdvancedClass"][1][advClassName];
                exampleEmbed.addField('Name', '[' + topThree[i].char_name + ']('+boardUrl+'' + topThree[i].chr_player_character_id + ')', true)
            exampleEmbed.addField('Rating', topThree[i].rating, true)
            exampleEmbed.addField('Server', topThree[i].shard_name, true) 
                exampleEmbed.setImage('' + advancedClassImg+'')  
        }
        if (topThree[0] !== undefined) {
            exampleEmbed.setTitle('SOLO RANKED' + ' ' + '          TOP3 ' + topThree[0].class_name)
            exampleEmbed.setURL('' + classUrl+'' + className)
        }
        else {
            exampleEmbed.setTitle('SOLO RANKED' + ' ' + '          TOP3 ' + args[0] + topThree[0].class_name)
            exampleEmbed.setURL('' + classUrl+'' + className)
        }
        return exampleEmbed;
    });
    },


};