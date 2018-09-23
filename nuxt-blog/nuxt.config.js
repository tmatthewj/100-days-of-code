const pkg = require('./package')
const bodyParser = require('body-parser')
const axios = require('axios')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/date-filter.js',
    '~plugins/core-components.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

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
  env: {
    baseUrl: 'sample',
    fbApiKey: 'sample',
    serverUrl: 'sample'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],

  generate: {
    routes: function() {
      return axios.
        get("https://nuxt-blog-tmatthewj.firebaseio.com/posts.json")
        .then(res => {
          const routes = []
          for (const key in res.data) {
            routes.push({
              route: "/posts/" + key,
              payload: {postData: res.data[key]}
            })
          }
          console.log("routes in generate", JSON.stringify(routes))
          return routes;
        })
    }
  }

}
