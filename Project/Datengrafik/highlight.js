var options = {
    chart: {
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
        data: [0.0492353738271775, 0.079180967646696, 0.125363365753077, 0.178899794597585, 0.359900150378578, 0.681457389339993, 1.32348902047915, 2.0366761962719, 3.13637403370571, 4.6299241908147, 6.52593166807701, 8.05900120761762, 10.6587267487701, 12.3110785889919, 14.1868248322306, 15.6730476793268, 17.3404618768159, 20.411719882308, 22.8706746362527, 25.2665719017729, 28.7057189055048, 31.148164313188, 34.2076105099855, 36.6393781741143, 39.735505464686, 41.5462411450631, 44.5531056811902, 49.5556513703621, 50.7630811714937]
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
        position: "back",
        xaxis: [{
            x: '2005',
            // strokeDashArray: 0, //linie
            strokeDashArray: 7, //linie
            borderColor: "#707070",
        }],
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