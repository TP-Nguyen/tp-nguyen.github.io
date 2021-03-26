barchart();
async function barchart() {
    const data = await getdailyData();
    var options = {
        chart: {
            fontFamily: 'Libre Franklin, sans-serif',
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
            offsetY: 30,
            labels: {
                colors: '#fff',
                useSeriesColors: false
            },

        },
        colors: ['#4A00E0', '#6b16e1', '#8E2DE2'],
        series: [{
            name: "Mobile",
            data: data.xs,
        }, {
            name: "PC/Laptop",
            data: data.ys
        }, {
            name: "other Devices",
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