<template lang="pug">
  .services-list
    .l-container
      .l-row.services-list__row
        nuxt-link(to='/product/aquaculture').services-list__item
          h3 Аквакультура
          a.link.mt-2 Подробнее

          .services-list-item__info
            p 
              span.dash.dash--thin 
              | Садки для разведения рыбы 
            p 
              span.dash.dash--thin 
              | Понтоны и причалы
            p 
              span.dash.dash--thin
              | Поплавки для поддержания противоптичих сетей
            p 
              span.dash.dash--thin 
              | Бассейны для выращиания раков и устриц

        nuxt-link(to='/product/boats').services-list__item
          h3 Рабочие лодки
          a.link.mt-2 Подробнее

          .services-list-item__info
            p 
              span.dash.dash--thin 
              | Туристическая индустрия
            p 
              span.dash.dash--thin
              | Береговая охрана
            p 
              span.dash.dash--thin 
              | Нефтяная и газовая промышленности
            p 
              span.dash.dash--thin 
              | Компании аквакультуры
            p 
              span.dash.dash--thin 
              | Водолазные службы

        nuxt-link(to='/product/tanks').services-list__item
          h3 Емкости и резервуары
          a.link.mt-2 Подробнее

          .services-list-item__info
            p 
              span.dash.dash--thin 
              | Баки для воды
            p 
              span.dash.dash--thin
              | Накопительные баки
            p 
              span.dash.dash--thin 
              | Емкости для топлива
            p 
              span.dash.dash--thin 
              | Бункеры для сыпучих веществ
            p 
              span.dash.dash--thin 
              | Емкости для хранения кислот, солей и щелочей

        nuxt-link(to='/product/pipes').services-list__item
          h3 Оборудование из ПНД/ПП
          a.link.mt-2 Подробнее

          .services-list-item__info
            p 
              span.dash.dash--thin 
              | Вентиляция из пластика
            p 
              span.dash.dash--thin
              | Гальванические ванны
            p 
              span.dash.dash--thin 
              | Футеровка оборудования
            p 
              span.dash.dash--thin 
              | Нестандартное оборудование
            p 
              span.dash.dash--thin 
              | Сопутствующее оборудование
          
        nuxt-link(to='/product/individual').services-list__item.services-list__item--dark
          h3 Любые проекты
          a.link.mt-2 Подробнее

          .services-list-item__info
            p 
              span.dash.dash--thin 
              | Индивидуальное проектирование
            p 
              span.dash.dash--thin
              | Любых объемов и сложности
            p 
              span.dash.dash--thin 
              | Возможно использование чертежей и материалов заказчика
            p 
              span.dash.dash--thin 
              | Работаем со всеми регионами

        nuxt-link(to='/product/agriculture').services-list__item
          h3 Сельское хозяйство
          a.link.mt-2 Подробнее

          .services-list-item__info
            p 
              span.dash.dash--thin 
              | Оборудование для животноводства и птицеводства
            p 
              span.dash.dash--thin
              | Оборудование для выращивания и разведения живой рыбы
            p 
              span.dash.dash--thin 
              | Сопутствующее оборудование
              

</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '@/assets/style/modules/_services-list.sass'
</style>
