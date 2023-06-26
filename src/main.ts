import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';

// createApp(App).mount('#app')
createApp(App)
.use(i18n)
.use(vuetify)
.mount('#app')