var dataMapFirst =[
    {
      "id": "FR",
      "value": 1
    },
    {
      "id": "GB",
      "value": 2
    },
    {
      "id": "IT",
      "value": 1
    },
    {
      "id": "AT",
      "value": 0
    },
    {
      "id": "IE",
      "value": 0
    },
    {
      "id": "DK",
      "value": 0
    },
    {
      "id": "FI",
      "value": 0
    },
    {
      "id": "SE",
      "value": 0
    },
    {
      "id": "ES",
      "value": 0
    },
    {
      "id": "GR",
      "value": 0
    },
    {
      "id": "DE",
      "value": 0
    },
    {
      "id": "BE",
      "value": 0
    },
    {
      "id": "LU",
      "value": 0
    },
    {
      "id": "NL",
      "value": 0
    },
    {
      "id": "PT",
      "value": 0
    },
    {
      "id": "LT",
      "value": 0
    },
    {
      "id": "LV",
      "value": 0
    },
    {
      "id": "CZ",
      "value": 0
    },
    {
      "id": "SK",
      "value": 0
    },
    {
      "id": "SI",
      "value": 0
    },
    {
      "id": "EE",
      "value": 0
    },
    {
      "id": "HU",
      "value": 0
    },
    {
      "id": "CY",
      "value": 0
    },
    {
      "id": "MT",
      "value": 0
    },
    {
      "id": "PL",
      "value": 0
    },
    {
      "id": "RO",
      "value": 0
    },
    {
      "id": "BG",
      "value": 0
    },
    {
      "id": "HR",
      "value": 0
    }
  ]

var dataMapSec = [
  {
    "id": "DE",
    "value": 2
  },
  {
    "id": "ES",
    "value": 3
  },
  {
    "id": "FR",
    "value": 6
  },
  {
    "id": "GB",
    "value": 4
  },
  {
    "id": "IT",
    "value": 2
  },
  {
    "id": "AT",
    "value": 0
  },
  {
    "id": "IE",
    "value": 0
  },
  {
    "id": "DK",
    "value": 0
  },
  {
    "id": "FI",
    "value": 0
  },
  {
    "id": "SE",
    "value": 0
  },
  {
    "id": "GR",
    "value": 0
  },
  {
    "id": "BE",
    "value": 0
  },
  {
    "id": "LU",
    "value": 0
  },
  {
    "id": "NL",
    "value": 0
  },
  {
    "id": "PT",
    "value": 0
  },
  {
    "id": "LT",
    "value": 0
  },
  {
    "id": "LV",
    "value": 0
  },
  {
    "id": "CZ",
    "value": 0
  },
  {
    "id": "SK",
    "value": 0
  },
  {
    "id": "SI",
    "value": 0
  },
  {
    "id": "EE",
    "value": 0
  },
  {
    "id": "HU",
    "value": 0
  },
  {
    "id": "CY",
    "value": 0
  },
  {
    "id": "MT",
    "value": 0
  },
  {
    "id": "PL",
    "value": 0
  },
  {
    "id": "RO",
    "value": 0
  },
  {
    "id": "BG",
    "value": 0
  },
  {
    "id": "HR",
    "value": 0
  }
]

var dataMapThird = [
  {
    "id": "BE",
    "value": 5
  },
  {
    "id": "DE",
    "value": 2
  },
  {
    "id": "FR",
    "value": 14
  },
  {
    "id": "GB",
    "value": 3
  },
  {
    "id": "IT",
    "value": 7
  },
  {
    "id": "NL",
    "value": 8
  },
  {
    "id": "AT",
    "value": 0
  },
  {
    "id": "IE",
    "value": 0
  },
  {
    "id": "DK",
    "value": 0
  },
  {
    "id": "FI",
    "value": 0
  },
  {
    "id": "SE",
    "value": 0
  },
  {
    "id": "ES",
    "value": 0
  },
  {
    "id": "GR",
    "value": 0
  },
  {
    "id": "LU",
    "value": 0
  },
  {
    "id": "PT",
    "value": 0
  },
  {
    "id": "LT",
    "value": 0
  },
  {
    "id": "LV",
    "value": 0
  },
  {
    "id": "CZ",
    "value": 0
  },
  {
    "id": "SK",
    "value": 0
  },
  {
    "id": "SI",
    "value": 0
  },
  {
    "id": "EE",
    "value": 0
  },
  {
    "id": "HU",
    "value": 0
  },
  {
    "id": "CY",
    "value": 0
  },
  {
    "id": "MT",
    "value": 0
  },
  {
    "id": "PL",
    "value": 0
  },
  {
    "id": "RO",
    "value": 0
  },
  {
    "id": "BG",
    "value": 0
  },
  {
    "id": "HR",
    "value": 0
  }
]

function makeMapLegend(name,data){ AmCharts.makeChart( name, {
    "type": "map",
    "theme": "light",
    "colorSteps": 14,  
    "maxValue":14,
    "minValue":0,
    "hideCredits": true,
    "dataProvider": {
      "map": "worldHigh",
      "zoomLevel": 7,
      "zoomLongitude": 4,
      "zoomLatitude": 52,
      "areas": data
    },
  
    "areasSettings": {
      "rollOverOutlineColor": "#FFFFFF",
      "alpha": 1,
      "unlistedAreasAlpha": 0,
      "color": "#FFFFFF",                
      "colorSolid": "#E4032E",  
      "outlineColor": "#000000",
      "outlineAlpha": 1,
      "rollOverColor": "#E4032E",      
      "balloonText": "[[title]]: [[value]] incidents"      
    },
    "balloon": {
        "adjustBorderColor": true,
        "color": "#000000",
        "cornerRadius": 5,
        "fillColor": "#FFFFFF"
      },
    "legend": {
        "labelText": "Nombre d'incidents",
        "enabled":true,
        "position": "bottom",
        "useGraphSettings": true,
        "align": "right",
        "combineLegend": true,
        "autoMargins": true,
        "backgroundColor": "#000000"
      },
      "valueLegend": {
        "right": 5,
        "minValue": 0,
        "maxValue": 14
            },
      "zoomControl": {
        "zoomControlEnabled": false,
        "homeButtonEnabled": false
      },
      "linesSettings": {
        "color": "#000000"
      }
  
  } );
}
function makeMapNoLegend(name,data){ AmCharts.makeChart( name, {
  "type": "map",
  "theme": "light",
  "colorSteps": 14,  
  "maxValue":14,
  "minValue":0,
  "hideCredits": true,
  "dataProvider": {
    "map": "worldHigh",
    "zoomLevel": 7,
    "zoomLongitude": 4,
    "zoomLatitude": 52,
    "areas": data
  },

  "areasSettings": {
    "rollOverOutlineColor": "#FFFFFF",
    "alpha": 1,
    "unlistedAreasAlpha": 0,
    "color": "#FFFFFF",                
    "colorSolid": "#E4032E",  
    "outlineColor": "#000000",
    "outlineAlpha": 1,
    "rollOverColor": "#E4032E",      
    "balloonText": "[[title]]: [[value]] incidents"      
  },
  "balloon": {
      "adjustBorderColor": true,
      "color": "#000000",
      "cornerRadius": 5,
      "fillColor": "#FFFFFF"
    },
    "zoomControl": {
      "zoomControlEnabled": false,
      "homeButtonEnabled": false
    },
    "linesSettings": {
      "color": "#000000"
    }

} );
}


var FirstMap = makeMapNoLegend("map", dataMapFirst )
var SecMap = makeMapNoLegend("map2", dataMapSec)
var ThirdMap = makeMapLegend("map3", dataMapThird)