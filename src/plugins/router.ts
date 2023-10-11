import {createRouter, createWebHistory} from 'vue-router'

const routes = [
     {path:'/', component: () => import ('../App.vue') },
     {path:'/aboutme', component: () => import ('../components/AboutMe/Description.vue')},
     {path:'/experience', component: () => import ('../components/Experience/Timeline.vue')},
     {path:'/project', component: () => import ('../components/Project/ProjectView.vue')}
     // {path:'/contact', component: () => import ('../components/AboutMe/Contact.vue')}
     // {path:'/contact', component: }
     // {path:'/', component: }
];
const router = createRouter({
     history: createWebHistory(),
     routes,
});

export default router;