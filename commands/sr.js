const fetch = require('node-fetch');
const Discord = require('discord.js');
const utf8 = require('utf8');

module.exports = {
    name: '.sr',
    description: 'Solo Ranked Rating !',
    execute(msg, args) {
        var argsNamed;
        var i;
        var j;
        var file;
        var ranked;
        let searchFile;
        let encodedArgs;
        let utfEncodedArgs;
        var newArrayDataOfOjbect
        switch (args[(args.length) - 1]) {
            case 'DM':
            case 'dm':
                args[(args.length) - 1] = 'Darth';
                args.push('Malgus');
                break;
            case 'SF':
            case 'sf':
                args[(args.length) - 1] = 'Star';
                args.push('Forge');
                break;
            case 'SS':
            case 'ss':
                args[(args.length) - 1] = 'Satele';
                args.push('Shan');
                break;
            case 'TL':
            case 'tl':
                args[(args.length) - 1] = 'The';
                args.push('Leviathan');
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
        
        fetch('https://www.swtor.com/lb/search/' + encodedArgs).then(response => response.json()).then(data => {
            file = data;
            newArrayDataOfOjbect = Object.values(file);
            searchFile = newArrayDataOfOjbect.filter(newArrayDataOfOjbect => newArrayDataOfOjbect.shard_name === args.slice(j, j + 2).join(" ") && newArrayDataOfOjbect.char_name === args[0]);

            if (searchFile.length > 1)
                i = 1;
            else if (searchFile.length === 1)
                i = 0;
            if (searchFile[i] === undefined) {
                embedError();
            }
        }).then(response => fetch('https://www.swtor.com/lb/get/' + searchFile[i].character_id + '?season=13')).then(response => response.json()).then(data => {
            ranked = data;
            embedDataset();
        });
        function embedError() {
            msg.reply('```who?```')
        }
        function embedDataset() {
            var x;
            const exampleEmbed = new Discord.MessageEmbed()
               // .setImage('https://wallpaperaccess.com/full/3004797.jpg')
                .setColor('#0099ff')
                .setTitle('SOLO RANKED')
                .setURL('http://www.swtor.com/leaderboards/')

                .addFields(
                    { name: 'Rank', value: ranked.solo_rank, inline: true },
                    { name: 'Rating', value: ranked.solo_rating, inline: true },
                    { name: 'Server', value: ranked.shard_name, inline: true },
                    { name: 'MVP', value: ranked.solo_mvp, inline: true },
                    { name: 'Wins', value: ranked.solo_wins, inline: true },
                    { name: 'Class', value: ranked.class_name, inline: true },
                )
                // .setImage('https://www.vhv.rs/dpng/d/502-5023215_sith-logo-png-www-star-wars-old-republic.png')
                .setTimestamp()
                .setFooter('Furkai#0331 for feedbacks,suggestions and bugs', 'https://static-cdn.jtvnw.net/emoticons/v2/435279/default/dark/1.0');

            x = getRandomInt();

            switch (x) {
                case 0:
                    exampleEmbed.setImage('https://images3.alphacoders.com/566/thumb-1920-566593.jpg')
                    break;
                case 1:
                    exampleEmbed.setImage('https://images6.alphacoders.com/320/thumb-1920-320057.jpg')
                    break;
                case 2:
                    exampleEmbed.setImage('https://images6.alphacoders.com/374/thumb-1920-374804.jpg')
                    break;
                case 3:
                    exampleEmbed.setImage('https://images5.alphacoders.com/320/thumb-1920-320049.jpg')
                    break;
                case 4:
                    exampleEmbed.setImage('https://images6.alphacoders.com/397/thumb-1920-397323.jpg')
                    break;
                case 5:
                    exampleEmbed.setImage('https://images3.alphacoders.com/170/thumb-1920-170425.jpg')
                    break;
                case 6:
                    exampleEmbed.setImage('https://images3.alphacoders.com/262/thumb-1920-262845.jpg')
                    break;
                case 7:
                    exampleEmbed.setImage('https://images3.alphacoders.com/218/thumb-1920-218979.jpg')
                    break;
                case 8:
                    exampleEmbed.setImage('https://images7.alphacoders.com/381/thumb-1920-381914.jpg')
                    break;
                case 9:
                    exampleEmbed.setImage('https://images2.alphacoders.com/573/thumb-1920-573559.jpg')
                    break;
                case 10:
                    exampleEmbed.setImage('https://images7.alphacoders.com/320/thumb-1920-320053.jpg')
                    break;
                case 11:
                    exampleEmbed.setImage('https://images5.alphacoders.com/320/thumb-1920-320052.jpg')
                    break;
                case 12:
                    exampleEmbed.setImage('https://images7.alphacoders.com/567/thumb-1920-567955.jpg')
                    break;
                case 13:
                    exampleEmbed.setImage('https://images4.alphacoders.com/107/thumb-1920-107424.jpg')
                    break;
                case 14:
                    exampleEmbed.setImage('https://images2.alphacoders.com/218/thumb-1920-218980.jpg')
                    break;
                case 15:
                    exampleEmbed.setImage('https://images8.alphacoders.com/566/thumb-1920-566588.jpg')
                    break;
                case 16:
                    exampleEmbed.setImage('https://images3.alphacoders.com/910/thumb-1920-91005.jpg')
                    break;
                case 17:
                    exampleEmbed.setImage('https://images3.alphacoders.com/905/thumb-1920-90505.jpg')
                    break;
                case 18:
                    exampleEmbed.setImage('https://images.alphacoders.com/612/thumb-1920-612939.jpg')
                    break;
                case 19:
                    exampleEmbed.setImage('https://images3.alphacoders.com/708/thumb-1920-70887.jpg')
                    break;
                case 20:
                    exampleEmbed.setImage('https://images7.alphacoders.com/371/thumb-1920-371842.jpg')
                    break;
                default:
                    exampleEmbed.setImage('https://wallpaperaccess.com/full/3004797.jpg')
                    break;
            };

            switch (ranked.class_name) {
                case 'Assassin':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/a277e906ee81ea6bce7ba8e84b51eb34.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Shadow':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/56da4f7b2eddd9126fb1a9f6e536c624.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Juggernaut':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/f5955d92bff72a14e8c4e67309ca6cb3.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Guardian':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/3658a4a519ef6b10befe0bf5896c3b23.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Marauder':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/b57d2e70c7dd6f59a5bfd7234d5c6d7f.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Sentinel':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/32254aa5d82c59a6dc6328b0539674a6.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Sorcerer':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/168cd0c4d39fd8345567695cb38aac2a.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Sage':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/03168256f6b3d9fb8dc7ad2c79002ba4.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Powertech':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/4fb8dcab028c2ca7e6bece06e1378cd5.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Vanguard':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/dd8028adc4114a80042bcccd50440811.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Mercenary':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/4d029d70970e8ca4695a37f0a0d76c71.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Commando':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/6b74e5df47ec68d2af0c66b5aea0f081.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Sniper':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/f88a62b65d5cd7e6e219a77ec1a5b343.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Gunslinger':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/05e071d37b7251abffe2eee0bc3b0886.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Operative':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/c1b8f716c6a4233eedee7e10dab0ef29.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                case 'Scoundrel':
                    exampleEmbed.setAuthor(ranked.char_name, 'https://i.gyazo.com/5b5cfb662529805dd89ef7ddf50378cc.png', 'http://www.swtor.com/leaderboards/character/' + searchFile[0].character_id)
                    break;
                default:
                    break;
            }
            if (ranked.class_name === 'Assassin' || ranked.class_name === 'Juggernaut' || ranked.class_name === 'Marauder' || ranked.class_name === 'Sorcerer' || ranked.class_name === 'Powertech' || ranked.class_name === 'Mercenary' || ranked.class_name === 'Sniper' || ranked.class_name === 'Operative' )
                exampleEmbed.setThumbnail('http://pm1.narvii.com/6699/a004bf79c862b6c01070ce8a44551c9d9c3d908f_00.jpg')
            else if (ranked.class_name === 'Shadow' || ranked.class_name === 'Guardian' || ranked.class_name === 'Sentinel' || ranked.class_name === 'Sage' || ranked.class_name === 'Vanguard' || ranked.class_name === 'Commando' || ranked.class_name === 'Gunslinger' || ranked.class_name === 'Scoundrel')
                exampleEmbed.setThumbnail('https://images.alphacoders.com/300/thumb-1920-300681.jpg')
            msg.reply(exampleEmbed);
        }

        function getRandomInt() {
            return Math.floor(Math.random() * Math.floor(20));
        }
        
    },
};
