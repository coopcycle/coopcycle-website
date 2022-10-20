import 'core-js'
import L from 'leaflet'
import 'leaflet.markercluster'

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

function propLink(prop, value) {
  if (prop === 'mail') {
    return `mailto:${value}`
  }

  return value
}

function propText(prop, item) {
  if (prop === 'mail' || prop === 'url') {
    return item[prop]
  }

  if (prop === 'twitter_url') {
    return '@' + item[prop].substring(item[prop].lastIndexOf('/') + 1)
  }

  if (prop === 'instagram_url') {
    const withoutTrailingSlash = item[prop].replace(/\/$/, '')
    return '@' + withoutTrailingSlash.substring(withoutTrailingSlash.lastIndexOf('/') + 1)
  }

  if (prop === 'facebook_url') {
    return item.name
  }

  return item[prop]
}

if (document.getElementById('coops-map')) {

  let jsonFile = location.protocol + '//' + location.hostname
  if (location.port) {
    jsonFile += `:${location.port}`
  }
  jsonFile += '/coopcycle.json'

  $('.map-wrapper').fadeIn()

  var map = L.map('coops-map', { scrollWheelZoom: false })

  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map)

  $.getJSON(jsonFile, { _: new Date().getTime() }).then(data => {

    const markers = data.map(item => {

      return L.marker([item.latitude, item.longitude]).on('click', function() {

        const text = item.text ? (item.text[window.AppData.lang] || item.text['en']) : ''

        $('#coop-modal').find('.modal-title').text(item.name)
        $('#coop-modal').find('.coop-panel--city')
          .text(`${item.city}, ${window.AppData.countries[item.country] || item.country}`)

        $('#coop-modal').find('.modal-sidebar [data-prop]').each(function () {

          const prop = $(this).data('prop')

          if (item[prop]) {

            $(this)
              .find('a')
              .attr('href', propLink(prop, item[prop]))
              .find('span')
              .text(propText(prop, item))

            $(this).removeClass('d-none')
          } else {
            $(this).addClass('d-none')
          }
        })

        if (text) {
          $('#coop-modal').find('.modal-not-sidebar').html(text)
        } else {
          $('#coop-modal').find('.modal-not-sidebar').addClass('d-none')
        }

        $('#coop-modal').modal()
      })

    })

    const clusters = L.markerClusterGroup({
      showCoverageOnHover: false,
    })
    markers.forEach(marker => clusters.addLayer(marker))
    map.addLayer(clusters)

    // center map
    let group = new L.featureGroup(markers)
    map.fitBounds(group.getBounds().pad(0.10))

  })
}

if (document.getElementById('show-more-services')) {
  document.getElementById('show-more-services').addEventListener('click', function(e) {
    event.preventDefault(e)
    document.getElementById('more-services').style.display = ''
    fadeIn(document.getElementById('more-services'))
    document.querySelectorAll("[href='#show-more-services']")[0].style.display = 'none'
  })
}
