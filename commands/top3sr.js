const fetch = require('node-fetch');
const Discord = require('discord.js');
const utf8 = require('utf8');
const fonks = require('./fonks');
const season = process.env.season;
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
module.exports = {

    name: '.top3sr',

    execute(msg, args) {
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
        var msgEmbedDataset;

        args[0]=args[0].toLowerCase();

        switch (args[0]) {
            case 'all':
                fetch('http://www.swtor.com/lb/data?page=1&class=shadow-assassin&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    var  saArrayDataOfObject = Object.values(file.data);
                    topThreeSa = fonks.calcTopThree(saArrayDataOfObject);
                    topThreeSin = topThreeSa.filter((topThree => topThree.class_name === 'Assassin')).filter((topThree, index) => index < 3);
                    topThreeShadow = topThreeSa.filter((topThree => topThree.class_name === 'Shadow')).filter((topThree, index) => index < 3);
                    topThreeSa = topThreeSin.concat(topThreeShadow);
                    topThreeSa = fonks.calcTopThree(topThreeSa);
                   topThreeSa = fonks.summaryString(topThreeSa);
                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=sage-sorcerer&column=pvp_ranked_solo&season=' + season +'')).then(response => response.json()).then(file => {
                    var  ssArrayDataOfObject = Object.values(file.data);
                    topThreeSs = fonks.calcTopThree(ssArrayDataOfObject);
                    topThreeSorc = topThreeSs.filter((topThree => topThree.class_name === 'Sorcerer')).filter((topThree, index) => index < 3);
                    topThreeSage = topThreeSs.filter((topThree => topThree.class_name === 'Sage')).filter((topThree, index) => index < 3);
                    topThreeSs = topThreeSorc.concat(topThreeSage);
                    topThreeSs = fonks.calcTopThree(topThreeSs);
                    topThreeSs = fonks.summaryString(topThreeSs);
                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=vanguard-powertech&column=pvp_ranked_solo&season=' + season +'')).then(response => response.json()).then(file => {
                    var vpArrayDataOfObject = Object.values(file.data);
                    topThreeVp = fonks.calcTopThree(vpArrayDataOfObject);
                    topThreeVg = topThreeVp.filter((topThree => topThree.class_name === 'Vanguard')).filter((topThree, index) => index < 3);
                    topThreePt = topThreeVp.filter((topThree => topThree.class_name === 'Powertech')).filter((topThree, index) => index < 3);
                    topThreeVp = topThreeVg.concat(topThreePt);
                    topThreeVp = fonks.calcTopThree(topThreeVp);
                    topThreeVp = fonks.summaryString(topThreeVp);
                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=comando-mercenary&column=pvp_ranked_solo&season=' + season +'')).then(response => response.json()).then(file => {
                    var  cmArrayDataOfObject = Object.values(file.data);
                    topThreeCm = fonks.calcTopThree(cmArrayDataOfObject);
                    topThreeComm = topThreeCm.filter((topThree => topThree.class_name === 'Commando')).filter((topThree, index) => index < 3);
                    topThreeMerc = topThreeCm.filter((topThree => topThree.class_name === 'Mercenary')).filter((topThree, index) => index < 3);
                    topThreeCm = topThreeComm.concat(topThreeMerc);
                    topThreeCm = fonks.calcTopThree(topThreeCm);
                    topThreeCm = fonks.summaryString(topThreeCm);
                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=gunslinger-sniper&column=pvp_ranked_solo&season=' + season +'')).then(response => response.json()).then(file => {
                    var  gsArrayDataOfObject = Object.values(file.data);
                    topThreeGs = fonks.calcTopThree(gsArrayDataOfObject);
                    topThreeGslinger = topThreeGs.filter((topThree => topThree.class_name === 'Gunslinger')).filter((topThree, index) => index < 3);
                    topThreeSnip = topThreeGs.filter((topThree => topThree.class_name === 'Sniper')).filter((topThree, index) => index < 3);
                    topThreeGs = topThreeGslinger.concat(topThreeSnip);
                    topThreeGs = fonks.calcTopThree(topThreeGs);
                    topThreeGs = fonks.summaryString(topThreeGs);
                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=scoundrel-operative&column=pvp_ranked_solo&season=' + season +'')).then(response => response.json()).then(file => {
                    var  soArrayDataOfObject = Object.values(file.data);
                    topThreeSo = fonks.calcTopThree(soArrayDataOfObject);
                    topThreeSco = topThreeSo.filter((topThree => topThree.class_name === 'Scoundrel')).filter((topThree, index) => index < 3);
                    topThreeOper = topThreeSo.filter((topThree => topThree.class_name === 'Operative')).filter((topThree, index) => index < 3);
                    topThreeSo = topThreeSco.concat(topThreeOper);
                    topThreeSo = fonks.calcTopThree(topThreeSo);
                    topThreeSo = fonks.summaryString(topThreeSo);
                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=sentinel-marauder&column=pvp_ranked_solo&season=' + season +'')).then(response => response.json()).then(file => {
                    var  smArrayDataOfObject = Object.values(file.data);
                    topThreeSm = fonks.calcTopThree(smArrayDataOfObject);
                    topThreeSent = topThreeSm.filter((topThree => topThree.class_name === 'Sentinel')).filter((topThree, index) => index < 3);
                    topThreeMara = topThreeSm.filter((topThree => topThree.class_name === 'Marauder')).filter((topThree, index) => index < 3);
                    topThreeSm = topThreeSent.concat(topThreeMara);
                    topThreeSm = fonks.calcTopThree(topThreeSm);
                    topThreeSm = fonks.summaryString(topThreeSm);
                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=guardian-juggernaut&column=pvp_ranked_solo&season=' + season +'')).then(response => response.json()).then(file => {
                  var  gjArrayDataOfObject = Object.values(file.data);
                    topThreeGj = fonks.calcTopThree(gjArrayDataOfObject);
                    topThreeGuardian = topThreeGj.filter((topThree => topThree.class_name === 'Guardian')).filter((topThree, index) => index < 3);
                    topThreeJugg = topThreeGj.filter((topThree => topThree.class_name === 'Juggernaut')).filter((topThree, index) => index < 3);
                    topThreeGj = topThreeGuardian.concat(topThreeJugg);
                    topThreeGj = fonks.calcTopThree(topThreeGj);
                    topThreeGj = fonks.summaryString(topThreeGj);
                    summEmbed= fonks.embedSummary(topThreeGj, topThreeSm, topThreeSa, topThreeSs, topThreeVp, topThreeCm, topThreeGs, topThreeSo);
                    msg.reply(summEmbed);
                });         
                break;
            case 'shadow':
                fetch('http://www.swtor.com/lb/data?page=1&class=shadow-assassin&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Shadow')).filter((topThree, index) => index < 3);
                    embedDataset('shadow-assassin');

                });
                break;
            case 'sin':
            case 'assassin':
                fetch('http://www.swtor.com/lb/data?page=1&class=shadow-assassin&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Assassin')).filter((topThree, index) => index < 3);
                    embedDataset('shadow-assassin');

                });
                break;
            case 'sage':
                fetch('http://www.swtor.com/lb/data?page=1&class=sage-sorcerer&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Sage')).filter((topThree, index) => index < 3);
                    embedDataset('sage-sorcerer');
                });
                break;
            case 'sorc':
            case 'sorcerer':
                fetch('http://www.swtor.com/lb/data?page=1&class=sage-sorcerer&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Sorcerer')).filter((topThree, index) => index < 3);
                    embedDataset('sage-sorcerer');
                });
                break;
            case 'vg':
            case 'vanguard':
                fetch('http://www.swtor.com/lb/data?page=1&class=vanguard-powertech&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Vanguard')).filter((topThree, index) => index < 3);
                    embedDataset('vanguard-powertech');
                });
                break;
            case 'pt':
            case 'powertech':
                fetch('http://www.swtor.com/lb/data?page=1&class=vanguard-powertech&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Powertech')).filter((topThree, index) => index < 3);
                    embedDataset('vanguard-powertech');
                });
                break;
            case 'mando':
            case 'commando':
                fetch('http://www.swtor.com/lb/data?page=1&class=comando-mercenary&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Commando')).filter((topThree, index) => index < 3);
                    embedDataset('comando-mercenary');
                });
                break;
            case 'merc':
            case 'mercenary':
                fetch('http://www.swtor.com/lb/data?page=1&class=comando-mercenary&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Mercenary')).filter((topThree, index) => index < 3);
                    embedDataset('comando-mercenary');
                });
                break;
            case 'slinger':
            case 'gunslinger':
                fetch('http://www.swtor.com/lb/data?page=1&class=gunslinger-sniper&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Gunslinger')).filter((topThree, index) => index < 3);
                    embedDataset('gunslinger-sniper');
                });
                break;
            case 'snip':
            case 'sniper':
                fetch('http://www.swtor.com/lb/data?page=1&class=gunslinger-sniper&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Sniper')).filter((topThree, index) => index < 3);
                    embedDataset('gunslinger-sniper');
                });
                break;
            case 'sco':
            case 'scoundrel':
                fetch('http://www.swtor.com/lb/data?page=1&class=scoundrel-operative&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Scoundrel')).filter((topThree, index) => index < 3);
                    embedDataset('scoundrel-operative');
                });
                break;
            case 'oper':
            case 'operative':
                fetch('http://www.swtor.com/lb/data?page=1&class=scoundrel-operative&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Operative')).filter((topThree, index) => index < 3);   
                    embedDataset('scoundrel-operative');
                });
                break;
            case 'sent':
            case 'sentinel':
                fetch('http://www.swtor.com/lb/data?page=1&class=sentinel-marauder&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Sentinel')).filter((topThree, index) => index < 3);
                    embedDataset('sentinel-marauder');
                });
                break;
            case 'mara':
            case 'marauder':
                fetch('http://www.swtor.com/lb/data?page=1&class=sentinel-marauder&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Marauder')).filter((topThree, index) => index < 3);
                    embedDataset('sentinel-marauder');
                });
                break;
            case 'guardian':
                fetch('http://www.swtor.com/lb/data?page=1&class=guardian-juggernaut&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Guardian')).filter((topThree, index) => index < 3);
                    embedDataset('guardian-juggernaut');
                });
                break;
            case 'jugg':
            case 'juggernaut':
                fetch('http://www.swtor.com/lb/data?page=1&class=guardian-juggernaut&column=pvp_ranked_solo&season=' + season +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = fonks.calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Juggernaut')).filter((topThree, index) => index < 3);
                    embedDataset('guardian-juggernaut');
                });
                break;
        }
        function embedDataset(className) {

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
            msg.reply(exampleEmbed);
        });
        }
        }
    }


