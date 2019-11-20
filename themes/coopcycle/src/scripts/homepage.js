import 'core-js'
import _ from 'lodash'

window._paq = window._paq || []

$('#city-dropdown').on('change', function(e) {
  if (!_.isEmpty($(this).val())) {
    window._paq.push(['trackEvent', 'Homepage', 'selectCity', $(this).find('option:selected').text()])
    window.location.href = $(this).val()
  }
})
