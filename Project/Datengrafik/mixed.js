var options = {
    series: [{
        name: 'TEAM A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
        name: 'TEAM B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
        name: 'TEAM C',
        type: 'line',
        data: [30, 55, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    chart: {
        type: 'line',
        stacked: false,
        foreColor: 'whitesmoke',
        height: '80%',

        // stacked: true

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
    colors: ['#8E2DE2', '#4A00E0'],
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
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
        '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
    ],
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime',
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
        shared: true,
        theme: 'dark',
        intersect: false,
        y: {
            formatter: function(y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;

            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#mixed"), options);
chart.render();