<template lang="pug">
  .offer
    .l-container
      .l-row.offer__row
        .offer__text
          h2.offer__title Создадим любой проект под ваши нужды
          .offer__list
            .offer-list__item 
              span.dash
              span Индивидуальное проектирование
            .offer-list__item 
              span.dash
              span Любых объемов и сложности
            .offer-list__item 
              span.dash
              span Возможно использование чертежей и материалов заказчика
            .offer-list__item 
              span.dash
              span Работаем со всеми регионами
          .offer__actions
            nuxt-link(to="/contact").btn Обсудить заказ

        .l-spacer

        .offer__images
          .offer-images__item: img(src="/img/boat.jpg" alt="Sea plast construction Производство лодок из термопласта пп")
          .offer-images__item: img(src="/img/pipes.jpg" alt="Sea plast construction Производство труб из термопласта пп")
          .offer-images__item: img(src="/img/aqc.jpg" alt="Sea plast construction Производство аквакультуры бассейнов из термопласта пп")


</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '@/assets/style/modules/_offer.sass'
</style>
