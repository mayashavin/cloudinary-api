import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VideoPlayer from '../../vue-video-player/dist/index.esm-bundler.js'

const app = createApp(App)
app.mount('#app')
app.use(VideoPlayer, {
  cloud: {
    cloudName: 'mayashavin'
  }
})

