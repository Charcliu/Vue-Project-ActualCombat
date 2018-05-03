import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})
