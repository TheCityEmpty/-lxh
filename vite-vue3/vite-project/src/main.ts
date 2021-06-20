import { createApp } from 'vue'
import App from './components/base/App.vue'
import '@/assets/atom-css/index.js'
import router from '@/routers/index.js'
import '@/assets/rem/rem.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
