// linechart();
// async function linechart() {
//     const data = await getData();
var options = {

    chart: {
        height: 550,
        type: "line",
        foreColor: 'whitesmoke',
        // foreColor: '#6D6D6D',

        toolbar: {
            // show: false,
            show: true,
            offsetX: -'90vw',
            offsetY: -30,
            tools: {
                download: false, //'<img src="/static/icons/download.png" class="ico-download" width="20">'
                selection: false,
                zoom: true,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: true | '<img class="fas fa-undo">',
                // customIcons: []
            },
        },
    },
    stroke: {
        show: true,
        curve: 'smooth',
    },
    series: [{
        name: "%",
        data: [2, 23, 19, 45, 38, 52, 45]
    }],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            colorStops: [{
                    offset: 0,
                    color: "#8E2DE2",
                    opacity: 1
                },
                {
                    offset: 100,
                    color: "#4A00E0",
                    opacity: 1
                }
            ]
        }
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
        categories: [
            "1990",
            // "1991",
            // "1992",
            // "1993",
            // "1994",
            "1995",
            // "1996",
            // "1997",
            // "1998",
            // "1999",
            "2000",
            // "2001",
            // "2002",
            // "2003",
            // "2004",
            "2005",
            // "2006",
            // "2007",
            // "2008",
            // "2009",
            "2010",
            // "2011",
            // "2012",
            // "2013",
            // "2014",
            "2015",
            // "2016",
            // "2017",
            // "2018",
            // "2019",
            "2020"
        ],
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

var chart = new ApexCharts(document.querySelector("#linechart"), options);
chart.render();
// }
// async function getData() {
//     const xs = [];
//     const ys = [];
//     const response = await fetch('./Datengrafik/data/API_IT.NET.USER.csv');
//     const ITNET_data = await response.text();

//     const table = ITNET_data.split('\n');
//     table.forEach(row => {
//         const columns = row.split(',');
//         const land = columns[0];
//         xs.push(land);
//         const info = columns[1];
//         ys.push(info);
//     });
//     return { xs, ys };
// }

// var i = 5;
// while (i > 264) {
//     const columns = row.split(',');
//     const prozent = columns[i];
//     ys.push(prozent);
//     i++;
// }
// });
// console.log(xs[0]);
// console.log(xs[1]);
// console.log(ys[1]);
// return { xs, ys };