var selectsocialmedia = "2018";
const slideValue = document.getElementById("sliderValue");
const inputValue = document.getElementById("inputValue");
inputValue.oninput = (() => {
    let value = inputValue.value;
    slideValue.textContent = value;
    selectsocialmedia = inputValue.value;
    updateTreemap();
    // slideValue.style.left = (value / 2) + "%";
})

treemap();
var treemapchart;
async function treemap() {
    const data = await getsocialmediaData();
    var options = {
        chart: {
            fontFamily: 'Libre Franklin, sans-serif',
            height: '80%',
            type: "treemap",
            foreColor: 'whitesmoke',
            toolbar: {
                // show: false,
                show: true,
                offsetX: -'90vw',
                offsetY: -30,
                tools: {
                    download: false, //'<img src="/static/icons/download.png" class="ico-download" width="20">'
                    selection: false,
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
            text: 'Social Media Plattformen',
            // align: 'center'
        },
        stroke: {
            show: true,
            curve: 'smooth',
        },
        tooltip: {
            theme: 'dark',
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                anzahl = series[seriesIndex][dataPointIndex]

                function numberWithCommas(anzahl) {
                    return anzahl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }

                return (
                    '<div class="tooltip">' +
                    "Monatliche Nutzer: <br>" +
                    numberWithCommas(anzahl) +
                    "</div>"
                );
            }
        },
        xaxis: {
            type: 'category'
        },
        series: [{
            data: [{
                x: data.xs[0],
                y: data.zs[0]
            }, {
                x: data.xs[1],
                y: data.zs[1]
            }, {
                x: data.xs[2],
                y: data.zs[2]
            }, {
                x: data.xs[3],
                y: data.zs[3]
            }, {
                x: data.xs[4],
                y: data.zs[4]
            }, {
                x: data.xs[5],
                y: data.zs[5]
            }, {
                x: data.xs[6],
                y: data.zs[6]
            }, {
                x: data.xs[7],
                y: data.zs[7]
            }, {
                x: data.xs[8],
                y: data.zs[8]
            }, {
                x: data.xs[9],
                y: data.zs[9]
            }, {
                x: data.xs[11],
                y: data.zs[11]
            }, ]
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
    };

    treemapchart = new ApexCharts(document.querySelector("#treemapchart"), options);
    treemapchart.render();
}

async function getsocialmediaData() {

    const xs = []; //name
    const ys = []; //jahr
    const zs = []; //nutzer
    const response = await fetch('./Datengrafik/data/users-by-social-media-platform.csv');
    const socialmedia_data = await response.text();

    const table = socialmedia_data.split('\n').slice(1);
    // const ws = table.trim();
    table.forEach(row => {
        const columns = row.split(',');
        if (columns[1] == selectsocialmedia) {
            const name = columns[0];
            xs.push(name);
            const year = columns[1];
            ys.push(year);
            const user = columns[2].trim();
            zs.push(user);
        }
    });
    while (xs.length < 12) {
        const name = "";
        xs.push(name);
        const user = 0;
        zs.push(user);
    }
    return { xs, ys, zs };
}

async function updateTreemap() {
    const data = await getsocialmediaData();
    treemapchart.updateSeries([{
        data: [{
            x: data.xs[0],
            y: data.zs[0]
        }, {
            x: data.xs[1],
            y: data.zs[1]
        }, {
            x: data.xs[2],
            y: data.zs[2]
        }, {
            x: data.xs[3],
            y: data.zs[3]
        }, {
            x: data.xs[4],
            y: data.zs[4]
        }, {
            x: data.xs[5],
            y: data.zs[5]
        }, {
            x: data.xs[6],
            y: data.zs[6]
        }, {
            x: data.xs[7],
            y: data.zs[7]
        }, {
            x: data.xs[8],
            y: data.zs[8]
        }, {
            x: data.xs[9],
            y: data.zs[9]
        }, {
            x: data.xs[11],
            y: data.zs[11]
        }, ]
    }]);
};