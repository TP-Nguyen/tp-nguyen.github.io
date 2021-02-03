var options = {

    chart: {
        height: 550,
        type: "line",
        // foreColor: '#6D6D6D',

        toolbar: {
            show: false,
            // show: true,
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
    stroke: {
        show: true,
        curve: 'smooth',
    },
    series: [{
        name: "line",
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
        show: false,
    },
    xaxis: {
        categories: [
            "1990",
            "1995",
            "2000",
            "2005",
            "2010",
            "2015",
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