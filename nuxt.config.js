const pkg = require('./package')

let title="全球首个P3D 2.0公平合约 PT7D official website - The world's first P3D 2.0 fair smart contract"
let description="PT7D is the first contract of the b0 team, the contract is a P3D-like smart contract, the price is determined by the algorithm, and the fair contract of the lucky prize game is added. The holder of the key will receive a dividend, and the future contract of the team will also be awarded a dividend to PT7D."
let keywords="PT7D,PT7D官网,P3D 2.0,类P3D,公平合约,币灵,PT7D,P3D 2.0,P3D-like,fair contract,b0 team"

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content:description },
      { hid: 'keywords', name: 'keywords', content: keywords }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL:'http://test.pt7d.com',
    browserBaseURL:'http://test.pt7d.com'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  
}








    // "dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server",

