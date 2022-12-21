import { createApp } from 'vue'
import App from './App.vue'

import './assets/pure-min.css'

const app = createApp(App);
app.config.globalProperties.window = window
app.mount('#app');
