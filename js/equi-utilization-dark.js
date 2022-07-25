Highcharts.chart('circle', {
    chart: {
        height: 300,
        width: 300,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: {
            linearGradient: { x1: 6, y1: 5, x2: 2, y2: 5 },

            stops: [
                [0, 'rgba(255,255,255,0.05)'],
                [1, 'rgba(255,255,255,0.01)']
            ]
        },
    },
    // 關閉右上角menu
    exporting: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
            showInLegend: false
        }
    },
    colors: [
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#BB86FC'],
                [1, '#a866fa']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#f56492'],
                [1, '#f25084']
            ]
        },

        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#A6C8FF'],
                [1, '#7eaefc']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#03DAC5'],
                [1, '#02c1c4']
            ]
        },

    ],
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '',
            y: 11.84
        }, {
            name: '',
            y: 10.85
        }, {
            name: '',
            y: 4.67
        }, {
            name: '',
            y: 4.18
        }]
    }]
}, function (chart) {
    var textX = chart.plotLeft + (chart.series[0].center[0]);
    var textY = chart.plotTop + (chart.series[0].center[1]);

    /*     chart.renderer.circle(textX, textY, 10).attr({
            fill: '#ddd',
        }).add(); */

    chart.renderer.image(
        './img/pc-display.svg',
        textX - 11,
        textY - 9,
        30,
        30,

    ).add();
});



Highcharts.chart('circle2', {
    chart: {
        height: 300,
        width: 300,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: {
            linearGradient: { x1: 6, y1: 5, x2: 2, y2: 5 },

            stops: [
                [0, 'rgba(255,255,255,0.05)'],
                [1, 'rgba(255,255,255,0.01)']
            ]
        },
    },
    // 關閉右上角menu
    exporting: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
            showInLegend: false
        }
    },
    colors: [
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#BB86FC'],
                [1, '#a866fa']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#f56492'],
                [1, '#f25084']
            ]
        },

        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#A6C8FF'],
                [1, '#7eaefc']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#03DAC5'],
                [1, '#02c1c4']
            ]
        },

    ],
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '',
            y: 11.84
        }, {
            name: '',
            y: 10.85
        }, {
            name: '',
            y: 4.67
        }, {
            name: '',
            y: 4.18
        }]
    }]
}, function (chart) {
    var textX = chart.plotLeft + (chart.series[0].center[0]);
    var textY = chart.plotTop + (chart.series[0].center[1]);

    /*     chart.renderer.circle(textX, textY, 10).attr({
            fill: '#ddd',
        }).add(); */

    chart.renderer.image(
        './img/pc-display.svg',
        textX - 11,
        textY - 9,
        30,
        30,

    ).add();
});


Highcharts.chart('circle3', {
    chart: {
        height: 300,
        width: 300,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: {
            linearGradient: { x1: 6, y1: 5, x2: 2, y2: 5 },

            stops: [
                [0, 'rgba(255,255,255,0.05)'],
                [1, 'rgba(255,255,255,0.01)']
            ]
        },
    },
    // 關閉右上角menu
    exporting: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
            showInLegend: false
        }
    },
    colors: [
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#BB86FC'],
                [1, '#a866fa']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#f56492'],
                [1, '#f25084']
            ]
        },

        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#A6C8FF'],
                [1, '#7eaefc']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#03DAC5'],
                [1, '#02c1c4']
            ]
        },

    ],
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '',
            y: 11.84
        }, {
            name: '',
            y: 10.85
        }, {
            name: '',
            y: 4.67
        }, {
            name: '',
            y: 4.18
        }]
    }]
}, function (chart) {
    var textX = chart.plotLeft + (chart.series[0].center[0]);
    var textY = chart.plotTop + (chart.series[0].center[1]);

    /*     chart.renderer.circle(textX, textY, 10).attr({
            fill: '#ddd',
        }).add(); */

    chart.renderer.image(
        './img/pc-display.svg',
        textX - 11,
        textY - 9,
        30,
        30,

    ).add();
});


Highcharts.chart('circle4', {
    chart: {
        height: 300,
        width: 300,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: {
            linearGradient: { x1: 6, y1: 5, x2: 2, y2: 5 },

            stops: [
                [0, 'rgba(255,255,255,0.05)'],
                [1, 'rgba(255,255,255,0.01)']
            ]
        },
    },
    // 關閉右上角menu
    exporting: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
            showInLegend: false
        }
    },
    colors: [
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#BB86FC'],
                [1, '#a866fa']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#f56492'],
                [1, '#f25084']
            ]
        },

        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#A6C8FF'],
                [1, '#7eaefc']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#03DAC5'],
                [1, '#02c1c4']
            ]
        },

    ],
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '',
            y: 11.84
        }, {
            name: '',
            y: 10.85
        }, {
            name: '',
            y: 4.67
        }, {
            name: '',
            y: 4.18
        }]
    }]
}, function (chart) {
    var textX = chart.plotLeft + (chart.series[0].center[0]);
    var textY = chart.plotTop + (chart.series[0].center[1]);

    /*     chart.renderer.circle(textX, textY, 10).attr({
            fill: '#ddd',
        }).add(); */

    chart.renderer.image(
        './img/pc-display.svg',
        textX - 11,
        textY - 9,
        30,
        30,

    ).add();
});


Highcharts.chart('circle5', {
    chart: {
        height: 300,
        width: 300,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: {
            linearGradient: { x1: 6, y1: 5, x2: 2, y2: 5 },

            stops: [
                [0, 'rgba(255,255,255,0.05)'],
                [1, 'rgba(255,255,255,0.01)']
            ]
        },
    },
    // 關閉右上角menu
    exporting: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
            showInLegend: false
        }
    },
    colors: [
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#BB86FC'],
                [1, '#a866fa']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#f56492'],
                [1, '#f25084']
            ]
        },

        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#A6C8FF'],
                [1, '#7eaefc']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#03DAC5'],
                [1, '#02c1c4']
            ]
        },

    ],
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '',
            y: 11.84
        }, {
            name: '',
            y: 10.85
        }, {
            name: '',
            y: 4.67
        }, {
            name: '',
            y: 4.18
        }]
    }]
}, function (chart) {
    var textX = chart.plotLeft + (chart.series[0].center[0]);
    var textY = chart.plotTop + (chart.series[0].center[1]);

    /*     chart.renderer.circle(textX, textY, 10).attr({
            fill: '#ddd',
        }).add(); */

    chart.renderer.image(
        './img/pc-display.svg',
        textX - 11,
        textY - 9,
        30,
        30,

    ).add();
});

Highcharts.chart('circle6', {
    chart: {
        height: 300,
        width: 300,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: {
            linearGradient: { x1: 6, y1: 5, x2: 2, y2: 5 },

            stops: [
                [0, 'rgba(255,255,255,0.05)'],
                [1, 'rgba(255,255,255,0.01)']
            ]
        },
    },
    // 關閉右上角menu
    exporting: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
            showInLegend: false
        }
    },
    colors: [
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#BB86FC'],
                [1, '#a866fa']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#f56492'],
                [1, '#f25084']
            ]
        },

        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#A6C8FF'],
                [1, '#7eaefc']
            ]
        },
        {
            linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
            },
            stops: [
                [0, '#03DAC5'],
                [1, '#02c1c4']
            ]
        },

    ],
    series: [{
        name: '',
        colorByPoint: true,
        data: [{
            name: '',
            y: 11.84
        }, {
            name: '',
            y: 10.85
        }, {
            name: '',
            y: 4.67
        }, {
            name: '',
            y: 4.18
        }]
    }]
}, function (chart) {
    var textX = chart.plotLeft + (chart.series[0].center[0]);
    var textY = chart.plotTop + (chart.series[0].center[1]);

    /*     chart.renderer.circle(textX, textY, 10).attr({
            fill: '#ddd',
        }).add(); */

    chart.renderer.image(
        './img/pc-display.svg',
        textX - 11,
        textY - 9,
        30,
        30,

    ).add();
});
