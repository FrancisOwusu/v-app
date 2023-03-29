import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
// createApp.filter('snippet', val => {
//     if (!val || typeof (val) != 'string') return '';
//     val = val.split(0, 100);
//     return val;
// })
createApp(App).mount('#app')
