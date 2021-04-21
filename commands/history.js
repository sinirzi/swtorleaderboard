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
        fs.readFile('theyseemerollin.json', (err, data) => {
            if (err) throw err;
            var soloJson = JSON.parse(data);
            newArray = soloJson.solo_history;

         /*   soloJson.solo_history.forEach(el => {
                if (!map[JSON.stringify(el)]) {
                    map[JSON.stringify(el)] = true;
                    newArray.push(el);

                }
            });*/
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
        });  
    }
}