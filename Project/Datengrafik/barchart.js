barchart();
async function barchart() {
    const data = await getdailyData();
    var options = {
        chart: {
            foreColor: 'whitesmoke',
            height: '80%',
            type: "bar",
            stacked: true,
            toolbar: {
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
            text: 'Tägliche Geräte nutzung'
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            showForSingleSeries: true,
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            fontSize: '18px',
            offsetX: -23,
            offsetY: 0,
            labels: {
                colors: '#fff',
                // foreColor: ['#8E2DE2', '#4A00E0'],
                useSeriesColors: false
            },
            // markers: 
            // customHTML: function() {
            //   return '<span class="custom-marker"><i class="fas fa-chart-pie"></i></span>'
            // }
        },
        colors: ['#8E2DE2', '#4A00E0'], //'#8E2DE2'
        series: [{
            name: "Mobile",
            data: data.xs,
        }, {
            name: "PC/Laptop",
            data: data.ys
        }, {
            name: "Andere",
            data: data.zs,
        }],
        grid: {
            show: false,
        },
        tooltip: {
            theme: 'dark',
        },
        yaxis: {
            show: true,
            opposite: true,
        },
        xaxis: {
            tooltip: 'false',
            categories: data.ws,
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


    var bar = new ApexCharts(document.querySelector("#bar"), options);

    bar.render();
}
async function getdailyData() {
    const ws = [];
    const xs = [];
    const ys = [];
    const zs = [];

    // const fetch = require("node-fetch");
    const response = await fetch('./Datengrafik/data/daily-hours-spent-with-digital-media-per-adult-user.csv');
    // const response = await fetch('./Datengrafik/data/users-by-social-media-platform.csv');
    // const response = await fetch('http://127.0.0.1:5500/Project/Datengrafik/data/API_IT.NET.USER.csv');
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