module.exports = {
  // mode: 'spa',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Производство конструкций из термопласта – Sea Plast Construction',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Sea Plast Construction – компания, целью которой является предоставление комплексных решений для морского сектора. Наша компания ориентирована на оказание полного спектра услуг по проектированию, производству и установке оборудования, изготовленного из термопластов, для использования в морской сфере.`
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/style/main.sass'],

  styleResources: {
    sass: ['assets/style/variables.sass']
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: 'http://4dea.ru',
    browserBaseURL: 'http://4dea.ru'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
