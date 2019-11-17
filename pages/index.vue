<template lang="pug">
  div
    home-hat
    home-about
    services-list
    home-process
    home-company
    contact-section

</template>

<script>
import HomeHat from '@/components/home/HomeHat'
import HomeAbout from '@/components/home/HomeAbout'
import ServicesList from '@/components/common/ServicesList'
import HomeProcess from '@/components/home/HomeProcess'
import HomeCompany from '@/components/home/HomeCompany'
import ContactSection from '@/components/common/ContactSection'

export default {
  components: {
    HomeHat,
    HomeAbout,
    ServicesList,
    HomeProcess,
    HomeCompany,
    ContactSection
  }
}
</script>
