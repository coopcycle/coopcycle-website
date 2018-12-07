function fadeIn(el) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

let SmoothScroll = require('smooth-scroll')
new SmoothScroll('a[href*="#"]', {speed: 700})

if (document.getElementById('coops-map')) {
    let L = require('leaflet'),
        markers = [],
        marker

    var map = L.map('coops-map')

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
    }).addTo(map)

    window.AppData.coops.forEach(
        function (item) {
            marker = L.marker([item.latitude, item.longitude]).addTo(map)
            marker.bindPopup(
              `
                ${item.name ? item.name : item.city}<br>
                ${item.coopcycleUrl ? `<a class="btn-buy" href="${item.coopcycleUrl}" target="_blank">Commander dès maintenant !</a><br>` : ''}
                ${item.url ? `<a href="${item.url}" target="_blank">Visiter le site</a>` : ''}
              `
            )
            markers.push(marker)
        }
    )

    // center map
    let group = new L.featureGroup(markers)
    map.fitBounds(group.getBounds().pad(0.25))
}

document.getElementById('show-more-services').addEventListener('click', function (e) {
  event.preventDefault(e)
  document.getElementById('more-services').style.display = ''
  fadeIn(document.getElementById('more-services'))
})


// Map helpers

function init(id, center, zoom = 13, zoomControl = true) {

  if (!center && window.AppData && window.AppData.MapHelper && window.AppData.MapHelper.center) {
    let [ latitude, longitude ] = window.AppData.MapHelper.center.split(',')
    if (latitude && longitude) {
      center = [ parseFloat(latitude), parseFloat(longitude) ]
    }
  }

  var map = L.map(id, { scrollWheelZoom: false, zoomControl })

  if (center && zoom) {
    map.setView(center, zoom)
  }

  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map)

  return map
}

