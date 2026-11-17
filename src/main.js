import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import './style.css'

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'nightLetter',
    themes: {
      nightLetter: {
        dark: true,
        colors: {
          background: '#080d20',
          surface: '#121a31',
          primary: '#d9a5b0',
          secondary: '#b9a7d8',
          accent: '#f0d5bd',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
