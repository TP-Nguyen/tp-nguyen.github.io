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
            offsetY: 30,
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

    stroke: {
        show: true,
        curve: 'smooth',
    },
    series: [{
        name: "Internet user worldwide in percent ",
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
        points: [{
            x: '1991',
            y: '0.079',
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
                text: "first web page and browser"
            },
        }, {
            x: '1995',
            y: '0.681',
            strokeDashArray: 7,
            borderColor: "#8E2DE2",
            label: {
                borderColor: "#8E2DE2",
                style: {
                    color: "#fff",
                    background: '#8E2DE2',
                },
                text: "Ebay & Amazon.com"
            }
        }, {
            x: '1997',
            y: '2.036',
            strokeDashArray: 0,
            borderColor: "#8E2DE2",
            label: {
                borderColor: "#8E2DE2",
                style: {
                    color: "#fff",
                    background: '#8E2DE2',
                },
                text: "Google search"
            }
        }, {
            x: '1998',
            y: '3.136',
            strokeDashArray: 0,
            borderColor: "#8E2DE2",
            label: {
                borderColor: "#8E2DE2",
                style: {
                    color: "#fff",
                    background: '#8E2DE2',
                },
                text: "PayPal"
            }
        }, {
            x: '2001',
            y: '8.059',
            strokeDashArray: 0,
            borderColor: "#8E2DE2",
            label: {
                borderColor: "#8E2DE2",
                style: {
                    color: "#fff",
                    background: '#8E2DE2',
                },
                orientation: "horizontal",
                text: "Wikipedia"
            }
        }, {
            x: '2004',
            y: '14.186',
            strokeDashArray: 0,
            borderColor: "#6b16e1",
            label: {
                borderColor: "#6b16e1",
                style: {
                    color: "#fff",
                    background: '#6b16e1',
                },
                text: "Facebook"
            }
        }, {
            x: '2005',
            y: '15.673',
            strokeDashArray: 0,
            borderColor: "#6b16e1",
            label: {
                borderColor: "#6b16e1",
                style: {
                    color: "#fff",
                    background: '#6b16e1',
                },
                text: "YouTube & Google Maps"
            }
        }, {
            x: '2007',
            y: '20.411',
            strokeDashArray: 0,
            borderColor: "#6b16e1",
            label: {
                borderColor: "#6b16e1",
                style: {
                    color: "#fff",
                    background: '#6b16e1',
                },
                text: "iPhone"
            }
        }, {
            x: '2008',
            y: '22.870',
            strokeDashArray: 0,
            borderColor: "#6b16e1",
            label: {
                borderColor: "#6b16e1",
                style: {
                    color: "#fff",
                    background: '#6b16e1',
                },
                text: "Spotify "
            }
        }, {
            x: '2009',
            y: '25.266',
            strokeDashArray: 0,
            borderColor: "#6b16e1",
            label: {
                borderColor: "#6b16e1",
                style: {
                    color: "#fff",
                    background: '#6b16e1',
                },
                text: "Bitcoin"
            }
        }, {
            x: '2010',
            y: '28.705',
            strokeDashArray: 0,
            borderColor: "#6b16e1",
            label: {
                borderColor: "#6b16e1",
                style: {
                    color: "#fff",
                    background: '#6b16e1',
                },
                text: "Instagram"
            }
        }, {
            x: '2012',
            y: '34.207',
            strokeDashArray: 0,
            borderColor: "#6b16e1",
            label: {
                borderColor: "#6b16e1",
                style: {
                    color: "#fff",
                    background: '#6b16e1',
                },
                text: "Tesla Model S"
            }
        }, {
            x: '2013',
            y: '36.639',
            strokeDashArray: 0,
            borderColor: "#4A00E0",
            label: {
                borderColor: "#4A00E0",
                style: {
                    color: "#fff",
                    background: '#4A00E0',
                    // background: '#6b16e1',
                    // background: '#8E2DE2',
                },
                text: "Playstation 4 & xbox one"
            },
        }, {
            x: '2014',
            y: '39.735',
            strokeDashArray: 0,
            borderColor: "#4A00E0",
            label: {
                borderColor: "#4A00E0",
                style: {
                    color: "#fff",
                    background: '#4A00E0',
                    // background: '#6b16e1',
                    // background: '#8E2DE2',
                },
                text: "Alexa, Windows 10, Apple watch"
            },
        }, {
            x: '2016',
            y: '44.553',
            strokeDashArray: 0,
            borderColor: "#4A00E0",
            label: {
                borderColor: "#4A00E0",
                style: {
                    color: "#fff",
                    background: '#4A00E0',
                    // background: '#6b16e1',
                    // background: '#8E2DE2',
                },
                text: "Microsoft HoloLens "
            },
        }, {
            x: '2017',
            y: '49.555',
            strokeDashArray: 0,
            borderColor: "#4A00E0",
            label: {
                borderColor: "#4A00E0",
                style: {
                    color: "#fff",
                    background: '#4A00E0',
                    // background: '#6b16e1',
                    // background: '#8E2DE2',
                },
                text: "AMD Ryzen"
            },
        }, {
            x: '2019',
            y: '44.553',
            strokeDashArray: 0,
            borderColor: "#4A00E0",
            label: {
                borderColor: "#4A00E0",
                style: {
                    color: "#fff",
                    background: '#4A00E0',
                    // background: '#6b16e1',
                    // background: '#8E2DE2',
                },
                text: "Apple TV+ & Disney+"
            },
        }, ],
        // xaxis: [{
        //     //     x: '1991',
        //     //     y: '0.079',
        //     //     // strokeDashArray: 0, //linie
        //     //     strokeDashArray: 7, //linie
        //     //     borderColor: "#8E2DE2",
        //     //     label: {
        //     //         borderColor: "#8E2DE2",
        //     //         style: {
        //     //             color: "#fff",
        //     //             // background: '#4A00E0',
        //     //             // background: '#6b16e1',
        //     //             background: '#8E2DE2',
        //     //         },
        //     //         // orientation: "horizontal",
        //     //         text: "first web page and browser"
        //     //     },
        //     // }, {
        //     x: '1995',
        //     strokeDashArray: 7,
        //     borderColor: "#8E2DE2",
        //     label: {
        //         borderColor: "#8E2DE2",
        //         style: {
        //             color: "#fff",
        //             background: '#8E2DE2',
        //         },
        //         text: "Ebay & Amazon.com"
        //     }
        // }, {
        //     x: '1997',
        //     strokeDashArray: 0,
        //     borderColor: "#8E2DE2",
        //     label: {
        //         borderColor: "#8E2DE2",
        //         style: {
        //             color: "#fff",
        //             background: '#8E2DE2',
        //         },
        //         text: "Google search"
        //     }
        // }, {
        //     x: '1998',
        //     strokeDashArray: 0,
        //     borderColor: "#8E2DE2",
        //     label: {
        //         borderColor: "#8E2DE2",
        //         style: {
        //             color: "#fff",
        //             background: '#8E2DE2',
        //         },
        //         text: "PayPal"
        //     }
        // }, {
        //     x: '2001',
        //     strokeDashArray: 0,
        //     borderColor: "#8E2DE2",
        //     label: {
        //         borderColor: "#8E2DE2",
        //         style: {
        //             color: "#fff",
        //             background: '#8E2DE2',
        //         },
        //         orientation: "horizontal",
        //         text: "Wikipedia"
        //     }
        // }, {
        //     x: '2004',
        //     strokeDashArray: 0,
        //     borderColor: "#6b16e1",
        //     label: {
        //         borderColor: "#6b16e1",
        //         style: {
        //             color: "#fff",
        //             background: '#6b16e1',
        //         },
        //         text: "Facebook"
        //     }
        // }, {
        //     x: '2005',
        //     strokeDashArray: 0,
        //     borderColor: "#6b16e1",
        //     label: {
        //         borderColor: "#6b16e1",
        //         style: {
        //             color: "#fff",
        //             background: '#6b16e1',
        //         },
        //         text: "YouTube & Google Maps"
        //     }
        // }, {
        //     x: '2007',
        //     strokeDashArray: 0,
        //     borderColor: "#6b16e1",
        //     label: {
        //         borderColor: "#6b16e1",
        //         style: {
        //             color: "#fff",
        //             background: '#6b16e1',
        //         },
        //         text: "iPhone"
        //     }
        // }, {
        //     x: '2008',
        //     strokeDashArray: 0,
        //     borderColor: "#6b16e1",
        //     label: {
        //         borderColor: "#6b16e1",
        //         style: {
        //             color: "#fff",
        //             background: '#6b16e1',
        //         },
        //         text: "Spotify "
        //     }
        // }, {
        //     x: '2009',
        //     strokeDashArray: 0,
        //     borderColor: "#6b16e1",
        //     label: {
        //         borderColor: "#6b16e1",
        //         style: {
        //             color: "#fff",
        //             background: '#6b16e1',
        //         },
        //         text: "Bitcoin"
        //     }
        // }, {
        //     x: '2010',
        //     strokeDashArray: 0,
        //     borderColor: "#4A00E0",
        //     label: {
        //         borderColor: "#4A00E0",
        //         style: {
        //             color: "#fff",
        //             background: '#4A00E0',
        //         },
        //         text: "Instagram"
        //     }
        // }, {
        //     x: '2013',
        //     strokeDashArray: 0,
        //     borderColor: "#4A00E0",
        //     label: {
        //         borderColor: "#4A00E0",
        //         style: {
        //             color: "#fff",
        //             background: '#4A00E0',
        //             // background: '#6b16e1',
        //             // background: '#8E2DE2',
        //         },
        //         text: "Playstation 4 & xbox one"
        //     }
        // }, ],
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