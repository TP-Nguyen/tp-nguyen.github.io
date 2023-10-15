import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import './style.scss'
import App from './App.vue'
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';
// import router from './plugins/router';


// createApp(App).mount('#app')
createApp(App)
.use(i18n)
.use(vuetify)
// .use(router)
.use(MotionPlugin)
.mount('#app')