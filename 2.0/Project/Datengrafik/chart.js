var kurve = '#4A00E0';
var options = {
    chart: {
        height: 500,
        type: "area",
        // stacked: true

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
        name: "line 1",
        data: [45, 52, 38, 45, 19, 23, 2],
    }, {
        name: "line 2",
        data: [53, 58, 48, 55, 79, 54, 5],
    }],
    grid: {
        show: false,
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

var spline = new ApexCharts(document.querySelector("#spline"), options);

spline.render();