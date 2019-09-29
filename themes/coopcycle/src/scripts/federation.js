import 'core-js'

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

if (document.getElementById('coops-map')) {

  $('.map-wrapper').fadeIn()

  let L = require('leaflet'),
    markers = [],
    marker

  var map = L.map('coops-map', { scrollWheelZoom: false })

  L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy;<a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map)

  window.AppData.coops.forEach(
    function(item) {
      marker = L.marker([item.latitude, item.longitude]).addTo(map).on('click', function() {
        // NB : the content will be indexed thanks to the 'no-desktop' div which contains the links to the external pages
        // fill in modal with coop data
        let text = item.text ? (item.text[window.AppData.lang] || item.text['en']) : ''
        $('#coop-modal .modal-content').html(`
            <div class="modal-header">
                <div>
                    <h3>${item.name}</h3>
                    <p class="coop-panel--city">${item.city}, ${window.AppData.countries[item.country]}</p>
                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
              <ul class="modal-sidebar">
                  ${ item.url ? `<li class="modal-sidebar-item"><a target="_blank" href="${item.url}"><i class="fa fa-link"></i>${item.url}</a></li>` : '' }
                  <li class="modal-sidebar-item"><a target="_blank" href="mailto:${item.mail}"><i class="fa fa-envelope"></i>${item.mail}</a></li>
                  ${ item.facebook_url ? `<li class="modal-sidebar-item"><a target="_blank" href="${item.facebook_url}"><i class="fa fa-facebook"></i>${item.facebook_name ? item.facebook_name : item.name}</li></a>`: ""}
                  ${ item.twitter_url ? `<li class="modal-sidebar-item"><a target="_blank" href="${item.twitter_url}"><i class="fa fa-twitter"></i>${item.twitter_handle}</li></a>` : ""}
              </ul>
              ${ text ? `<div class="modal-not-sidebar">${text}</div>` : ""}
            </div>
          </div>
        `)
        $('#coop-modal').modal()
      })
      markers.push(marker)
    }
  )

  // center map
  let group = new L.featureGroup(markers)
  map.fitBounds(group.getBounds().pad(0.10))

}

if (document.getElementById('show-more-services')) {
  document.getElementById('show-more-services').addEventListener('click', function(e) {
    event.preventDefault(e)
    document.getElementById('more-services').style.display = ''
    fadeIn(document.getElementById('more-services'))
    document.querySelectorAll("[href='#show-more-services']")[0].style.display = 'none'
  })
}
