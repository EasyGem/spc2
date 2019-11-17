<template lang="pug">
  .footer 
    .l-container
      .l-row
        nuxt-link(to="/").logo
          img(src="/img/logo-white.svg" alt="Sea plast construction Производство конструкций из термопласта")
      .l-row
        .l-row.footer__menu
          nuxt-link(to="/").footer-menu__item.link Главная
          nuxt-link(to="/production").footer-menu__item.link Прозводство
          nuxt-link(to="/contact").footer-menu__item.link Контакты
          nuxt-link(to="/sitemap.xml").footer-menu__item.link Карта сайта
          nuxt-link(to="/policy").footer-menu__item.link Политика конфиденциальности

        .l-row.footer__small-menu
          nuxt-link(to="/product/aquacultire").footer-small-menu__item.link Аквакультура
          nuxt-link(to="/product/boats").footer-small-menu__item.link Лодки
          nuxt-link(to="/product/tanks").footer-small-menu__item.link Емкости и резервуары
          nuxt-link(to="/product/pipes").footer-small-menu__item.link Трубная продукция
          nuxt-link(to="/product/agriculture").footer-small-menu__item.link Сельское хозяйство
          nuxt-link(to="/product/individual").footer-small-menu__item.link Индивидуальный проект

      .l-row.footer__bottom
        p.mr-4 Все права сохранены © 2019
        .l-spacer
        p Дизайн – <a href="https://gusev.me" rel="nofollow" target="_blank">gusev.me</a>

    


</template>

<script>
export default {}
</script>
