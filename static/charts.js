AmCharts.makeChart("chartdiv1",
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
    "fontSize": 13,            
    "plotAreaFillColors": "#FFFF",
    "colors": [
        "rgb(38,196,237)"
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
        "fontSize": 12,
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
            "color": "#070710",
            "id": "label1",
            "tabIndex": 1,
            "text": "107117%",
            "x": "88%",
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
        "labelText": "Taux de croissance en 2017",
        "align": "center",        
        "fontSize": 16,        
        "autoMargins": true,
        "labelWidth": 0,
        "rollOverColor": "#2C2CEB",
        "rollOverGraphAlpha": 0,
        "tabIndex": -1,
        "textClickEnabled": true,
        "useGraphSettings": true,
        "valueWidth": 43,
		"bottom": 0,
		"marginLeft": 0,
		"marginRight": 0,
		"position": "bottom",
        "right": 0,
        "left": 250,
		"top": 170
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

var lineDataFirst = [
    {
      "dates": "2016-08",
      "cumsum": 100
    },
    {
      "dates": "2016-09",
      "cumsum": 100
    },
    {
      "dates": "2016-10",
      "cumsum": 150
    },
    {
      "dates": "2016-11",
      "cumsum": 150
    },
    {
      "dates": "2016-12",
      "cumsum": 150
    },
    {
      "dates": "2017-01",
      "cumsum": 150
    }
  ] ;

  var lineDataSec = [
    {
      "dates": "2017-02",
      "cumsum": 250
    },
    {
      "dates": "2017-03",
      "cumsum": 410
    },
    {
      "dates": "2017-04",
      "cumsum": 425
    },
    {
      "dates": "2017-05",
      "cumsum": 505
    },
    {
      "dates": "2017-06",
      "cumsum": 575
    },
    {
      "dates": "2017-07",
      "cumsum": 775
    }
  ]
var lineDataThird = [
    {
      "dates": "2017-08",
      "cumsum": 967
    },
    {
      "dates": "2017-09",
      "cumsum": 967
    },
    {
      "dates": "2017-10",
      "cumsum": 992
    },
    {
      "dates": "2017-11",
      "cumsum": 1332
    },
    {
      "dates": "2017-12",
      "cumsum": 1332
    },
    {
      "dates": "2018-01",
      "cumsum": 1607
    },
    {
      "dates": "2018-02",
      "cumsum": 1657
    }
  ]
  function makeLineChartAxis(name, data) {
    AmCharts.makeChart(name,
        {
            "type": "serial",
            "hideCredits": true,
            "colors": [
                "rgb(228,03,46)"
            ],   
            "categoryField": "dates",
            "dataDateFormat": "YYYY-MM",
            "theme": "default",
            "categoryAxis": {
                "equalSpacing": true,                
                "minPeriod": "MM",
                "boldLabels": true,
                "fontSize": 15,    
                "parseDates": true
            },
            "chartCursor": {
                "enabled": true,
                "categoryBalloonDateFormat": "MMM YYYY"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[value]] grévistes en [[category]]",                    
                    "bullet": "round",
                    "id": "AmGraph-1",
                    "title": "graph 1",
                    "valueField": "cumsum"
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "maximum": 1700,
                    "minimum": 50,
                    "autoGridCount": false,
                    "titleFontSize": 17,
                    "title": "Nombre de livreurs en grêve (chiffre en cumulé)"
                    
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": false,
                "useGraphSettings": true
            },
            "dataProvider": data
        }
        );
    }

function makeLineChartNoAxis(name, data) {
    AmCharts.makeChart(name,
        {
            "type": "serial",
            "hideCredits": true,
            "colors": [
                "rgb(228,03,46)"
            ],   
            "categoryField": "dates",
            "dataDateFormat": "YYYY-MM",
            "theme": "default",
            "categoryAxis": {
                "equalSpacing": true,                
                "minPeriod": "MM",
                "boldLabels": true,
                "fontSize": 15,                
                "parseDates": true
            },
            "chartCursor": {
                "enabled": true,
                "categoryBalloonDateFormat": "MMM YYYY"
            },
            "trendLines": [],
            "graphs": [
                {
                    "balloonText": "[[value]] grévistes en [[category]]",                    
                    "bullet": "round",
                    "id": "AmGraph-1",
                    "title": "graph 1",
                    "valueField": "cumsum",
                    "showAllValueLabels": true                    
                }
            ],
            "guides": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "maximum": 1700,
                    "minimum": 50,
                    "autoGridCount": false,
                    "color": "#FFFFFF",
                    "axisColor": "#FFFFFF"
                    
                }
            ],
            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": false,
                "useGraphSettings": true
            },
            "dataProvider": data
        }
        );
    }
    
    var firstLine = makeLineChartAxis("line", lineDataFirst)
    var secondLine = makeLineChartNoAxis("lineSec", lineDataSec)
    var thirdLine = makeLineChartNoAxis("lineThird", lineDataThird)


    var datadeliveroo = [
        {
            "date": "2014-05",
            "funds": "",
            "income": "?",
            "loss": "?"
          },
        {
          "date": "2014-06",
          "funds": 2.7,
          "income": "?",
          "loss": "?"
        },
        {
          "date": "2015-01",
          "funds": 25,
          "income": 18.1,
          "loss": -30.1
        },
        {
          "date": "2015-07",
          "funds": 70,
          "income": 18.1,
          "loss": -30.1
        },
        {
          "date": "2015-08",
          "funds": 100,
          "income": 18.1,
          "loss": -30.1
        },
        {
          "date": "2016-07",
          "funds": 275,
          "income": 128.6,
          "loss": -129.1
        },
        {
            "date": "2016-12",
            "funds": "?",
            "income": 128.6,
            "loss": -129.1
          },
        {
          "date": "2017-08",
          "funds": 385,
          "income": "?",
          "loss": "?"
        }
      ]
    
    AmCharts.makeChart("deliveroo",
        {
            "type": "serial",
            "hideCredits": true,
            "categoryField": "date",
            "dataDateFormat": "YYYY-MM",
            "startDuration": 1,
            "connect": false,
            "fontFamily": "Open Sans",            
            "categoryAxis": {
                "gridPosition": "start",
                "parseDates": true,
                "autoGridCount":true
            },
            "chartCursor": {
                "enabled": true,
                "cursorColor": " #8c8c8c"
            },
            "trendLines": [],
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "Montant en millions de dollars"
                }
            ],
            "graphs": [
                {
                    "fillAlphas": 1,
                    "id": "AmGraph-1",
                    "title": "Levée de fonds",
                    "type": "column",
                    "valueField": "funds",
                    "lineColor":"#063a47",
                    "balloonText": "[[title]] de [[value]]md $"
                 
                        },
                {
                    "id": "AmGraph-2",
                    "title": "Chiffre d'affaire",
                    "valueField": "income",
                    "lineThickness": 2,
                    "lineColor":"#0f9abd",
                    "balloonText": "[[title]] de [[value]]md $"
                    
                },
                {
                    "id": "AmGraph-3",
                    "title": "Résultat",
                    "valueField": "loss",
                    "lineThickness": 4,
                    "lineColor": "#fb0431",
                    "balloonText": "[[title]] de [[value]]md $"
                    
                    
                }
            ],
            "guides": [],

            "allLabels": [],
            "balloon": {},
            "legend": {
                "enabled": true,
                "align": "center"
            },
            "titles": [
                {
                    "id": "Title-1",
                    "size": 20,
                    "text": "L'art du trompe-l'oeil par Deliveroo: toujours plus de fonds, toujours plus de pertes"
                }
            ],
            "dataProvider": datadeliveroo
        }
    );