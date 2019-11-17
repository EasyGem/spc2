<template lang="pug">
  .home-hat
    .l-container
      .l-row.home-hat__row
        .home-hat__text
          h1.home-hat__title Производство конструкций из термопласта  
          .home-hat__list
            .home-hat-list__item 
              span.dash 
              span Работа с любыми заказами и объемами производства
            .home-hat-list__item 
              span.dash 
              span Индивидуальное проектирование под нужды производства
            .home-hat-list__item 
              span.dash 
              span Гарантия сроков и качества
          .home-hat__actions
            nuxt-link(to="/contact").btn Сделать заказ
            nuxt-link(to="/production").btn.btn--text О производстве
        .l-spacer

        .home-hat__images
          .home-hat-images__item: img(src="/img/boat.jpg" alt="Sea plast construction Производство лодок из термопласта пп")
          .home-hat-images__item: img(src="/img/pipes.jpg" alt="Sea plast construction Производство труб из термопласта пп")
          .home-hat-images__item: img(src="/img/aqc.jpg" alt="Sea plast construction Производство аквакультуры бассейнов из термопласта пп")


</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '@/assets/style/modules/_home-hat.sass'
</style>
