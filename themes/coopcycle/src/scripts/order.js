import 'core-js'
import L from 'leaflet'

let jsonFile = location.protocol + '//' + location.hostname
if (location.port) {
  jsonFile += `:${location.port}`
}
jsonFile += '/coopcycle.json'

var map = L.map('coops-map', { scrollWheelZoom: false })
map.setView([0, 0], 13)

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map)

const layerGroup = new L.LayerGroup()
const featureGroup = new L.featureGroup()

let data

function renderMarkers(country) {

  layerGroup.clearLayers()
  featureGroup.clearLayers()

  const coops = data.filter(coop => coop.country === country && coop.coopcycle_url)

  const markers = coops.map(coop => {
    const marker = L.marker([coop.latitude, coop.longitude])
    const popup = L.popup()
      .setContent(`<div>
        <div class="mb-2 text-center">
          <strong>${coop.name}</strong>
          <small class="text-muted d-block">${coop.city}</small>
        </div>
        <a class="btn btn-primary" href="${coop.coopcycle_url}" target="_blank">Commander</a>
      </div>`)

    marker.bindPopup(popup)

    return marker
  })

  markers.forEach(marker => {
    layerGroup.addLayer(marker)
    featureGroup.addLayer(marker)
  })

  map.addLayer(layerGroup)

  map.fitBounds(featureGroup.getBounds().pad(0.10))
}

$.getJSON(jsonFile).then(response => {
  data = response
  renderMarkers('fr')
})

$('#countries .nav-link').on('click', function(e) {
  e.preventDefault()
  $(e.currentTarget).closest('.nav').find('.nav-link').removeClass('active')
  $(e.currentTarget).addClass('active')
  renderMarkers(e.currentTarget.dataset.country)
})
