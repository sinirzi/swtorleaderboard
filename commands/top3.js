const fetch = require('node-fetch');
const Discord = require('discord.js');
const utf8 = require('utf8');
const fonks = require('./fonks');
const seasonCurrent = process.env.seasonCurrent;
const seasonThirteen=process.env.seasonThirteen;
const season=[seasonCurrent,seasonThirteen];
const env = require('./env.js');
const imagesUrl = 'https://raw.githubusercontent.com/sinirzi/swtorleaderboard/main/images.json';
const searchUrl = 'https://www.swtor.com/lb/search/';
const getUrl = 'https://www.swtor.com/lb/get/';
const footerUrl = 'https://static-cdn.jtvnw.net/emoticons/v2/435279/default/dark/1.0';
const charUrl = 'http://www.swtor.com/leaderboards/character/';
const impLogo = 'http://pm1.narvii.com/6699/a004bf79c862b6c01070ce8a44551c9d9c3d908f_00.jpg';
const repLogo = 'https://images.alphacoders.com/300/thumb-1920-300681.jpg';
const boardUrl = 'http://www.swtor.com/leaderboards/';
const thumbUrl = 'https://i.pinimg.com/originals/28/64/27/2864273c5bd1de316fc27ff2b39eecfa.png';
const classUrl = 'http://www.swtor.com/leaderboards/class/';
const lbDataUrl=['http://www.swtor.com/lb/data?page=1&class=','&column=pvp_ranked_solo&season=','&column=pvp_ranked_group&season='];
const fetchClass=['shadow-assassin', 'sage-sorcerer', 'vanguard-powertech', 'comando-mercenary', 'gunslinger-sniper', 'scoundrel-operative', 'sentinel-marauder', 'guardian-juggernaut'];
const legend='https://i.gyazo.com/e9971fee94eabf40f1363b7c4bd1ee51.png';
module.exports = {

    name: '.top3',

    execute(msg, args) {
        let server=msg.guild.id;
        console.log('top3 command called:',args)
        const Emojisw=['⚫' , '⬛' , '🔵' , '🟦' , '🟢' , '🟩' , '🟤' , '🟫' , '🟡' , '🟨' , '🟠' , '🟧' , '🔴' , '🟥' , '🟣' , '🟪','📜'];
        const Emojis=['<:shadow:618547355335000085>' , '<:assassin:618547488521060353>' , '<:sage:618547307218206720>' , '<:sorcerer:618547559492747284>' , '<:vanguard:618547606884188205>' , '<:powertech:618547437140836358>' , '<:commando:618547195951579168>' , '<:mercenary:618547384716099634>' ,
         '<:gunslinger:618547233717092382>' , '<:sniper:618547581760438281>' , '<:scoundrel:618547465318301728>' , '<:operative:618547411962560512>' , '<:sentinel:618547325362765835>' , '<:marauder:618547536516481045>' , '<:guardian:618547270924632074>' , '<:juggernaut:618547512269078528>','📜'];
        const EmojisId=['618547355335000085','618547488521060353','618547307218206720','618547559492747284','618547606884188205','618547437140836358','618547195951579168','618547384716099634','618547233717092382','618547581760438281','618547465318301728',
        '618547411962560512','618547325362765835','618547536516481045','618547270924632074','618547512269078528'];
        var topThreeEmbed;
        let randomImages = [];
        let republic = ['Shadow', 'Guardian', 'Sentinel', 'Sage', 'Vanguard', 'Commando', 'Gunslinger', 'Scoundrel'];
        let empire = ['Assassin', 'Juggernaut', 'Marauder', 'Sorcerer', 'Powertech', 'Mercenary', 'Sniper', 'Operative'];
        var summEmbed;
        var newArrayDataOfOjbect;
        var topThree;
        var topThreeShadow;
        var topThreeSin;
        var topThreeSorc;
        var topThreeSage;
        var topThreeVg;
        var topThreePt;
        var topThreeComm;
        var topThreeMerc;
        var topThreeGslinger;
        var topThreeSnip;
        var topThreeSco;
        var topThreeOper;
        var topThreeSent;
        var topThreeMara;
        var topThreeGuardian;
        var topThreeJugg;
        var topThreeSa;
        var topThreeSs;
        var topThreeVp;
        var topThreeCm;
        var topThreeGs;
        var topThreeSo;
        var topThreeSm;
        var topThreeGj;
        var isSr;
        var msgEmbedDataset;
        var warningMsg='.top3 sr or .top3 tr';

        args[0]=args[0].toLowerCase();
        if(args[0]!==undefined&&args[1]===undefined){
        if(args[0]=='sr')
        isSr=true;
        if(args[0]=='tr')
        isSr=false;
        } 
        console.log('server',typeof(server))
        if(server==='613633744246407178'){
            const chooseEmbed = new Discord.MessageEmbed()
                            .setColor('0099ff')
                            .setTitle('Ranked Warzone Arena Leaderboards')
                            .setFooter('Developed by Furkai#0331 ', '' + footerUrl + '');
                            if(isSr===undefined)
                            msg.reply(''+warningMsg+'');
                            else{
                            msg.channel.send(chooseEmbed).then(chooseEmbed =>{
                                chooseEmbed.react(Emojis[0]).then(() => chooseEmbed.react(Emojis[1]).then(() => chooseEmbed.react(Emojis[2]).then(() => chooseEmbed.react(Emojis[3])
                                .then(() => chooseEmbed.react(Emojis[4]).then(() => chooseEmbed.react(Emojis[5]).then(() => chooseEmbed.react(Emojis[6]).then(() => chooseEmbed.react(Emojis[7])
                                .then(() => chooseEmbed.react(Emojis[8]).then(() => chooseEmbed.react(Emojis[9]).then(() => chooseEmbed.react(Emojis[10]).then(() => chooseEmbed.react(Emojis[11])
                                .then(() => chooseEmbed.react(Emojis[12]).then(() => chooseEmbed.react(Emojis[13]).then(() => chooseEmbed.react(Emojis[14]).then(() => chooseEmbed.react(Emojis[15]).then(() => chooseEmbed.react(Emojis[16])))))))))))))))));
                               const filter = (reaction, user) => {
                                   return [EmojisId[0],EmojisId[1],EmojisId[2],EmojisId[3],EmojisId[4],EmojisId[5],EmojisId[6],EmojisId[7],EmojisId[8],
                                   EmojisId[9],EmojisId[10],EmojisId[11],EmojisId[12],EmojisId[13],EmojisId[14],EmojisId[15],Emojis[16]].includes(reaction.emoji.id || reaction.emoji.name)&&user.id === msg.author.id;
                               };
                               const collector = chooseEmbed.createReactionCollector(filter,{time:120000});
                               collector.on('collect', (reaction, user) => {
                                   
                                   if(reaction.emoji.id==EmojisId[0]){
                                    fetch(''+lbDataUrl[0]+fetchClass[0]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Shadow')).filter((topThree, index) => index < 3);
                                       chooseEmbed.edit (embedDataset(fetchClass[0],isSr));
                                });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[1]){
                                    fetch(''+lbDataUrl[0]+fetchClass[0]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Assassin')).filter((topThree, index) => index < 3);
                                        chooseEmbed.edit(embedDataset(fetchClass[0],isSr))
                                    });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[2]){
                                    fetch(''+lbDataUrl[0]+fetchClass[1]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Sage')).filter((topThree, index) => index < 3);
                                       chooseEmbed.edit (embedDataset(fetchClass[1],isSr));
                                });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[3]){
                                    fetch(''+lbDataUrl[0]+fetchClass[1]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Sorcerer')).filter((topThree, index) => index < 3);
                                        chooseEmbed.edit(embedDataset(fetchClass[1],isSr))
                                    });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[4]){
                                    fetch(''+lbDataUrl[0]+fetchClass[2]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Vanguard')).filter((topThree, index) => index < 3);
                                       chooseEmbed.edit (embedDataset(fetchClass[2],isSr));
                                });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[5]){
                                    fetch(''+lbDataUrl[0]+fetchClass[2]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Powertech')).filter((topThree, index) => index < 3);
                                        chooseEmbed.edit(embedDataset(fetchClass[2],isSr))
                                    });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[6]){
                                    fetch(''+lbDataUrl[0]+fetchClass[3]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Commando')).filter((topThree, index) => index < 3);
                                       chooseEmbed.edit (embedDataset(fetchClass[3],isSr));
                                });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[7]){
                                    fetch(''+lbDataUrl[0]+fetchClass[3]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Mercenary')).filter((topThree, index) => index < 3);
                                        chooseEmbed.edit(embedDataset(fetchClass[3],isSr))
                                    });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[8]){
                                    fetch(''+lbDataUrl[0]+fetchClass[4]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Gunslinger')).filter((topThree, index) => index < 3);
                                       chooseEmbed.edit (embedDataset(fetchClass[4],isSr));
                                });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[9]){
                                    fetch(''+lbDataUrl[0]+fetchClass[4]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Sniper')).filter((topThree, index) => index < 3);
                                        chooseEmbed.edit(embedDataset(fetchClass[4],isSr))
                                    });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[10]){
                                    fetch(''+lbDataUrl[0]+fetchClass[5]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Scoundrel')).filter((topThree, index) => index < 3);
                                       chooseEmbed.edit (embedDataset(fetchClass[5],isSr));
                                });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[11]){
                                    fetch(''+lbDataUrl[0]+fetchClass[5]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Operative')).filter((topThree, index) => index < 3);
                                        chooseEmbed.edit(embedDataset(fetchClass[5],isSr))
                                    }); 
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[12]){
                                    fetch(''+lbDataUrl[0]+fetchClass[6]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Sentinel')).filter((topThree, index) => index < 3);
                                       chooseEmbed.edit (embedDataset(fetchClass[6],isSr));
                                });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[13]){
                                    fetch(''+lbDataUrl[0]+fetchClass[6]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Marauder')).filter((topThree, index) => index < 3);
                                        chooseEmbed.edit(embedDataset(fetchClass[6],isSr))
                                    });   
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[14]){
                                    fetch(''+lbDataUrl[0]+fetchClass[7]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Guardian')).filter((topThree, index) => index < 3);
                                       chooseEmbed.edit (embedDataset(fetchClass[7],isSr));
                                });
                                   reaction.users.remove(user.id);
                                   }
                                   if(reaction.emoji.id==EmojisId[15]){
                                    fetch(''+lbDataUrl[0]+fetchClass[7]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                        newArrayDataOfOjbect = Object.values(file.data);
                                        topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                        topThree = topThree.filter((topThree => topThree.class_name === 'Juggernaut')).filter((topThree, index) => index < 3);
                                        chooseEmbed.edit(embedDataset(fetchClass[7],isSr))
                                    });  
                                   reaction.users.remove(user.id);
                                   }

                                   if(reaction.emoji.name==Emojis[16]){

                                   fetch(''+lbDataUrl[0]+fetchClass[0]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    var  saArrayDataOfObject = Object.values(file.data);
                                    topThreeSa = fonks.calcTopThree(saArrayDataOfObject);
                                    topThreeSin = topThreeSa.filter((topThree => topThree.class_name === 'Assassin')).filter((topThree, index) => index < 3);
                                    topThreeShadow = topThreeSa.filter((topThree => topThree.class_name === 'Shadow')).filter((topThree, index) => index < 3);
                                    topThreeSa = topThreeSin.concat(topThreeShadow);
                                    topThreeSa = fonks.calcTopThree(topThreeSa);
                                   topThreeSa = fonks.summaryString(topThreeSa);
                                }).then(response => fetch(''+lbDataUrl[0]+fetchClass[1]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                    var  ssArrayDataOfObject = Object.values(file.data);
                                    topThreeSs = fonks.calcTopThree(ssArrayDataOfObject);
                                    topThreeSorc = topThreeSs.filter((topThree => topThree.class_name === 'Sorcerer')).filter((topThree, index) => index < 3);
                                    topThreeSage = topThreeSs.filter((topThree => topThree.class_name === 'Sage')).filter((topThree, index) => index < 3);
                                    topThreeSs = topThreeSorc.concat(topThreeSage);
                                    topThreeSs = fonks.calcTopThree(topThreeSs);
                                    topThreeSs = fonks.summaryString(topThreeSs);
                                }).then(response => fetch(''+lbDataUrl[0]+fetchClass[2]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                    var vpArrayDataOfObject = Object.values(file.data);
                                    topThreeVp = fonks.calcTopThree(vpArrayDataOfObject);
                                    topThreeVg = topThreeVp.filter((topThree => topThree.class_name === 'Vanguard')).filter((topThree, index) => index < 3);
                                    topThreePt = topThreeVp.filter((topThree => topThree.class_name === 'Powertech')).filter((topThree, index) => index < 3);
                                    topThreeVp = topThreeVg.concat(topThreePt);
                                    topThreeVp = fonks.calcTopThree(topThreeVp);
                                    topThreeVp = fonks.summaryString(topThreeVp);
                                }).then(response => fetch(''+lbDataUrl[0]+fetchClass[3]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                    var  cmArrayDataOfObject = Object.values(file.data);
                                    topThreeCm = fonks.calcTopThree(cmArrayDataOfObject);
                                    topThreeComm = topThreeCm.filter((topThree => topThree.class_name === 'Commando')).filter((topThree, index) => index < 3);
                                    topThreeMerc = topThreeCm.filter((topThree => topThree.class_name === 'Mercenary')).filter((topThree, index) => index < 3);
                                    topThreeCm = topThreeComm.concat(topThreeMerc);
                                    topThreeCm = fonks.calcTopThree(topThreeCm);
                                    topThreeCm = fonks.summaryString(topThreeCm);
                                }).then(response => fetch(''+lbDataUrl[0]+fetchClass[4]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                    var  gsArrayDataOfObject = Object.values(file.data);
                                    topThreeGs = fonks.calcTopThree(gsArrayDataOfObject);
                                    topThreeGslinger = topThreeGs.filter((topThree => topThree.class_name === 'Gunslinger')).filter((topThree, index) => index < 3);
                                    topThreeSnip = topThreeGs.filter((topThree => topThree.class_name === 'Sniper')).filter((topThree, index) => index < 3);
                                    topThreeGs = topThreeGslinger.concat(topThreeSnip);
                                    topThreeGs = fonks.calcTopThree(topThreeGs);
                                    topThreeGs = fonks.summaryString(topThreeGs);
                                }).then(response => fetch(''+lbDataUrl[0]+fetchClass[5]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                    var  soArrayDataOfObject = Object.values(file.data);
                                    topThreeSo = fonks.calcTopThree(soArrayDataOfObject);
                                    topThreeSco = topThreeSo.filter((topThree => topThree.class_name === 'Scoundrel')).filter((topThree, index) => index < 3);
                                    topThreeOper = topThreeSo.filter((topThree => topThree.class_name === 'Operative')).filter((topThree, index) => index < 3);
                                    topThreeSo = topThreeSco.concat(topThreeOper);
                                    topThreeSo = fonks.calcTopThree(topThreeSo);
                                    topThreeSo = fonks.summaryString(topThreeSo);
                                }).then(response => fetch(''+lbDataUrl[0]+fetchClass[6]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                    var  smArrayDataOfObject = Object.values(file.data);
                                    topThreeSm = fonks.calcTopThree(smArrayDataOfObject);
                                    topThreeSent = topThreeSm.filter((topThree => topThree.class_name === 'Sentinel')).filter((topThree, index) => index < 3);
                                    topThreeMara = topThreeSm.filter((topThree => topThree.class_name === 'Marauder')).filter((topThree, index) => index < 3);
                                    topThreeSm = topThreeSent.concat(topThreeMara);
                                    topThreeSm = fonks.calcTopThree(topThreeSm);
                                    topThreeSm = fonks.summaryString(topThreeSm);
                                }).then(response => fetch(''+lbDataUrl[0]+fetchClass[7]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                  var  gjArrayDataOfObject = Object.values(file.data);
                                    topThreeGj = fonks.calcTopThree(gjArrayDataOfObject);
                                    topThreeGuardian = topThreeGj.filter((topThree => topThree.class_name === 'Guardian')).filter((topThree, index) => index < 3);
                                    topThreeJugg = topThreeGj.filter((topThree => topThree.class_name === 'Juggernaut')).filter((topThree, index) => index < 3);
                                    topThreeGj = topThreeGuardian.concat(topThreeJugg);
                                    topThreeGj = fonks.calcTopThree(topThreeGj);
                                    topThreeGj = fonks.summaryString(topThreeGj);
                                    summEmbed= fonks.embedSummary(topThreeGj, topThreeSm, topThreeSa, topThreeSs, topThreeVp, topThreeCm, topThreeGs, topThreeSo,isSr);
                                   chooseEmbed.edit(summEmbed);
                                }); 


                                reaction.users.remove(user.id);
                            }




                               });
                               collector.on('end', (reaction, user) => {
                                chooseEmbed.reactions.removeAll()
                               });
                           });
                        }

                    }
                    else{
                        const chooseEmbed = new Discord.MessageEmbed()
                        .setColor('0099ff')
                        .setTitle('Ranked Warzone Arena Leaderboards')
                        .setImage(''+legend+'')
                        .setFooter('Developed by Furkai#0331 ', '' + footerUrl + '');
                        if(isSr===undefined)
                        msg.reply(''+warningMsg+'');
                        else{
                        msg.channel.send(''+legend+'')
                        msg.channel.send(chooseEmbed).then(chooseEmbed =>{
                            chooseEmbed.react(Emojisw[0]).then(() => chooseEmbed.react(Emojisw[1]).then(() => chooseEmbed.react(Emojisw[2]).then(() => chooseEmbed.react(Emojisw[3])
                            .then(() => chooseEmbed.react(Emojisw[4]).then(() => chooseEmbed.react(Emojisw[5]).then(() => chooseEmbed.react(Emojisw[6]).then(() => chooseEmbed.react(Emojisw[7])
                            .then(() => chooseEmbed.react(Emojisw[8]).then(() => chooseEmbed.react(Emojisw[9]).then(() => chooseEmbed.react(Emojisw[10]).then(() => chooseEmbed.react(Emojisw[11])
                            .then(() => chooseEmbed.react(Emojisw[12]).then(() => chooseEmbed.react(Emojisw[13]).then(() => chooseEmbed.react(Emojisw[14]).then(() => chooseEmbed.react(Emojisw[15]).then(() => chooseEmbed.react(Emojisw[16])))))))))))))))));
                           const filter = (reaction, user) => {
                               return [Emojisw[0],Emojisw[1],Emojisw[2],Emojisw[3],Emojisw[4],Emojisw[5],Emojisw[6],Emojisw[7],Emojisw[8],
                               Emojisw[9],Emojisw[10],Emojisw[11],Emojisw[12],Emojisw[13],Emojisw[14],Emojisw[15],Emojisw[16]].includes(reaction.emoji.name) //&&user.id === msg.author.id;
                           };
                           const collector = chooseEmbed.createReactionCollector(filter,{time:120000});
                           collector.on('collect', (reaction, user) => {
                               if(reaction.emoji.name==Emojisw[0]){
                                fetch(''+lbDataUrl[0]+fetchClass[0]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Shadow')).filter((topThree, index) => index < 3);
                                   chooseEmbed.edit (embedDataset(fetchClass[0],isSr));
                            });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[1]){
                                fetch(''+lbDataUrl[0]+fetchClass[0]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Assassin')).filter((topThree, index) => index < 3);
                                    chooseEmbed.edit(embedDataset(fetchClass[0],isSr))
                                });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[2]){
                                fetch(''+lbDataUrl[0]+fetchClass[1]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Sage')).filter((topThree, index) => index < 3);
                                   chooseEmbed.edit (embedDataset(fetchClass[1],isSr));
                            });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[3]){
                                fetch(''+lbDataUrl[0]+fetchClass[1]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Sorcerer')).filter((topThree, index) => index < 3);
                                    chooseEmbed.edit(embedDataset(fetchClass[1],isSr))
                                });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[4]){
                                fetch(''+lbDataUrl[0]+fetchClass[2]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Vanguard')).filter((topThree, index) => index < 3);
                                   chooseEmbed.edit (embedDataset(fetchClass[2],isSr));
                            });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[5]){
                                fetch(''+lbDataUrl[0]+fetchClass[2]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Powertech')).filter((topThree, index) => index < 3);
                                    chooseEmbed.edit(embedDataset(fetchClass[2],isSr))
                                });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[6]){
                                fetch(''+lbDataUrl[0]+fetchClass[3]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Commando')).filter((topThree, index) => index < 3);
                                   chooseEmbed.edit (embedDataset(fetchClass[3],isSr));
                            });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[7]){
                                fetch(''+lbDataUrl[0]+fetchClass[3]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Mercenary')).filter((topThree, index) => index < 3);
                                    chooseEmbed.edit(embedDataset(fetchClass[3],isSr))
                                });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[8]){
                                fetch(''+lbDataUrl[0]+fetchClass[4]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Gunslinger')).filter((topThree, index) => index < 3);
                                   chooseEmbed.edit (embedDataset(fetchClass[4],isSr));
                            });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[9]){
                                fetch(''+lbDataUrl[0]+fetchClass[4]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Sniper')).filter((topThree, index) => index < 3);
                                    chooseEmbed.edit(embedDataset(fetchClass[4],isSr))
                                });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[10]){
                                fetch(''+lbDataUrl[0]+fetchClass[5]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Scoundrel')).filter((topThree, index) => index < 3);
                                   chooseEmbed.edit (embedDataset(fetchClass[5],isSr));
                            });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[11]){
                                fetch(''+lbDataUrl[0]+fetchClass[5]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Operative')).filter((topThree, index) => index < 3);
                                    chooseEmbed.edit(embedDataset(fetchClass[5],isSr))
                                }); 
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[12]){
                                fetch(''+lbDataUrl[0]+fetchClass[6]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Sentinel')).filter((topThree, index) => index < 3);
                                   chooseEmbed.edit (embedDataset(fetchClass[6],isSr));
                            });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[13]){
                                fetch(''+lbDataUrl[0]+fetchClass[6]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Marauder')).filter((topThree, index) => index < 3);
                                    chooseEmbed.edit(embedDataset(fetchClass[6],isSr))
                                });   
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[14]){
                                fetch(''+lbDataUrl[0]+fetchClass[7]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Guardian')).filter((topThree, index) => index < 3);
                                   chooseEmbed.edit (embedDataset(fetchClass[7],isSr));
                            });
                               reaction.users.remove(user.id);
                               }
                               if(reaction.emoji.name==Emojisw[15]){
                                fetch(''+lbDataUrl[0]+fetchClass[7]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                    newArrayDataOfOjbect = Object.values(file.data);
                                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                                    topThree = topThree.filter((topThree => topThree.class_name === 'Juggernaut')).filter((topThree, index) => index < 3);
                                    chooseEmbed.edit(embedDataset(fetchClass[7],isSr))
                                });  
                               reaction.users.remove(user.id);
                               }

                               if(reaction.emoji.name==Emojisw[16]){

                               fetch(''+lbDataUrl[0]+fetchClass[0]+rankedType(isSr)+ season[1] +'').then(response => response.json()).then(file => {
                                var  saArrayDataOfObject = Object.values(file.data);
                                topThreeSa = fonks.calcTopThree(saArrayDataOfObject);
                                topThreeSin = topThreeSa.filter((topThree => topThree.class_name === 'Assassin')).filter((topThree, index) => index < 3);
                                topThreeShadow = topThreeSa.filter((topThree => topThree.class_name === 'Shadow')).filter((topThree, index) => index < 3);
                                topThreeSa = topThreeSin.concat(topThreeShadow);
                                topThreeSa = fonks.calcTopThree(topThreeSa);
                               topThreeSa = fonks.summaryString(topThreeSa);
                            }).then(response => fetch(''+lbDataUrl[0]+fetchClass[1]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                var  ssArrayDataOfObject = Object.values(file.data);
                                topThreeSs = fonks.calcTopThree(ssArrayDataOfObject);
                                topThreeSorc = topThreeSs.filter((topThree => topThree.class_name === 'Sorcerer')).filter((topThree, index) => index < 3);
                                topThreeSage = topThreeSs.filter((topThree => topThree.class_name === 'Sage')).filter((topThree, index) => index < 3);
                                topThreeSs = topThreeSorc.concat(topThreeSage);
                                topThreeSs = fonks.calcTopThree(topThreeSs);
                                topThreeSs = fonks.summaryString(topThreeSs);
                            }).then(response => fetch(''+lbDataUrl[0]+fetchClass[2]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                var vpArrayDataOfObject = Object.values(file.data);
                                topThreeVp = fonks.calcTopThree(vpArrayDataOfObject);
                                topThreeVg = topThreeVp.filter((topThree => topThree.class_name === 'Vanguard')).filter((topThree, index) => index < 3);
                                topThreePt = topThreeVp.filter((topThree => topThree.class_name === 'Powertech')).filter((topThree, index) => index < 3);
                                topThreeVp = topThreeVg.concat(topThreePt);
                                topThreeVp = fonks.calcTopThree(topThreeVp);
                                topThreeVp = fonks.summaryString(topThreeVp);
                            }).then(response => fetch(''+lbDataUrl[0]+fetchClass[3]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                var  cmArrayDataOfObject = Object.values(file.data);
                                topThreeCm = fonks.calcTopThree(cmArrayDataOfObject);
                                topThreeComm = topThreeCm.filter((topThree => topThree.class_name === 'Commando')).filter((topThree, index) => index < 3);
                                topThreeMerc = topThreeCm.filter((topThree => topThree.class_name === 'Mercenary')).filter((topThree, index) => index < 3);
                                topThreeCm = topThreeComm.concat(topThreeMerc);
                                topThreeCm = fonks.calcTopThree(topThreeCm);
                                topThreeCm = fonks.summaryString(topThreeCm);
                            }).then(response => fetch(''+lbDataUrl[0]+fetchClass[4]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                var  gsArrayDataOfObject = Object.values(file.data);
                                topThreeGs = fonks.calcTopThree(gsArrayDataOfObject);
                                topThreeGslinger = topThreeGs.filter((topThree => topThree.class_name === 'Gunslinger')).filter((topThree, index) => index < 3);
                                topThreeSnip = topThreeGs.filter((topThree => topThree.class_name === 'Sniper')).filter((topThree, index) => index < 3);
                                topThreeGs = topThreeGslinger.concat(topThreeSnip);
                                topThreeGs = fonks.calcTopThree(topThreeGs);
                                topThreeGs = fonks.summaryString(topThreeGs);
                            }).then(response => fetch(''+lbDataUrl[0]+fetchClass[5]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                var  soArrayDataOfObject = Object.values(file.data);
                                topThreeSo = fonks.calcTopThree(soArrayDataOfObject);
                                topThreeSco = topThreeSo.filter((topThree => topThree.class_name === 'Scoundrel')).filter((topThree, index) => index < 3);
                                topThreeOper = topThreeSo.filter((topThree => topThree.class_name === 'Operative')).filter((topThree, index) => index < 3);
                                topThreeSo = topThreeSco.concat(topThreeOper);
                                topThreeSo = fonks.calcTopThree(topThreeSo);
                                topThreeSo = fonks.summaryString(topThreeSo);
                            }).then(response => fetch(''+lbDataUrl[0]+fetchClass[6]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                                var  smArrayDataOfObject = Object.values(file.data);
                                topThreeSm = fonks.calcTopThree(smArrayDataOfObject);
                                topThreeSent = topThreeSm.filter((topThree => topThree.class_name === 'Sentinel')).filter((topThree, index) => index < 3);
                                topThreeMara = topThreeSm.filter((topThree => topThree.class_name === 'Marauder')).filter((topThree, index) => index < 3);
                                topThreeSm = topThreeSent.concat(topThreeMara);
                                topThreeSm = fonks.calcTopThree(topThreeSm);
                                topThreeSm = fonks.summaryString(topThreeSm);
                            }).then(response => fetch(''+lbDataUrl[0]+fetchClass[7]+rankedType(isSr)+ season[1] +'')).then(response => response.json()).then(file => {
                              var  gjArrayDataOfObject = Object.values(file.data);
                                topThreeGj = fonks.calcTopThree(gjArrayDataOfObject);
                                topThreeGuardian = topThreeGj.filter((topThree => topThree.class_name === 'Guardian')).filter((topThree, index) => index < 3);
                                topThreeJugg = topThreeGj.filter((topThree => topThree.class_name === 'Juggernaut')).filter((topThree, index) => index < 3);
                                topThreeGj = topThreeGuardian.concat(topThreeJugg);
                                topThreeGj = fonks.calcTopThree(topThreeGj);
                                topThreeGj = fonks.summaryString(topThreeGj);
                                summEmbed= fonks.embedSummary(topThreeGj, topThreeSm, topThreeSa, topThreeSs, topThreeVp, topThreeCm, topThreeGs, topThreeSo,isSr);
                               chooseEmbed.edit(summEmbed);
                            }); 


                            reaction.users.remove(user.id);
                        }




                           });
                           collector.on('end', (reaction, user) => {
                            chooseEmbed.reactions.removeAll()
                           });
                       });
                    }
                    }

        function embedDataset(className,isSolo) {

                if(topThree[0]!==undefined)
                var adClassName=topThree[0].class_name;
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
            if (topThree[0] === undefined) {
                exampleEmbed.setThumbnail(''+thumbUrl+'')
                exampleEmbed.setDescription("NO ONE IS TOP3 YET")
                exampleEmbed.setImage("https://i.imgur.com/QfEb5mf.png")
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
                    
                    exampleEmbed.addField('Name', '[' + topThree[i].char_name + ']('+charUrl+'' + topThree[i].chr_player_character_id + ')', true)
                exampleEmbed.addField('Rating', topThree[i].rating, true)
                exampleEmbed.addField('Server', topThree[i].shard_name, true) 
                    exampleEmbed.setImage('' + env.object[advClassName]+'')  
            }
            if (topThree[0] !== undefined) 
                isSolo ? exampleEmbed.setTitle('SOLO RANKED' + ' ' + '          TOP3 ' + adClassName):exampleEmbed.setTitle('TEAM RANKED' + ' ' + '          TOP3 ' + adClassName)
            else{
                isSolo ?  exampleEmbed.setTitle('SOLO RANKED' + ' ' + '          TOP3 ' + args[0]):exampleEmbed.setTitle('TEAM RANKED' + ' ' + '          TOP3 ' + args[0])
                exampleEmbed .setFooter('Developed by Furkai#0331', ''+footerUrl+'');
            }
                exampleEmbed.setURL('' + classUrl+'' + className)
            
               
        if(isSolo!==undefined)
        return exampleEmbed
        else
        msg.reply('type .top3 advancedClassName sr or .top3 advancedClassName tr');
        }

        function rankedType(isSr){
            return isSr ? lbDataUrl[1] : lbDataUrl[2];

        }        
        }
    }


