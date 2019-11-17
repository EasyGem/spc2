<template lang="pug">
  .production-hat
    .l-container
      .l-row.production-hat__row
        .production-hat__text
          h2 Производство
          p.mt-7 Текст о качестве производства. Мы проектируем, производим и устанавливаем конструкции и оборудование из термопластов для морского сектора, промышленности и сельского хозяйства.
          nuxt-link(to='contact').btn.mt-10 Сделать заказ
        
        .production-hat__image
          img(src="/img/production-hat.jpg")

</template>

<style lang="sass" scoped>
@import '@/assets/style/modules/_production-hat.sass'
</style>