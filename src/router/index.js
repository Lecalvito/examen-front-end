import { createRouter, createWebHistory } from 'vue-router'
import CalculoNotas from '../views/CalculoNotas.vue'
import Registro from '../views/Registro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/calificaciones' },
    { path: '/calificaciones', name: 'Calificaciones', component: CalculoNotas },
    { path: '/registro', name: 'Registro', component: Registro }
  ]
})

export default router
