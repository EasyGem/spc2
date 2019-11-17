<template lang="pug">
  div
    production-hat
    production-about

    .l-container
      h2 Продукция  

    services-list
    offer-component


</template>

<script>
import ProductionHat from '@/components/production/ProductionHat'
import ProductionAbout from '@/components/production/ProductionAbout'
import ServicesList from '@/components/common/ServicesList'
import OfferComponent from '@/components/common/Offer'

export default {
  head: {
    title: 'Производство – Sea Plast Construction'
  },
  components: {
    ProductionHat,
    ProductionAbout,
    ServicesList,
    OfferComponent
  }
}
</script>
