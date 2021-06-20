import { App } from 'vue'
import Refresh from './index.vue'

Refresh.install = (app: App): void => {
    app.component(Refresh.name, Refresh)
}

export default Refresh