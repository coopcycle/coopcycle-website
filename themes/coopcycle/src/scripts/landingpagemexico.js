import 'core-js'
import _ from 'lodash'

window._paq = window._paq || []

const coops = $('#city-dropdown').data('coops')
const $coopCards = $('#coop-cards')

$('#city-dropdown').on('change', function(e) {

  const value = $(this).val()

  if (!_.isEmpty(value)) {
    const coopsForCity = _.filter(coops, coop => coop.city.startsWith(value))
    $coopCards.find('[data-coop-name]').addClass('d-none')
    coopsForCity.forEach(coop => {
      $coopCards.find(`[data-coop-name="${coop.name}"]`).removeClass('d-none')
    })
  }
})
