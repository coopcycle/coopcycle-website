import 'core-js'
import _ from 'lodash'

window._paq = window._paq || []

const coops = data.coops.map(item => {item.country("mx")
}

console.log (coops)

coops.forEach(coop=>card(coop))


$('#city-dropdown').on('change', function(e) {
  if (!_.isEmpty($(this).val())) {
    window._paq.push(['trackEvent', 'Homepage', 'selectCity', $(this).find('option:selected').text()])
    window.location.href = $(this).val()
  }
})
