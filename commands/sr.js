const fetch = require('node-fetch');
const Discord = require('discord.js');
const QuickChart = require('quickchart-js');
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const utf8 = require('utf8');
const fonks = require('./fonks');
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


module.exports = {
    name: '.sr',
    description: 'Solo Ranked Rating !',
   async execute(msg, args) {
       console.log('sr command called: ',args)
       var errorMsg;
       var newArray = []; 
        const srEmoji = '1️⃣';
        const trEmoji = '2️⃣';
        const graphEmoji='📈';
        let randomImages = [];
        let republic = ['Shadow','Guardian','Sentinel','Sage','Vanguard','Commando','Gunslinger','Scoundrel'];
        let empire = ['Assassin','Juggernaut','Marauder','Sorcerer','Powertech','Mercenary','Sniper','Operative'];
        var i;
        var j;
        var file;
        var ranked;
        var className;
        var charName;
        var soloRank;
        var groupRank;
        var soloRating;
        var groupRating;
        var shardName;
        var soloMvp;
        var groupMvp;
        var soloWins;
        var groupWins;
        var groupHistory;
        var soloHistory;
        let searchFile;
        let encodedArgs;
        let utfEncodedArgs;
        var newArrayDataOfOjbect;

        if(args[0]==undefined)
        msg.reply("WATTAFAK")



        switch (args[(args.length) - 1].toLowerCase()) {

            case 'dm':
                args[(args.length) - 1] = 'Darth';
                args.push('Malgus');
                break;

            case 'sf':
                args[(args.length) - 1] = 'Star';
                args.push('Forge');
                break;

            case 'ss':
                args[(args.length) - 1] = 'Satele';
                args.push('Shan');
                break;

            case 'tl':
                args[(args.length) - 1] = 'The';
                args.push('Leviathan');
                break;
                case 'th':
                    args[(args.length) - 1] = 'Tulak';
                    args.push('Hord');
                    break;

        };
        if (args.length === 4) {
            j = 2;
            args[0] = args[0] + ' ';
            args[0] = args[0].concat(args[1]);
            utfEncodedArgs = utf8.encode(args[0]);
            encodedArgs = encodeURI(utfEncodedArgs);
            encodedArgs = encodedArgs.replace(/%83%C2/g, '');
            encodedArgs = encodedArgs.replace(' ', '%20');
        }
        else if (args.length !== 4) {
            j = 1;
            utfEncodedArgs = utf8.encode(args[0]);
            encodedArgs = encodeURI(utfEncodedArgs);
            encodedArgs = encodedArgs.replace(/%83%C2/g, '');
        }
        fetch(searchUrl + encodedArgs).then(response => response.json()).then(data => {
            file = data;
            newArrayDataOfOjbect = Object.values(file);
            searchFile = newArrayDataOfOjbect.filter(newArrayDataOfOjbect => newArrayDataOfOjbect.shard_name === args.slice(j, j + 2).join(" ") && newArrayDataOfOjbect.char_name.toLowerCase() === args[0].toLowerCase());
            if (searchFile.length > 1)
                i = 1;
            else if (searchFile.length === 1)
                i = 0;
            if (searchFile[i] === undefined) {
                errorMsg=fonks.embedError();
                msg.reply(errorMsg);
            }
        }).then(response => fetch(getUrl + searchFile[i].character_id + '?season=' +season[0]+'')).then(response => response.json()).then(data => {
            console.log(getUrl + searchFile[i].character_id + '?season=' +season[0]+'')
            ranked = data;
            className = ranked.class_name;
            charName = ranked.char_name;
            soloRank = ranked.solo_rank;
            groupRank = ranked.group_rank;
            soloRating = ranked.solo_rating;
            groupRating = ranked.group_rating;
            shardName = ranked.shard_name;
            soloMvp = ranked.solo_mvp;
            groupMvp = ranked.group_mvp;
            soloWins = ranked.solo_wins;
            groupWins = ranked.group_wins;
            groupHistory = ranked.group_history;
            soloHistory= ranked.solo_history;
        }).then(response => fetch(imagesUrl)).then(response => response.json()).then(data => {
            randomImages = data;
            newArray = ranked.solo_history; //solo history
            var x;
            var y;
            for (i = 0; i < newArray.length - 1; i++) {

                if (newArray[i].DATE_CHANGED === newArray[i + 1].DATE_CHANGED) {
                    newArray.splice(i, 1);
                    i--;
                }
            }
         
            const dataSetsDates =[];
            const dataSets = [];
            for (let i = 0; i < newArray.length; i++) {
                dataSetsDates.push(newArray[i].DATE_CHANGED); 
              }
            for (let i = 0; i < newArray.length; i++) {
                dataSets.push(newArray[i].PVP_RANKED_RANK); 
              }
            const myChart = new QuickChart();
            myChart
                .setConfig({
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                 //   suggestedMin: 1200,
                                   // stepSize: 1,
                                }
                            }]
                        }
                    },
                    type: 'line',
                    data: {
                        labels: dataSetsDates,
                        datasets: [{
                            label: 'SOLO RANKED',
                            data: dataSets,
                            lineTension: 0.5
                        }]
                      },
                })
                .setWidth(800)
                .setHeight(400)
                .setBackgroundColor('transparent');
                
              var   url= myChart.getUrl()



            const chooseEmbed = new Discord.MessageEmbed()
            .setColor('0099ff')
                        .setTitle('Ranked Warzone Arena Leaderboards')
                        .setDescription(''
                        + srEmoji+' SR  \u200B\u200B\u200B\u200B\u200B\u200B'
                            +  trEmoji+ 'TR' +graphEmoji+'sr graph')
                            x = fonks.getRandomInt(22)
                            chooseEmbed.setImage('' + randomImages["images"][x] + '')
                            chooseEmbed.setAuthor(charName, '' + randomImages["imagesAdvancedClass"][0][className] + '', charUrl + searchFile[0].character_id)
                            .setFooter('Developed by Furkai#0331 ', '' + footerUrl + '');
                            empire.includes(className) ? chooseEmbed.setThumbnail('' + impLogo + '') : chooseEmbed.setThumbnail('' + repLogo + '')




            const SrEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('SOLO RANKED')
                .setURL('' + boardUrl+'')
                .setFooter('Developed by Furkai#0331 ', '' + footerUrl + '');
                if(soloRating!==undefined){
                SrEmbed.addFields(
                    { name: 'Rank'  , value: soloRank, inline: true },
                    { name: 'Rating', value: soloRating, inline: true },
                    { name: 'Server', value: shardName, inline: true },
                    { name: 'MVP'   , value: soloMvp, inline: true },
                    { name: 'Wins'  , value: soloWins, inline: true },
                    { name: 'Class' , value: className, inline: true },
                )
                }
                else
                SrEmbed.setDescription(charName+' didn´t play any team ranked games.')
                
            x = fonks.getRandomInt(22);
            SrEmbed.setImage('' + randomImages["images"][x] + '')
            SrEmbed.setAuthor(charName, '' + randomImages["imagesAdvancedClass"][0][className] + '', charUrl + searchFile[0].character_id)
            empire.includes(className) ? SrEmbed.setThumbnail('' + impLogo + '') : SrEmbed.setThumbnail('' + repLogo + '')

            const TrEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('TEAM RANKED')
                .setURL('' + boardUrl + '')
                .setFooter('Developed by Furkai#0331 ', '' + footerUrl + '');
                if(groupRating!==undefined){
                    TrEmbed .addFields(
                    { name: 'Rank', value: groupRank, inline: true },
                    { name: 'Rating', value: groupRating, inline: true },
                    { name: 'Server', value: shardName, inline: true },
                    { name: 'MVP', value: groupMvp, inline: true },
                    { name: 'Wins', value: groupWins, inline: true },
                    { name: 'Class', value: className, inline: true },
                )
                }
                else
                TrEmbed.setDescription(charName+' didn`t play any team ranked games.')
                
                
            x = fonks.getRandomInt(22);
            if(groupRating===undefined)
            TrEmbed.setImage('' + randomImages["images"][x] + '')
            else
            TrEmbed.setImage('' + randomImages["images"][x] + '')
            TrEmbed.setAuthor(charName, '' + randomImages["imagesAdvancedClass"][0][className] + '', charUrl + searchFile[0].character_id)

            empire.includes(className) ? TrEmbed.setThumbnail('' + impLogo + '') : TrEmbed.setThumbnail('' + repLogo + '')



             msg.channel.send(chooseEmbed).then(chooseEmbed =>{
                 
            chooseEmbed.react(srEmoji).then(() => chooseEmbed.react(trEmoji)).then(() => chooseEmbed.react(graphEmoji));
           
   
           const filter = (reaction, user) => {
               return [srEmoji, trEmoji,graphEmoji].includes(reaction.emoji.name) && user.id === msg.author.id;
           };
           
           const collector = chooseEmbed.createReactionCollector(filter,{time:40000});
           
           collector.on('collect', (reaction, user) => {
               if(reaction.emoji.name==srEmoji){
                x = fonks.getRandomInt(22);
                y=fonks.getRandomInt(7);
                if(soloRating==1){
                SrEmbed.setImage('' + randomImages["imagesShame"][y] + '')
                }
                else
                SrEmbed.setImage('' + randomImages["images"][x] + '')
                chooseEmbed.edit(SrEmbed)
               reaction.users.remove(user.id);
               }
               if(reaction.emoji.name==trEmoji){
                x = fonks.getRandomInt(22);
                y=fonks.getRandomInt(7);
                 if(groupRating==1)
                TrEmbed.setImage('' + randomImages["imagesShame"][y] + '')
                else
                TrEmbed.setImage('' + randomImages["images"][x] + '')   
                chooseEmbed.edit(TrEmbed)
               reaction.users.remove(user.id);

               }
               if(reaction.emoji.name==graphEmoji){
               
                SrEmbed.setImage(''+url+'')
               
                chooseEmbed.edit(SrEmbed)
               reaction.users.remove(user.id);

               }

           });
           
           collector.on('end', (reaction, user) => {
            chooseEmbed.reactions.removeAll()
           });
   
   
   
   
       });











            //  msg.reply(TrEmbed);
         /*   if ( Object.keys(soloHistory).length === 0)
                msg.reply('http://gph.is/1c4yGWA')
            else
                msg.reply(SrEmbed); */

        });

    },
};