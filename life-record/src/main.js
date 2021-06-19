import { createApp } from 'vue'
import App from '@/components/base/App.vue'
import router from '@/routers/index.js'
import '@/assets/css/init.less'

const app = createApp(App)

app.use(router)
app.mount('#app')
