const fetch = require('node-fetch');
const Discord = require('discord.js');
const utf8 = require('utf8');
const fs = require('fs');
const Chart = require('chart.js');
const QuickChart = require('quickchart-js');

module.exports = {
    name: '.history',
    execute(msg, args) {
        var pvp_rank = [];
        let pvp_date = [];
        var pvpHistory;
        const map = {};
        var newArray = [];
        var newArrayLen;
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
            var soloJson = JSON.parse(data);
            newArray = soloJson.solo_history;
            for (i = 0; i < newArray.length - 1; i++) {

                if (newArray[i].DATE_CHANGED === newArray[i + 1].DATE_CHANGED) {
                    newArray.splice(i, 1);
                    i--;
                }
            }
            console.log('sildikten:', newArray);
            var x = 2;
            pvpHistory = newArray[newArray.length - 1].PVP_RANKED_RANK - newArray[(newArray.length-1)-x].PVP_RANKED_RANK;
            if (pvpHistory < 0) {
                string = soloJson.char_name + ' LOST ' + Math.abs(pvpHistory) + ' rating last ' + x + ' days'
                console.log(string)
            }
            if (pvpHistory > 0) {
                string = soloJson.char_name + ' GAINED ' + pvpHistory + ' rating last ' + x + ' days'
                console.log('string:',string)
            }
            if (pvpHistory === 0) {
                string = soloJson.char_name + ' rating didnt changed last ' + x + ' days';
                console.log(string)
            }

            const myChart = new QuickChart();
            myChart
                .setConfig({
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    suggestedMin: 1200,
                                    stepSize: 1,
                                }
                            }]
                        }
                    },
                    type: 'line',
                    data: {
                        labels: [newArray[0].DATE_CHANGED, newArray[1].DATE_CHANGED, newArray[2].DATE_CHANGED, newArray[3].DATE_CHANGED,
                            newArray[4].DATE_CHANGED, newArray[5].DATE_CHANGED, newArray[6].DATE_CHANGED, newArray[7].DATE_CHANGED,
                            newArray[8].DATE_CHANGED, newArray[9].DATE_CHANGED, newArray[10].DATE_CHANGED, newArray[11].DATE_CHANGED,
                            newArray[12].DATE_CHANGED, newArray[13].DATE_CHANGED, newArray[14].DATE_CHANGED, newArray[15].DATE_CHANGED, newArray[16].DATE_CHANGED],
                        datasets: [{
                            label: soloJson.char_name,
                            data: [newArray[0].PVP_RANKED_RANK, newArray[0].PVP_RANKED_RANK, newArray[2].PVP_RANKED_RANK, newArray[3].PVP_RANKED_RANK,
                                newArray[4].PVP_RANKED_RANK, newArray[5].PVP_RANKED_RANK, newArray[6].PVP_RANKED_RANK, newArray[7].PVP_RANKED_RANK,
                                newArray[8].PVP_RANKED_RANK, newArray[9].PVP_RANKED_RANK, newArray[10].PVP_RANKED_RANK, newArray[11].PVP_RANKED_RANK,
                                newArray[12].PVP_RANKED_RANK, newArray[13].PVP_RANKED_RANK, newArray[14].PVP_RANKED_RANK, newArray[15].PVP_RANKED_RANK, newArray[16].PVP_RANKED_RANK],
                            lineTension: 0.4
                        }]
                    },
                })
                .setWidth(800)
                .setHeight(400)
                .setBackgroundColor('transparent');
                

            const chartEmbed = {
                title: 'Latest Chart',
                description: 'Here\'s a chart that I generated',
                image: {
                    url: myChart.getUrl(),
                },
            };

            msg.channel.send({ embed: chartEmbed });
            console.log(myChart.getUrl());

        }); 
      /*  fs.readFile('history.json', (err, data) => {
            if (err) throw err;
            var soloJson = JSON.parse(data);
            newArray = soloJson.solo_history;
            for (i = 0; i < newArray.length - 1; i++) {

                if (newArray[i].DATE_CHANGED === newArray[i + 1].DATE_CHANGED) {
                    newArray.splice(i, 1);
                    i--;
                }
            }
            console.log('sildikten:', newArray);
            var x = 2;
            pvpHistory = newArray[newArray.length - 1].PVP_RANKED_RANK - newArray[(newArray.length-1)-x].PVP_RANKED_RANK;
            if (pvpHistory < 0) {
                string = soloJson.char_name + ' LOST ' + Math.abs(pvpHistory) + ' rating last ' + x + ' days'
                console.log(string)
            }
            if (pvpHistory > 0) {
                string = soloJson.char_name + ' GAINED ' + pvpHistory + ' rating last ' + x + ' days'
                console.log('string:',string)
            }
            if (pvpHistory === 0) {
                string = soloJson.char_name + ' rating didnt changed last ' + x + ' days';
                console.log(string)
            }

            const myChart = new QuickChart();
            myChart
                .setConfig({
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    suggestedMin: 1200,
                                    stepSize: 1,
                                }
                            }]
                        }
                    },
                    type: 'line',
                    data: {
                        labels: [newArray[0].DATE_CHANGED, newArray[1].DATE_CHANGED, newArray[2].DATE_CHANGED, newArray[3].DATE_CHANGED,
                            newArray[4].DATE_CHANGED, newArray[5].DATE_CHANGED, newArray[6].DATE_CHANGED, newArray[7].DATE_CHANGED,
                            newArray[8].DATE_CHANGED, newArray[9].DATE_CHANGED, newArray[10].DATE_CHANGED, newArray[11].DATE_CHANGED,
                            newArray[12].DATE_CHANGED, newArray[13].DATE_CHANGED, newArray[14].DATE_CHANGED, newArray[15].DATE_CHANGED, newArray[16].DATE_CHANGED],
                        datasets: [{
                            label: soloJson.char_name,
                            data: [newArray[0].PVP_RANKED_RANK, newArray[0].PVP_RANKED_RANK, newArray[2].PVP_RANKED_RANK, newArray[3].PVP_RANKED_RANK,
                                newArray[4].PVP_RANKED_RANK, newArray[5].PVP_RANKED_RANK, newArray[6].PVP_RANKED_RANK, newArray[7].PVP_RANKED_RANK,
                                newArray[8].PVP_RANKED_RANK, newArray[9].PVP_RANKED_RANK, newArray[10].PVP_RANKED_RANK, newArray[11].PVP_RANKED_RANK,
                                newArray[12].PVP_RANKED_RANK, newArray[13].PVP_RANKED_RANK, newArray[14].PVP_RANKED_RANK, newArray[15].PVP_RANKED_RANK, newArray[16].PVP_RANKED_RANK],
                            lineTension: 0.4
                        }]
                    },
                })
                .setWidth(800)
                .setHeight(400)
                .setBackgroundColor('transparent');
                

            const chartEmbed = {
                title: 'Latest Chart',
                description: 'Here\'s a chart that I generated',
                image: {
                    url: myChart.getUrl(),
                },
            };

            msg.channel.send({ embed: chartEmbed });
            // Print the chart URL
            console.log(myChart.getUrl());
        });  */
    }
}