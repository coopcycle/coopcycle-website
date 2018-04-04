AmCharts.makeChart("chartdiv",
{
    "type": "serial",
    "hideCredits": true,
    "responsive": {
        "enabled": true},
    "categoryField": "category",
    "columnSpacing": 500,
    "columnSpacing3D": -6,
    "maxSelectedSeries": 8,
    "minSelectedTime": -4,
    "rotate": true,
    "zoomOutOnDataUpdate": false,
    "autoMarginOffset": 13,
    "marginBottom": 28,
    "marginLeft": 126,
    "marginRight": 44,
    "plotAreaFillColors": "#FFFF",
    "colors": [
        "rgb(228,03,46)"
    ],
    "startDuration": 1,
    "autoResize": false,
    "color": "#070710",
    "creditsPosition": "bottom-right",
    "fontFamily": "Open Sans",
    "hideBalloonTime": 151,
    "percentPrecision": 5,
    "processTimeout": -1,
    "theme": "light",
    "thousandsSeparator": "",
    "categoryAxis": {
        "autoRotateAngle": -10.8,
        "autoRotateCount": 0,
        "forceShowField": "forceShow",
        "gridPosition": "start",
        "position": "left",
        "autoGridCount": false,
        "boldLabels": true,
        "fillColor": "#070710",
        "fontSize": 10,
        "gridColor": "#070710",
        "labelRotation": 12.6,
        "minVerticalGap": 75,
        "title": "",
        "titleRotation": 3
    },
    "trendLines": [],
    "graphs": [
        {
            "alphaField": "alpha",
            "balloonText": "[[title]] de [[category]]:[[value]]",
            "bulletSize": 2,
            "clustered": false,
            "fillAlphas": 1,
            "gapPeriod": 0,
            "hideBulletsCount": 4,
            "id": "AmGraph-1",
            "labelText": "",
            "legendValueText": "",
            "lineThickness": 0,
            "markerType": "square",
            "periodSpan": 0,
            "tabIndex": 1,
            "title": "Taux de croissance",
            "type": "column",
            "valueField": "Taux de croissance"
        }
    ],
    "guides": [
        {
            "balloonText": "",
            "id": "Guide-1"
        }
    ],
    "valueAxes": [
        {
            "axisTitleOffset": 0,
            "id": "ValueAxis-1",
            "position": "bottom",
            "synchronizationMultiplier": -2,
            "totalText": "",
            "totalTextOffset": 1,
            "unit": "%",
            "offset": 3,
            "title": "",
            "titleFontSize": 3
        }
    ],
    "allLabels": [
        {
            "bold": true,
            "color": "#FFFFFF",
            "id": "label1",
            "tabIndex": 1,
            "text": "107117%",
            "x": "78%",
            "y": "19%"
        },
        {
            "alpha": 0.46,
            "id": "Label-2",
            "text": "Source: Deloitte",
            "url": "https://www2.deloitte.com/global/en/pages/technology-media-and-telecommunications/articles/technology-fast-500-emea.html",
            "x": "75%",
            "y": "85%"
        }
    ],
    "balloon": {
        "fadeOutDuration": 0,
        "fixedPosition": false
    },
    "legend": {
        "enabled": true,
        "bottom": 0,
        "labelText": "Taux de croissance en 2017",
        "labelWidth": 0,
        "left": -5,
        "right": 0,
        "rollOverColor": "#2C2CEB",
        "rollOverGraphAlpha": 0,
        "tabIndex": -1,
        "textClickEnabled": true,
        "useGraphSettings": true,
        "valueWidth": 43
    },
    "titles": [
        {
            "id": "Title-1",
            "size": 20,
            "text": "Top 10 des entreprises tech en Europe"
        }
    ],
    "dataProvider": [
        {
            "category": "Deliveroo",
            "Taux de croissance": "107117",
            "alpha": "1"
        },
        {
            "category": "Lesara",
            "Taux de croissance": "71981",
            "alpha": "0.2"
        },
        {
            "category": "Guide to Iceland",
            "Taux de croissance": "30314",
            "alpha": "0.2"
        },
        {
            "category": "YouAppi",
            "Taux de croissance": "16230",
            "alpha": "0.2"
        },
        {
            "category": "Bloom & Wild",
            "Taux de croissance": "13818",
            "alpha": "0.2"
        },
        {
            "category": "Yotpo",
            "Taux de croissance": "8703",
            "alpha": "0.2"
        },
        {
            "category": "Kiwi.com",
            "Taux de croissance": "7165",
            "alpha": "0.2"
        },
        {
            "category": "Deeper",
            "Taux de croissance": "7048",
            "alpha": "0.2"
        },
        {
            "category": "Prusa Research",
            "Taux de croissance": "6910",
            "alpha": "0.2"
        }
    ]
}
);