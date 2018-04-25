AmCharts.makeChart("chartdiv1",
{
    "type": "serial",
    "hideCredits": true,
    "categoryField": "category",
    "columnSpacing": 500,
    "columnSpacing3D": -6,
    "maxSelectedSeries": 8,
    "minSelectedTime": -4,
    "rotate": true,
    "zoomOutOnDataUpdate": false,
    "autoMarginOffset": 13,
    "autoDisplay": true,    
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
        "boldLabels": false,
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
            "text": "Source: Deloitte (Fast500 EMEA Winners)",
            "url": "https://www2.deloitte.com/global/en/pages/technology-media-and-telecommunications/articles/technology-fast-500-emea.html",
            "x": "70%",
            "y": "80%"
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
            "text": "La foodtech: des taux de croissance mirobolants"
        }
    ],
    "dataProvider": [
        {
            "category": "DELIVEROO",
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
            "fontFamily": "Open Sans",            
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
                    "titleFontSize": 16,
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
            "fontFamily": "Open Sans",            
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
            "fontSize": 14,            
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
                    "title": "Pertes",
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

var dataWageIdeal = [
    {
      "category": "Salaire net",
      "part": 48,
      "color": "#f8e0a0"
    },
    {
      "category": "Charges salariales",
      "part": 25,
      "color": "#f1c241"
    },
    {
      "category": "Congés payés",
      "part": 10,
      "color": "#d5a110"
    },
    {
      "category": "Assurance (vélo + responsabilité civile)",
      "part": 10,
      "color": "#be8f0e"
    },
    {
      "category": "Accident (arrêt de travail)",
      "part": 5,
      "color": "#8e6b0b"
    },
    {
      "category": "Jour férié",
      "part": 2,
      "color": "#775909"
    }
  ]

var wage_ideal = AmCharts.makeChart("wage_ideal",
    {
        "type": "pie",
        "responsive": {
            "enabled": true
          },
        "hideCredits": true,  
        "fontFamily": "Open Sans",        
        "balloonText": "",
        "autoDisplay": true,
        "innerRadius": "80%",
        "minRadius": 5,
        "pieX": "50%",
        "pieY": "50%",
        "radius": "20%",
        "fontSize": 13,        
        "pullOutEffect": "easeOutSine",
        "pullOutOnlyOne": true,
        "startAngle": 320,
        "maxLabelWidth": 196,
        "titleField": "category",
        "valueField": "part",
        "colorField": "color",
        "theme": "light",
        "hoverAlpha":0.9,
        "precision":0,
        "percentPrecision":0,
        "labelText": "[[title]]: \n [[percents]]%",
        "allLabels": [
            {
                "bold": true,
                "id": "Label-2",
                "text": "Salaire brut :",
                "size": 15,
                "x": "43%",
                "y": "45%"
            },
            {
                "bold": true,
                "id": "Label-1",
                "text": "15.95 €",
                "size": 15,
                "x": "47%",
                "y": "50%"
            }
        ],
        "balloon": {},
        "titles": [
            {
                "id": "Title-1",
                "text": "Estimation du salaire brut juste \n (fondée sur le SMIC)",
                "size": 18
                
                
            }
        ],
        "dataProvider": dataWageIdeal
    }
);

AmCharts.makeChart("wage_real",
{
    "type": "pie",
    "responsive": {
        "enabled": true
      },
    "hideCredits": true,  
    "fontFamily": "Open Sans",        
    "balloonText": "",
    "labelText": "[[title]]: [[percents]]",    
    "autoDisplay": true,
    "innerRadius": "85%",
    "minRadius": 5,
    "pieX": "50%",
    "pieY": "50%",
    "radius": "20%",
    "pullOutEffect": "easeOutSine",
    "pullOutOnlyOne": true,
    "startAngle": 320,
    "maxLabelWidth": 196,
    "titleField": "category",
    "valueField": "part",
    "colorField": "color",
    "labelsEnabled": false,    
    "hoverAlpha":0.9,
    "precision":0,
    "percentPrecision":0,
    "allLabels": [
        {
            "bold": true,
            "id": "Label-2",
            "text": "Salaire brut :",
            "size": 15,
            "x": "43%",
            "y": "45%"
        },
        {
            "bold": true,
            "id": "Label-1",
            "text": "7 - 14€",
            "size": 15,
            "x": "47%",
            "y": "50%"
        }
    ],
    "balloon": {},
    "titles": [
        {
            "id": "Title-1",
            "text": "Estimation du salaire brut actuel \n (Foodora)",
            "size": 18
            
            
        }
    ],
    "dataProvider": [
        {
          "category": "",
          "part": 100,
          "color": "#eeb516"
        }
    ]
}
);

var dataLCA = [
    {
      "category": "Age",
      "Column-1": 42,
      "Color-1": "#c0c0f1",
      "Description-1": "-20 ans",
      "Column-2": 39,
      "Color-2": "#9696e8",
      "Description-2": "20-24 ans",
      "Column-3": 19,
      "Color-3": "#5858da",
      "Description-3": "25-34 ans",
      "Column-4": 0,
      "Color-4": "#0e0e3f",
      "Description-4": "+35 ans"
    },
    {
      "category": "Niveau d’étude",
      "Column-1": 61,
      "Color-1": "#80ffff",
      "Description-1": "Collège",
      "Column-2": 33,
      "Color-2": "#00e6e6",
      "Description-2": "Bac/ CAP/ BEP",
      "Column-3": 6,
      "Color-3": "#008080",
      "Description-3": "Licence/ DIUT/ BTS",
      "Column-4": 0,
      "Color-4": "#001a1a",
      "Description-4": "Master/ Doctorat / Gradnes Ecoles"
    },
    {
      "category": "Autre emploi",
      "Column-1": 39,
      "Color-1": "#c2e085",
      "Description-1": "Autre emploi",
      "Column-2": 61,
      "Color-2": "#8ab82e",
      "Description-2": "Pas d’emploi",
      "Column-3": 0,
      "Color-3": "#4d6619",
      "Description-3": "Etudiant",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    },
    {
      "category": "Origine géographique",
      "Column-1": 93,
      "Color-1": "#fcbcb5",
      "Description-1": "En-dehors de Paris",
      "Column-2": 7,
      "Color-2": "#f84d3a",
      "Description-2": "De Paris",
      "Column-3": "",
      "Color-3": "#f84d3a",
      "Description-3": "",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    },
    {
      "category": "Toute la semaine",
      "Column-1": 88,
      "Color-1": "#f8bae1",
      "Description-1": "Oui",
      "Column-2": 12,
      "Color-2": "#ee5db9",
      "Description-2": "Non",
      "Column-3": "",
      "Color-3": "#ee5db9",
      "Description-3": "",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    },
    {
      "category": "Nbr d’heure par jour",
      "Column-1": 0,
      "Color-1": "#ecc6ec",
      "Description-1": "Moins de 5h",
      "Column-2": 72,
      "Color-2": "#d98cd9",
      "Description-2": "Entre 5h et 8h",
      "Column-3": 28,
      "Color-3":"#bf40bf",
      "Description-3":  "Plus de 8h",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    }
  ]

var dataLCA2 = [
    {
      "category": "Age",
      "Column-1": 23,
      "Color-1": "#c0c0f1",
      "Description-1": "-20 ans",
      "Column-2": 55,
      "Color-2": "#9696e8",
      "Description-2": "20-24 ans",
      "Column-3": 15,
      "Color-3": "#5858da",
      "Description-3": "25-34 ans",
      "Column-4": 7,
      "Color-4": "#0e0e3f",
      "Description-4": "+35 ans"
    },
    {
      "category": "Niveau d’étude",
      "Column-1": 30,
      "Color-1": "#80ffff",
      "Description-1": "Collège",
      "Column-2": 60,
      "Color-2": "#00e6e6",
      "Description-2": "Bac/ CAP/ BEP",
      "Column-3": 10,
      "Color-3": "#008080",
      "Description-3": "Licence/ DIUT/ BTS",
      "Column-4": 0,
      "Color-4": "#001a1a",
      "Description-4": "Master/ Doctorat / Grandes Ecoles"
    },
    {
      "category": "Autre emploi",
      "Column-1": 93,
      "Color-1": "#c2e085",
      "Description-1": "Autre emploi",
      "Column-2": 7,
      "Color-2": "#8ab82e",
      "Description-2": "Pas d’emploi",
      "Column-3": 0,
      "Color-3": "#4d6619",
      "Description-3": "Etudiant",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    },
    {
      "category": "Origine géographique",
      "Column-1": 93,
      "Color-1": "#fcbcb5",
      "Description-1": "En-dehors de Paris",
      "Column-2": 7,
      "Color-2": "#f84d3a",
      "Description-2": "De Paris",
      "Column-3": "",
      "Color-3": "#f84d3a",
      "Description-3": "",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    },
    {
      "category": "Toute la semaine",
      "Column-1": 0,
      "Color-1": "#f8bae1",
      "Description-1": "Oui",
      "Column-2": 100,
      "Color-2": "#ee5db9",
      "Description-2": "Non",
      "Column-3": "",
      "Color-3": "#ee5db9",
      "Description-3": "",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    },
    {
      "category": "Nbr d’heure par jour",
      "Column-1": 100,
      "Color-1": "#ecc6ec",
      "Description-1": "Moins de 5h",
      "Column-2": 0,
      "Color-2": "#993399",
      "Description-2": "Entre 5h et 8h",
      "Column-3": 0,
      "Color-3": "#ff00ff",
      "Description-3": "#800080",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    }
  ]

  var dataLCA3 = [
    {
      "category": "Age",
      "Column-1": 0,
      "Color-1": "#c0c0f1",
      "Description-1": "-20 ans",
      "Column-2": 50,
      "Color-2": "#9696e8",
      "Description-2": "20-24 ans",
      "Column-3": 46,
      "Color-3": "#5858da",
      "Description-3": "25-34 ans",
      "Column-4": 4,
      "Color-4": "#0e0e3f",
      "Description-4": "+35 ans"
    },
    {
      "category": "Niveau d’étude",
      "Column-1": 0,
      "Color-1": "#80ffff",
      "Description-1": "Collège",
      "Column-2": 0,
      "Color-2": "#00e6e6",
      "Description-2": "Bac/ CAP/ BEP",
      "Column-3": 96,
      "Color-3": "#008080",
      "Description-3": "Licence/ DIUT/ BTS",
      "Column-4": 4,
      "Color-4": "#001a1a",
      "Description-4": "Master/ Doctorat / Grandes Ecoles"
    },
    {
      "category": "Autre emploi",
      "Column-1": 28,
      "Color-1": "#c2e085",
      "Description-1": "Autre emploi",
      "Column-2": 4,
      "Color-2": "#8ab82e",
      "Description-2": "Pas d’emploi",
      "Column-3": 68,
      "Color-3": "#4d6619",
      "Description-3": "Etudiant",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    },
    {
      "category": "Origine géographique",
      "Column-1": 66,
      "Color-1": "#fcbcb5",
      "Description-1": "En-dehors de Paris",
      "Column-2": 34,
      "Color-2": "#f84d3a",
      "Description-2": "De Paris",
      "Column-3": "",
      "Color-3": "#f84d3a",
      "Description-3": "",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    },
    {
      "category": "Toute la semaine",
      "Column-1": 7,
      "Color-1": "#f8bae1",
      "Description-1": "Oui",
      "Column-2": 93,
      "Color-2": "#ee5db9",
      "Description-2": "Non",
      "Column-3": "",
      "Color-3": "#ee5db9",
      "Description-3": "",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    },
    {
      "category": "Nbr d’heure par jour",
      "Column-1": 88,
      "Color-1": "#ecc6ec",
      "Description-1": "Moins de 5h",
      "Column-2": 12,
      "Color-2": "#d98cd9",
      "Description-2": "Entre 5h et 8h",
      "Column-3": 0,
      "Color-3": "#cc00cc",
      "Description-3": "#800080",
      "Column-4": "",
      "Color-4": "",
      "Description-4": ""
    }
  ]

  AmCharts.makeChart("graphLCA",
  {
      "type": "serial",
      "hideCredits": true,
      "fontFamily": "Open Sans",                    
      "categoryField": "category",
      "rotate": true,
      "startDuration": 1,
      "categoryAxis": {
          "gridPosition": "start",
          "boldLabels":true,
          "fontSize":13
      },
      "trendLines": [],
      "graphs": [
          {
              "balloonText": "[[description]]: [[value]]%",
              "columnWidth": 0.3,
              "fillAlphas": 1,
              "id": "AmGraph-1",
              "title": "graph 1",
              "type": "column",
              "valueField": "Column-1",
              "fillColorsField": "Color-1",
              "lineThickness":0,
              "descriptionField": "Description-1",
              "labelText": "[[description]]",
              "labelPosition": "middle"
          },
          {
              "balloonText": "[[description]]: [[value]]%",
              "columnWidth": 0.3,
              "fillAlphas": 1,
              "id": "AmGraph-2",
              "title": "graph 2",
              "type": "column",
              "valueField": "Column-2",
              "fillColorsField": "Color-2",
              "lineThickness":0,
              "descriptionField": "Description-2",
              "labelText": "[[description]]"
              
          },
          {
              "balloonText": "[[description]]: [[value]]%",
              "columnWidth": 0.3,
              "fillAlphas": 1,
              "id": "AmGraph-3",
              "title": "graph 3",
              "type": "column",
              "valueField": "Column-3",
              "fillColorsField": "Color-3",
              "lineThickness":0,
              "descriptionField": "Description-3",
              "labelText": "[[description]]"
              
          },
          {
              "balloonText": "[[description]]: [[value]]%",
              "columnWidth": 0.3,
              "fillAlphas": 1,
              "id": "AmGraph-4",
              "title": "graph 4",
              "type": "column",
              "valueField": "Column-4",
              "fillColorsField": "Color-4",
              "lineThickness":0,
              "descriptionField": "Description-4",
              "labelText": "[[description]]"
              
          }
      ],
      "guides": [],
      "valueAxes": [
          {
              "id": "ValueAxis-1",
              "stackType": "regular",
              "maximum": 100,
              "title": "Portrait 1 \n(33%)",
              "titleFontSize":15               
              
          }
      ],
      "allLabels": [],
      "balloon": {},

      "dataProvider": dataLCA
  }
);

function makechartLCA (name, chart_title, data) { AmCharts.makeChart(name,
    {
        "type": "serial",
        "hideCredits": true,
        "fontFamily": "Open Sans",                    
        "categoryField": "category",
        "rotate": true,
        "startDuration": 1,
        "categoryAxis": {
            "gridPosition": "start",
            "labelsEnabled": false,
            "axisThickness": 0        
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[description]]: [[value]]%",
                "columnWidth": 0.3,
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "graph 1",
                "type": "column",
                "valueField": "Column-1",
                "fillColorsField": "Color-1",
                "lineThickness":0,
                "descriptionField": "Description-1",
                "labelText": "[[description]]",
                "labelPosition": "middle"
            },
            {
                "balloonText": "[[description]]: [[value]]%",
                "columnWidth": 0.3,
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "graph 2",
                "type": "column",
                "valueField": "Column-2",
                "fillColorsField": "Color-2",
                "lineThickness":0,
                "descriptionField": "Description-2",
                "labelText": "[[description]]"
                
            },
            {
                "balloonText": "[[description]]: [[value]]%",
                "columnWidth": 0.3,
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "title": "graph 3",
                "type": "column",
                "valueField": "Column-3",
                "fillColorsField": "Color-3",
                "lineThickness":0,
                "descriptionField": "Description-3",
                "labelText": "[[description]]"
                
            },
            {
                "balloonText": "[[description]]: [[value]]%",
                "columnWidth": 0.3,
                "fillAlphas": 1,
                "id": "AmGraph-4",
                "title": "graph 4",
                "type": "column",
                "valueField": "Column-4",
                "fillColorsField": "Color-4",
                "lineThickness":0,
                "descriptionField": "Description-4",
                "labelText": "[[description]]"
                
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "stackType": "regular",
                "maximum": 100,
                "title": chart_title,
                "titleFontSize":15               
                
            }
        ],
        "allLabels": [],
        "balloon": {},

        "dataProvider": data
    }
    );
}

makechartLCA("graphLCA2", "Portrait 2 \n(14%)", dataLCA2)
makechartLCA("graphLCA3", "Portrait 3 \n(53%)", dataLCA3)


