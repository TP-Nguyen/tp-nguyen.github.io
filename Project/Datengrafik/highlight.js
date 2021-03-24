var options = {
    chart: {
        fontFamily: 'Libre Franklin, sans-serif',
        height: '80%',
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
        text: 'meilensteine'
    },
    stroke: {
        show: true,
        curve: 'smooth',
    },
    series: [{
        name: "Internetnutzer in Prozent ",
        data: [0.049, 0.079, 0.125, 0.178, 0.359, 0.681, 1.323,
            2.036, 3.136, 4.629, 6.525, 8.059, 10.658,
            12.311, 14.186, 15.673, 17.340, 20.411,
            22.870, 25.266, 28.705, 31.148, 34.207, 36.639, 39.735, 41.546, 44.553, 49.555, 50.763
        ]
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
    annotations: {
        // position: "back",
        xaxis: [{
            x: '1991',
            // strokeDashArray: 0, //linie
            strokeDashArray: 7, //linie
            borderColor: "#8E2DE2",
            label: {
                borderColor: "#8E2DE2",
                style: {
                    color: "#fff",
                    // background: '#4A00E0',
                    // background: '#6b16e1',
                    background: '#8E2DE2',
                },
                // orientation: "horizontal",
                text: "X Axis Anno Horizonal"
            },
        }, {
            x: '1992',
            strokeDashArray: 0,
            borderColor: "#8E2DE2",
            label: {
                borderColor: "#8E2DE2",
                style: {
                    color: "#fff",
                    // background: '#4A00E0',
                    // background: '#6b16e1',
                    background: '#8E2DE2',
                },
                text: "X Axis Anno Vertical"
            }
        }, {
            x: '1993',
            strokeDashArray: 0,
            borderColor: "#8E2DE2",
            label: {
                borderColor: "#8E2DE2",
                style: {
                    color: "#fff",
                    background: '#4A00E0',
                    background: '#6b16e1',
                    background: '#8E2DE2',
                },
                text: "X Axis Anno Vertical"
            }
        }, ],
    },
    xaxis: {
        tooltip: 'false',
        label: {
            colors: "#fff"
        },
        categories: [
            "1990",
            "1991",
            "1992",
            "1993",
            "1994",
            "1995",
            "1996",
            "1997",
            "1998",
            "1999",
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
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

var chart = new ApexCharts(document.querySelector("#highlightchart"), options);
chart.render();