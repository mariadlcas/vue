
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home'
import GestionIcon from './components/GestionIcon'
import GestionQR from './components/GestionQR'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/icon', component: GestionIcon },
        { path: '/qr', component: GestionQR },
    ]
});

const app = createApp(App) 
app.use(router);
app.mount('#app')