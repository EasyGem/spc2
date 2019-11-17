<template lang="pug">
  .header
    .l-container
      .l-row.header__row
        nuxt-link(to="/").logo
          img(src="/img/logo.svg" alt="Sea plast construction Производство конструкций из термопласта")
        .l-spacer
        .header__menu
          nuxt-link(to="/").header-menu__item.link Главная
          nuxt-link(to="/production").header-menu__item.link Прозводство

          a.header-menu__item.mr-3.dropdown(:class='{active: dropdown}' v-click-outside="hideDropdown")
            span(@click="showDropdown")
              | Продукция
              img(src="/img/angle.svg" alt="Sea plast construction Производство конструкций из термопласта").ml-2
            .dropdown__list
              nuxt-link(to="/product/product").dropdown-list__item Аквакультура
              nuxt-link(to="/product/boats").dropdown-list__item Лодки
              nuxt-link(to="/product/tanks").dropdown-list__item Емкости и резервуары
              nuxt-link(to="/product/pipes").dropdown-list__item Трубная продукция
              nuxt-link(to="/product/agriculture").dropdown-list__item Сельское хозяйство
              nuxt-link(to="/product/individual").dropdown-list__item Индивидуальный проект
          nuxt-link(to="/contact").header-menu__item.link Контакты

          img(src="/img/navbar.svg" alt="Sea plast construction Производство конструкций из термопласта" @click="toggleSidebar").link.header__navbar

        .header__mobile-menu(:class="{active: sidebar}" @click.self="toggleSidebar")

          .header__mobile-menu-wrapper
            img(src="/img/close.svg" alt="Sea plast construction Производство конструкций из термопласта" @click="toggleSidebar").header__mobile-menu__close

            nuxt-link(to="/").header-mobile-menu__item.fz-20.link Главная
            nuxt-link(to="/production").header-mobile-menu__item.fz-20.link Прозводство
            nuxt-link(to="/contact").header-mobile-menu__item.fz-20.link Контакты

            span Продукция:
            nuxt-link(to="/product/product").header-mobile-menu__item.link Аквакультура
            nuxt-link(to="/product/boats").header-mobile-menu__item.link Лодки
            nuxt-link(to="/product/tanks").header-mobile-menu__item.link Емкости и резервуары
            nuxt-link(to="/product/pipes").header-mobile-menu__item.link Трубная продукция
            nuxt-link(to="/product/agriculture").header-mobile-menu__item.link Сельское хозяйство
            nuxt-link(to="/product/individual").header-mobile-menu__item.link Индивидуальный проект


    


</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  data: () => ({
    dropdown: false,
    sidebar: false
  }),
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar
    },
    showDropdown() {
      this.dropdown = true
    },
    hideDropdown() {
      this.dropdown = false
    }
  },
  watch: {
    '$route.name': function() {
      this.hideDropdown()
      this.sidebar = false
    }
  },
  directives: {
    ClickOutside
  }
}
</script>
