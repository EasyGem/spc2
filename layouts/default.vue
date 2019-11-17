<template lang="pug">
  div
    header-component
    nuxt
    footer-component

</template>

<script>
import HeaderComponent from '@/components/common/Header'
import FooterComponent from '@/components/common/Footer'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
