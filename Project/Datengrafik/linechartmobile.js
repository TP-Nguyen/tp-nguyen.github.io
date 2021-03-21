linechartmobile();
async function linechartmobile() {
    const data = await getMobileData();
    var options = {

        chart: {
            height: '80%',
            type: "area",
            foreColor: 'whitesmoke',
            toolbar: {
                // show: false,
                show: true,
                offsetX: -'90vw',
                offsetY: -30,
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
        title: {
            text: 'Mobile Nutzer'
        },
        stroke: {
            show: true,
            curve: 'smooth',
        },
        series: [{
            name: "Mobile Internetnutzer pro 100 ",
            data: data.ys,
        }],
        colors: ['#8E2DE2'],
        fill: {
            type: "gradient",
            // gradient: {
            //     shadeIntensity: 1,
            //     opacityFrom: 0.7,
            //     opacityTo: 0.9,
            //     colorStops: [{
            //             offset: 0,
            //             color: "#8E2DE2",
            //             opacity: 1
            //         },
            //         {
            //             offset: 100,
            //             color: "#4A00E0",
            //             opacity: 1
            //         }
            //     ]
            // }
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            // showForSingleSeries: true,
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            fontSize: '18px',
            offsetX: -23,
            offsetY: 0,
            labels: {
                colors: '#fff',
                useSeriesColors: false
            },
        },
        yaxis: {
            // show: false,
            show: true,
            opposite: true,
        },
        tooltip: {
            theme: 'dark',
        },
        xaxis: {
            tooltip: 'false',
            label: {
                colors: "#fff"
            },
            categories: data.zs,
            axisBorder: { //breite
                show: true,
                color: '#707070',
                height: 3,
                width: '100%',
                offsetX: 0,
                offsetY: 0
            },
            axisTicks: {
                show: false,
            },
        }
    };

    var chart = new ApexCharts(document.querySelector("#linechartmobile"), options);
    chart.render();
}
const selectMobile = " Germany ";
async function getMobileData() {
    const xs = [];
    const ys = [];
    const zs = [];

    // const fetch = require("node-fetch");
    const response = await fetch('./Datengrafik/data/API_IT.CEL.SETS.csv');
    // const response = await fetch('./Datengrafik/data/users-by-social-media-platform.csv');
    // const response = await fetch('http://127.0.0.1:5500/Project/Datengrafik/data/API_IT.NET.USER.csv');
    const ITNET_data = await response.text();

    const table = ITNET_data.split('\n'); //.slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        if (columns[34] == 1990) {
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
            xlabel = columns[64].trim();
            zs.push(xlabel);
        }
        const land = columns[0];
        xs.push(land);
        if (columns[0] == selectMobile) {
            var year;
            year = columns[34];
            ys.push(year);
            year = columns[35];
            ys.push(year);
            year = columns[36];
            ys.push(year);
            year = columns[37];
            ys.push(year);
            year = columns[38];
            ys.push(year);
            year = columns[39];
            ys.push(year);
            year = columns[40];
            ys.push(year);
            year = columns[41];
            ys.push(year);
            year = columns[42];
            ys.push(year);
            year = columns[43];
            ys.push(year);
            year = columns[44];
            ys.push(year);
            year = columns[45];
            ys.push(year);
            year = columns[46];
            ys.push(year);
            year = columns[47];
            ys.push(year);
            year = columns[48];
            ys.push(year);
            year = columns[49];
            ys.push(year);
            year = columns[50];
            ys.push(year);
            year = columns[51];
            ys.push(year);
            year = columns[52];
            ys.push(year);
            year = columns[53];
            ys.push(year);
            year = columns[54];
            ys.push(year);
            year = columns[55];
            ys.push(year);
            year = columns[56];
            ys.push(year);
            year = columns[57];
            ys.push(year);
            year = columns[58];
            ys.push(year);
            year = columns[59];
            ys.push(year);
            year = columns[60];
            ys.push(year);
            year = columns[61];
            ys.push(year);
            year = columns[62];
            ys.push(year);
            year = columns[63];
            ys.push(year);
            year = columns[64].trim();
            ys.push(year);
        };
    });
    return { xs, ys, zs };
}