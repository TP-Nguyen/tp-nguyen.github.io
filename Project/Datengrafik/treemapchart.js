treemap();
async function treemap() {
    // const data = await getData();
    // const data = await getData();
    // console.log(data);
    // const platform = data.xs;
    // const user = data.zs;

    var options = {
        chart: {
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
            align: 'center'
        },
        stroke: {
            show: true,
            curve: 'smooth',
        },
        tooltip: {
            theme: 'dark',
        },
        series: [{
            data: [
                // platform,
                // user,
                {
                    x: 'New Delhi',
                    y: 218
                },
                {
                    x: 'Kolkata',
                    y: 149
                },
                {
                    x: 'Mumbai',
                    y: 184
                },
                {
                    x: 'Ahmedabad',
                    y: 55
                },
                // {
                //     x: data.xs[0],
                //     y: data.ys[0]
                // }, {
                //     x: data.xs[1],
                //     y: data.ys[1]
                // }, {
                //     x: data.xs[2],
                //     y: data.ys[2]
                // }, {
                //     x: data.xs[3],
                //     y: data.ys[3]
                // },
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
    };

    var chart = new ApexCharts(document.querySelector("#treemapchart"), options);
    chart.render();
}

async function getData() {
    const xs = []; //name
    const ys = []; //jahr
    const zs = []; //nutzer
    const fetch = require("node-fetch");
    const response = await fetch('./data/users-by-social-media-platform.csv');
    // const response = await fetch('http://127.0.0.1:5500/Project/Datengrafik/data/users-by-social-media-platform.csv');
    const socialmedia_data = await response.text();

    const table = socialmedia_data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const name = columns[0];
        xs.push(name);
        const year = columns[1];
        ys.push(year);
        const user = columns[2].trim();
        zs.push(user);
    });
    return { table, xs, ys, zs };
}