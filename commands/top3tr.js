const fetch = require('node-fetch');
const Discord = require('discord.js');
const utf8 = require('utf8');
const seasonCurrent = process.env.seasonCurrent;
const seasonThirteen=process.env.seasonThirteen;
const season=[seasonCurrent,seasonThirteen];
const searchUrl = 'https://www.swtor.com/lb/search/';
const getUrl = 'https://www.swtor.com/lb/get/';
const footerUrl = 'https://static-cdn.jtvnw.net/emoticons/v2/435279/default/dark/1.0';
module.exports = {

    name: '.top3tr',

    execute(msg, args) {
        console.log('top3tr command called: ',args)
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
        var saArrayDataOfObject;
        var ssArrayDataOfObject;
        var vpArrayDataOfObject;
        var cmArrayDataOfObject;
        var gsArrayDataOfObject;
        var soArrayDataOfObject;
        var smArrayDataOfObject;
        var gjArrayDataOfObject;

        args[0]=args[0].toLowerCase();

        switch (args[0]) {
            case 'all':
                fetch('http://www.swtor.com/lb/data?page=1&class=shadow-assassin&column=pvp_ranked_group&season=' + season[1] +'').then(response => response.json()).then(file => {
                    saArrayDataOfObject = Object.values(file.data);
                    topThreeSa = calcTopThree(saArrayDataOfObject);
                    topThreeSin = topThreeSa.filter((topThree => topThree.class_name === 'Assassin'));
                    topThreeSin = topThreeSin.filter((topThree, index) => index < 3);
                    topThreeShadow = topThreeSa.filter((topThree => topThree.class_name === 'Shadow'));
                    topThreeShadow = topThreeShadow.filter((topThree, index) => index < 3);
                    topThreeSa = topThreeSin.concat(topThreeShadow);
                    topThreeSa = calcTopThree(topThreeSa);
                   topThreeSa = summaryStringed(topThreeSa);
                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=sage-sorcerer&column=pvp_ranked_group&season=' +  season[1] +'')).then(response => response.json()).then(file => {
                    ssArrayDataOfObject = Object.values(file.data);
                    topThreeSs = calcTopThree(ssArrayDataOfObject);

                    topThreeSorc = topThreeSs.filter((topThree => topThree.class_name === 'Sorcerer'));
                    topThreeSorc = topThreeSorc.filter((topThree, index) => index < 3);
                    topThreeSage = topThreeSs.filter((topThree => topThree.class_name === 'Sage'));
                    topThreeSage = topThreeSage.filter((topThree, index) => index < 3);
                    topThreeSs = topThreeSorc.concat(topThreeSage);
                    topThreeSs = calcTopThree(topThreeSs);

                    topThreeSs = summaryStringed(topThreeSs);
                    


                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=vanguard-powertech&column=pvp_ranked_group&season=' +  season[1] +'')).then(response => response.json()).then(file => {
                    vpArrayDataOfObject = Object.values(file.data);
                    topThreeVp = calcTopThree(vpArrayDataOfObject);

                    topThreeVg = topThreeVp.filter((topThree => topThree.class_name === 'Vanguard'));
                    topThreeVg = topThreeVg.filter((topThree, index) => index < 3);
                    topThreePt = topThreeVp.filter((topThree => topThree.class_name === 'Powertech'));
                    topThreePt = topThreePt.filter((topThree, index) => index < 3);
                    topThreeVp = topThreeVg.concat(topThreePt);
                    topThreeVp = calcTopThree(topThreeVp);

                    topThreeVp = summaryStringed(topThreeVp);
                    

                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=comando-mercenary&column=pvp_ranked_group&season=' +  season[1] +'')).then(response => response.json()).then(file => {
                    cmArrayDataOfObject = Object.values(file.data);
                    topThreeCm = calcTopThree(cmArrayDataOfObject);

                    topThreeComm = topThreeCm.filter((topThree => topThree.class_name === 'Commando'));
                    topThreeComm = topThreeComm.filter((topThree, index) => index < 3);
                    topThreeMerc = topThreeCm.filter((topThree => topThree.class_name === 'Mercenary'));
                    topThreeMerc = topThreeMerc.filter((topThree, index) => index < 3);
                    topThreeCm = topThreeComm.concat(topThreeMerc);
                    topThreeCm = calcTopThree(topThreeCm);

                    topThreeCm = summaryStringed(topThreeCm);
                   

                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=gunslinger-sniper&column=pvp_ranked_group&season=' +  season[1] +'')).then(response => response.json()).then(file => {
                    gsArrayDataOfObject = Object.values(file.data);
                    topThreeGs = calcTopThree(gsArrayDataOfObject);

                    topThreeGslinger = topThreeGs.filter((topThree => topThree.class_name === 'Gunslinger'));
                    topThreeGslinger = topThreeGslinger.filter((topThree, index) => index < 3);
                    topThreeSnip = topThreeGs.filter((topThree => topThree.class_name === 'Sniper'));
                    topThreeSnip = topThreeSnip.filter((topThree, index) => index < 3);
                    topThreeGs = topThreeGslinger.concat(topThreeSnip);
                    topThreeGs = calcTopThree(topThreeGs);

                    topThreeGs = summaryStringed(topThreeGs);
                    
                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=scoundrel-operative&column=pvp_ranked_group&season=' +  season[1] +'')).then(response => response.json()).then(file => {
                    soArrayDataOfObject = Object.values(file.data);
                    topThreeSo = calcTopThree(soArrayDataOfObject);

                    topThreeSco = topThreeSo.filter((topThree => topThree.class_name === 'Scoundrel'));
                    topThreeSco = topThreeSco.filter((topThree, index) => index < 3);
                    topThreeOper = topThreeSo.filter((topThree => topThree.class_name === 'Operative'));
                    topThreeOper = topThreeOper.filter((topThree, index) => index < 3);
                    topThreeSo = topThreeSco.concat(topThreeOper);
                    topThreeSo = calcTopThree(topThreeSo);

                    topThreeSo = summaryStringed(topThreeSo);
                    
                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=sentinel-marauder&column=pvp_ranked_group&season=' +  season[1] +'')).then(response => response.json()).then(file => {
                    smArrayDataOfObject = Object.values(file.data);
                    topThreeSm = calcTopThree(smArrayDataOfObject);

                    topThreeSent = topThreeSm.filter((topThree => topThree.class_name === 'Sentinel'));
                    topThreeSent = topThreeSent.filter((topThree, index) => index < 3);
                    topThreeMara = topThreeSm.filter((topThree => topThree.class_name === 'Marauder'));
                    topThreeMara = topThreeMara.filter((topThree, index) => index < 3);
                    topThreeSm = topThreeSent.concat(topThreeMara);
                    topThreeSm = calcTopThree(topThreeSm);

                    topThreeSm = summaryStringed(topThreeSm);
                    
                }).then(response => fetch('http://www.swtor.com/lb/data?page=1&class=guardian-juggernaut&column=pvp_ranked_group&season=' +  season[1] +'')).then(response => response.json()).then(file => {
                    gjArrayDataOfObject = Object.values(file.data);
                    topThreeGj = calcTopThree(gjArrayDataOfObject);

                    topThreeGuardian = topThreeGj.filter((topThree => topThree.class_name === 'Guardian'));
                    topThreeGuardian = topThreeGuardian.filter((topThree, index) => index < 3);
                    topThreeJugg = topThreeGj.filter((topThree => topThree.class_name === 'Juggernaut'));
                    topThreeJugg = topThreeJugg.filter((topThree, index) => index < 3);
                    topThreeGj = topThreeGuardian.concat(topThreeJugg);
                    topThreeGj = calcTopThree(topThreeGj);
                    topThreeGj = summaryStringed(topThreeGj);
                   embedSummary();
                });
                             
                break;

            case 'shadow':
                fetch('http://www.swtor.com/lb/data?page=1&class=shadow-assassin&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Shadow'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('shadow-assassin');

                });
                break;
            case 'sin':
            case 'assassin':
                fetch('http://www.swtor.com/lb/data?page=1&class=shadow-assassin&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Assassin'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    
                    embedDataset('shadow-assassin');

                });
                break;
            case 'sage':
                fetch('http://www.swtor.com/lb/data?page=1&class=sage-sorcerer&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Sage'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('sage-sorcerer');
                });
                break;
            case 'sorc':
            case 'sorcerer':
                fetch('http://www.swtor.com/lb/data?page=1&class=sage-sorcerer&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Sorcerer'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('sage-sorcerer');
                });
                break;
            case 'vg':
            case 'vanguard':
                fetch('http://www.swtor.com/lb/data?page=1&class=vanguard-powertech&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Vanguard'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('vanguard-powertech');
                });
                break;
            case 'pt':
            case 'powertech':
                fetch('http://www.swtor.com/lb/data?page=1&class=vanguard-powertech&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Powertech'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('vanguard-powertech');
                });
                break;
            case 'mando':
            case 'commando':
                fetch('http://www.swtor.com/lb/data?page=1&class=comando-mercenary&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Commando'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('comando-mercenary');
                });
                break;
            case 'merc':
            case 'mercenary':
                fetch('http://www.swtor.com/lb/data?page=1&class=comando-mercenary&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Mercenary'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('comando-mercenary');
                });
                break;
            case 'slinger':
            case 'gunslinger':
                fetch('http://www.swtor.com/lb/data?page=1&class=gunslinger-sniper&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Gunslinger'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('gunslinger-sniper');
                });
                break;
            case 'snip':
            case 'sniper':
                fetch('http://www.swtor.com/lb/data?page=1&class=gunslinger-sniper&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Sniper'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('gunslinger-sniper');
                });
                break;
            case 'sco':
            case 'scoundrel':
                fetch('http://www.swtor.com/lb/data?page=1&class=scoundrel-operative&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Scoundrel'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('scoundrel-operative');
                });
                break;
            case 'oper':
            case 'operative':
                fetch('http://www.swtor.com/lb/data?page=1&class=scoundrel-operative&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Operative'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('scoundrel-operative');
                });
                break;
            case 'sent':
            case 'sentinel':
                fetch('http://www.swtor.com/lb/data?page=1&class=sentinel-marauder&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Sentinel'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('sentinel-marauder');
                });
                break;
            case 'mara':
            case 'marauder':
                fetch('http://www.swtor.com/lb/data?page=1&class=sentinel-marauder&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Marauder'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('sentinel-marauder');
                });
                break;
            case 'guardian':
                fetch('http://www.swtor.com/lb/data?page=1&class=guardian-juggernaut&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Guardian'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('guardian-juggernaut');
                });
                break;
            case 'jugg':
            case 'juggernaut':
                fetch('http://www.swtor.com/lb/data?page=1&class=guardian-juggernaut&column=pvp_ranked_group&season=' +  season[1] +'').then(response => response.json()).then(file => {
                    newArrayDataOfOjbect = Object.values(file.data);
                    topThree = calcTopThree(newArrayDataOfOjbect);
                    topThree = topThree.filter((topThree => topThree.class_name === 'Juggernaut'));
                    topThree = topThree.filter((topThree, index) => index < 3);
                    embedDataset('guardian-juggernaut');
                });
                break;

        }

        function calcTopThree(dataArray) {
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



        }
        function summaryStringed(summary1) {
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

        }



        function embedDataset(className) {
            const exampleEmbed = new Discord.MessageEmbed()
             //   .setImage('https://wallpaperaccess.com/full/3004797.jpg')
                .setColor('#0099ff')
                // .setImage('https://www.vhv.rs/dpng/d/502-5023215_sith-logo-png-www-star-wars-old-republic.png')
                .setTimestamp()
                .setFooter('Furkai#0331 for feedbacks,suggestions and bugs', 'https://static-cdn.jtvnw.net/emoticons/v2/435279/default/dark/1.0');
            if (topThree[0] === undefined) {
                exampleEmbed.setThumbnail('https://i.pinimg.com/originals/28/64/27/2864273c5bd1de316fc27ff2b39eecfa.png')
                exampleEmbed.setDescription("no one has 160wins yet")
            }
            
            else if (topThree[0].class_name === 'Assassin' || topThree[0].class_name === 'Juggernaut' || topThree[0].class_name === 'Marauder' || topThree[0].class_name === 'Sorcerer' || topThree[0].class_name === 'Powertech' || topThree[0].class_name === 'Mercenary' || topThree[0].class_name === 'Sniper' || topThree[0].class_name === 'Operative')
                exampleEmbed.setThumbnail('http://pm1.narvii.com/6699/a004bf79c862b6c01070ce8a44551c9d9c3d908f_00.jpg')
            else if (topThree[0].class_name === 'Shadow' || topThree[0].class_name === 'Guardian' || topThree[0].class_name === 'Sentinel' || topThree[0].class_name === 'Sage' || topThree[0].class_name === 'Vanguard' || topThree[0].class_name === 'Commando' || topThree[0].class_name === 'Gunslinger' || topThree[0].class_name === 'Scoundrel')
                exampleEmbed.setThumbnail('https://images.alphacoders.com/300/thumb-1920-300681.jpg')




            for (i = 0; topThree.length > i; i++) {
                exampleEmbed.addField('Name', '[' + topThree[i].char_name + '](http://www.swtor.com/leaderboards/character/' + topThree[i].chr_player_character_id + ')', true)
                exampleEmbed.addField('Rating',topThree[i].rating, true)
                exampleEmbed.addField('Server', topThree[i].shard_name, true)
                switch (topThree[i].class_name) {
                    case 'Assassin':
                        exampleEmbed.setImage('https://images.hdqwalls.com/wallpapers/darth-maul-star-wars-fanart-8a.jpg')
                        break;
                    case 'Shadow':
                        exampleEmbed.setImage('https://static.wikia.nocookie.net/swtor/images/2/2f/Exar_Kun.png/revision/latest?cb=20130306021031')
                        break;
                    case 'Marauder':
                        exampleEmbed.setImage('https://i.redd.it/9rz3yr61it741.png')
                        break;
                    case 'Sentinel':
                        exampleEmbed.setImage('https://media.comicbook.com/2020/12/star-wars-ahsoka-tano-video-game-wallpaper-art-by-wojtekfus-1247356.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart')
                        break;
                    case 'Sorcerer':
                        exampleEmbed.setImage('https://images2.alphacoders.com/567/thumb-1920-567986.jpg')
                        break;
                    case 'Sage':
                        exampleEmbed.setImage('https://images7.alphacoders.com/320/thumb-1920-320074.jpg')
                        break;
                    case 'Powertech':
                        exampleEmbed.setImage('https://images4.alphacoders.com/281/thumb-1920-281454.jpg')
                        break;
                    case 'Vanguard':
                        exampleEmbed.setImage('https://images4.alphacoders.com/281/thumb-1920-281456.jpg')
                        break;
                    case 'Commando':
                        exampleEmbed.setImage('https://images4.alphacoders.com/670/thumb-1920-670326.jpg')
                        break;
                    case 'Mercenary':
                        exampleEmbed.setImage('https://cdn.discordapp.com/attachments/602687908448829453/833473379041411122/Malastare_Jack_Final.jpg')
                        break;
                    case 'Gunslinger':
                        exampleEmbed.setImage('https://pbs.twimg.com/media/CJkW-83WoAIKsfH.jpg')
                        break;
                    case 'Sniper':
                        exampleEmbed.setImage('https://images5.alphacoders.com/567/thumb-1920-567984.jpg')
                        break;
                    case 'Scoundrel':
                        exampleEmbed.setImage('https://images3.alphacoders.com/281/thumb-1920-281455.jpg')
                        break;
                    case 'Operative':
                        exampleEmbed.setImage('https://images7.alphacoders.com/320/thumb-1920-320073.jpg')
                        break;
                    case 'Guardian':
                        exampleEmbed.setImage('https://images5.alphacoders.com/567/thumb-1920-567985.jpg')
                        break;
                    case 'Juggernaut':
                        exampleEmbed.setImage('https://images.alphacoders.com/567/thumb-1920-567983.jpg')
                        break;
                }
            }


            if (topThree[0] !== undefined) {
                exampleEmbed.setTitle('TEAM RANKED' +' ' + '          TOP3 ' + topThree[0].class_name)
                exampleEmbed.setURL('http://www.swtor.com/leaderboards/class/' + className)

            }
            else  {
                exampleEmbed.setTitle('TEAM RANKED' +' ' + '          TOP3 ' + args[0])
                exampleEmbed.setURL('http://www.swtor.com/leaderboards/class/' + className)
            }
            msg.reply(exampleEmbed);
        }


        function embedSummary() {
            const summEmbed = new Discord.MessageEmbed()
                //  .setImage('https://wallpaperaccess.com/full/3004797.jpg')
                .setColor('#0099ff')
                // .setImage('https://www.vhv.rs/dpng/d/502-5023215_sith-logo-png-www-star-wars-old-republic.png')
                .setTimestamp()
                .setFooter('Furkai#0331 for feedbacks,suggestions and bugs', 'https://static-cdn.jtvnw.net/emoticons/v2/435279/default/dark/1.0')
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

            msg.reply(summEmbed);
        }

        }
    }


