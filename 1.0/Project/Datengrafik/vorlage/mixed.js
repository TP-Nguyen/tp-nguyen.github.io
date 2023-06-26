topchart();
async function topchart() {

    const dataBahrain = await getBahrainData();
    const dataFacebook = await getFacebookData();
    const dataMobile = await getMobileData();
    console.log(dataMobile); //dataFacebook.zs
    var options = {
        series: [{
            name: 'mobile devices',
            type: 'column',
            data: dataMobile.xs
        }, {
            name: 'Barhrain',
            type: 'area',
            data: dataBahrain.ys
        }, {
            name: 'Facebook',
            type: 'line',
            data: dataFacebook.zs
        }],
        chart: {
            fontFamily: 'Source Sans Pro',
            type: 'line',
            stacked: false,
            foreColor: 'whitesmoke',
            height: '80%',
            toolbar: {
                // show: false,
                show: true,
                offsetX: -'70vw',
                offsetY: 30,
                tools: {
                    download: false, //'<img src="/static/icons/download.png" class="ico-download" width="20">'
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true | '<img class="fas fa-undo">',
                    // customIcons: []
                },
            },
        },
        colors: ['#4A00E0', '#6b16e1', '#8E2DE2'],
        stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '30%'
            }
        },
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            }
        },
        xaxis: {
            categories: dataBahrain.zs,
            tooltip: 'false',
        },
        yaxis: {
            // title: {
            //     text: 'Points',
            // },
            opposite: true,
        },
        grid: {
            show: false,
        },
        tooltip: {
            // shared: true,
            theme: 'dark',
        }
    };

    var chart = new ApexCharts(document.querySelector("#mixed"), options);
    chart.render();
}

async function getBahrainData() {
    const xs = [];
    const ys = [];
    const zs = [];

    // const fetch = require("node-fetch");
    const response = await fetch('./Datengrafik/data/API_IT.NET.USER.csv');
    // const response = await fetch('./Datengrafik/data/users-by-social-media-platform.csv');
    // const response = await fetch('http://127.0.0.1:5500/Project/Datengrafik/data/API_IT.NET.USER.csv');
    const ITNET_data = await response.text();

    const table = ITNET_data.split('\n'); //.slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        if (columns[34] == 2008) {
            xlabel = columns[34];
            zs.push(xlabel);
            xlabel = columns[35];
            zs.push(xlabel);
            xlabel = columns[36];
            zs.push(xlabel);
            xlabel = columns[37];
            zs.push(xlabel);
            xlabel = columns[38];
            zs.push(xlabel);
            xlabel = columns[39];
            zs.push(xlabel);
            xlabel = columns[40];
            zs.push(xlabel);
            xlabel = columns[41];
            zs.push(xlabel);
            xlabel = columns[42];
            zs.push(xlabel);
            xlabel = columns[43];
            zs.push(xlabel);
            xlabel = columns[44];
            zs.push(xlabel);
            xlabel = columns[45];
            zs.push(xlabel);
            xlabel = columns[46];
            zs.push(xlabel);
            xlabel = columns[47];
            zs.push(xlabel);
            xlabel = columns[48];
            zs.push(xlabel);
            xlabel = columns[49];
            zs.push(xlabel);
            xlabel = columns[50];
            zs.push(xlabel);
            xlabel = columns[51];
            zs.push(xlabel);
            xlabel = columns[52];
            zs.push(xlabel);
            xlabel = columns[53];
            zs.push(xlabel);
            xlabel = columns[54];
            zs.push(xlabel);
            xlabel = columns[55];
            zs.push(xlabel);
            xlabel = columns[56];
            zs.push(xlabel);
            xlabel = columns[57];
            zs.push(xlabel);
            xlabel = columns[58];
            zs.push(xlabel);
            xlabel = columns[59];
            zs.push(xlabel);
            xlabel = columns[60];
            zs.push(xlabel);
            xlabel = columns[61];
            zs.push(xlabel);
            xlabel = columns[62];
            zs.push(xlabel);
            xlabel = columns[63];
            zs.push(xlabel);
            // xlabel = columns[64].trim();
            // zs.push(xlabel);
        }
        const land = columns[0];
        xs.push(land);
        if (columns[0] == " Bahrain ") {
            var year;
            year = columns[34];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[35];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[36];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[37];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[38];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[39];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[40];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[41];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[42];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[43];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[44];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[45];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[46];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[47];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[48];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[49];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[50];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[51];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[52];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[53];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[54];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[55];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[56];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[57];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[58];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[59];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[60];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[61];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[62];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            year = columns[63];
            year = Math.round(year * 100) / 100;
            ys.push(year);
            // year = columns[64].trim();
            // year = Math.round(year * 100) / 100;
            // ys.push(year);
        };
    });
    return { xs, ys, zs };
}
async function getFacebookData() {

    const xs = []; //name
    const ys = []; //jahr
    const zs = []; //nutzer
    const response = await fetch('./Datengrafik/data/users-by-social-media-platform.csv');
    const socialmedia_data = await response.text();

    const table = socialmedia_data.split('\n').slice(1);
    // const ws = table.trim();
    table.forEach(row => {
        const columns = row.split(',');
        if (columns[0] == "Facebook") {
            const name = columns[0];
            xs.push(name);
            const year = columns[1];
            ys.push(year);
            const user = columns[2].trim();
            zs.push(user);
        }
    });
    while (xs.length < 12) {
        const name = "";
        xs.push(name);
        const user = 0;
        zs.push(user);
    }
    return { xs, ys, zs };
}
async function getMobileData() {
    const ws = [];
    const xs = [];
    const ys = [];
    const zs = [];

    const response = await fetch('./Datengrafik/data/daily-hours-spent-with-digital-media-per-adult-user.csv');
    const daily_data = await response.text();

    const table = daily_data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');

        const year = columns[0];
        ws.push(year);
        const mobile = columns[1];
        xs.push(mobile);
        const pc = columns[2];
        ys.push(pc);
        const other = columns[3].trim();
        zs.push(other);

    });
    return { ws, xs, ys, zs };
}