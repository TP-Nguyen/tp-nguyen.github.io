splinechart();
async function splinechart() {
    const dataInet2 = await getInet2Data();
    const dataInet = await getInetData();
    var options = {
        chart: {
            fontFamily: 'Libre Franklin, sans-serif',
            foreColor: 'whitesmoke',
            height: '80%',
            type: "area",
            toolbar: {
                // show: false,
                show: true,
                offsetX: -'90vw',
                offsetY: 55,
                tools: {
                    download: false, //'<img src="/static/icons/download.png" class="ico-download" width="20">'
                    selection: '<img src="Datengrafik/select.png" height="20" style="filter:invert(100%)">',
                    zoom: '<img src="Datengrafik/select.png" height="20"  style="filter:invert(100%)">',
                    zoomin: '<img src="Datengrafik/maximal.png" height="20"  style="filter:invert(100%)">',
                    zoomout: '<img src="Datengrafik/minimal.png" height="20"  style="filter:invert(100%)">',
                    pan: '<img src="Datengrafik/move.png" width="25"  style="filter:invert(100%)">',
                    reset: '<img src="Datengrafik/undo.png" height="20"  style="filter:invert(100%)">',
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
                // foreColor: ['#8E2DE2', '#4A00E0'],
                useSeriesColors: false
            },
        },
        colors: ['#8E2DE2', '#4A00E0'], //'#8E2DE2'
        series: [{
            name: selectSpline2,
            data: dataInet2.ys,
        }, {
            name: selectSpline,
            data: dataInet.ys,
        }],
        grid: {
            show: false,
        },
        tooltip: {
            theme: 'dark',
            y: {
                formatter: function(y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + "%";
                    }
                    return y;

                }
            }
        },
        yaxis: {
            show: true,
            opposite: true,
        },
        xaxis: {
            tooltip: 'false',
            categories: dataInet2.zs,
            // max: 5,
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

    splineChart = new ApexCharts(document.querySelector("#spline"), options);

    splineChart.render();
}
var splineChart;
var country = [];
var selectSpline = "";
var selectSpline2 = " Germany ";
var countryOption = "<option selected disabled>Choose a country</option>";

function selectNewCountry() {
    selectSpline = document.getElementById("selectSpline").value;
    selectSpline2 = document.getElementById("selectSpline2").value;
    updateSpline();

}
async function placeCountry() {
    const dataInet = await getInetData();
    country = dataInet.xs;
    for (i = 0; i < country.length; i++) {
        countryOption = countryOption + '<option value="' + country[i] + '">' + country[i] + '</option>';
    }
    document.getElementById('selectSpline').innerHTML = countryOption;
    document.getElementById('selectSpline2').innerHTML = countryOption;
}

async function updateSpline() {
    const dataInet2 = await getInet2Data();
    const dataInet = await getInetData();
    splineChart.updateOptions({
        series: [{
            name: selectSpline2,
            data: dataInet2.ys,
        }, {
            name: selectSpline,
            data: dataInet.ys,
        }],
    })
};

async function getInetData() {
    const xs = [];
    const ys = [];
    const zs = [];

    const response = await fetch('./Datengrafik/data/API_IT.NET.USER.csv');
    const ITNET_data = await response.text();

    const table = ITNET_data.split('\n').slice(1);
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
            // xlabel = columns[64].trim();
            // zs.push(xlabel);
        }
        const land = columns[0];
        xs.push(land);
        if (columns[0] == selectSpline) {
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
async function getInet2Data() {
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
            // xlabel = columns[64].trim();
            // zs.push(xlabel);
        }
        const land = columns[0];
        xs.push(land);
        if (columns[0] == selectSpline2) {
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