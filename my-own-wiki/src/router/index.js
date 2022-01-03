import { createWebHistory, createRouter } from 'vue-router'

// Views
import VLogin from '../views/Login.vue'
import VMain from '../views/Main.vue'
import VSettings from '../views/Settings.vue'
import CUsers from '../components/Settings/Users.vue'
import CApi from '../components/Settings/API.vue'


//Classes 
import CLWorkspaceAdapter from '../components/classes/WorkspaceAdapter.vue'

const routes = [{
    path: '/',
    name: 'Login',
    component: VLogin
}, {
    path: '/main',
    name: 'Main',
    component: VMain,
    children: [{
        path: '/main/settings',
        name: 'Settings',
        component: VSettings,
        children: [{
            path: '/main/settings/users',
            name: 'UserSettings',
            component: CUsers
        }, {
            path: '/main/settings/api',
            name: 'APISettings',
            component: CApi
        }]
    }, {
        path: '/main/workspaceadapter',
        name: 'Workspace Adapter',
        component: CLWorkspaceAdapter
    }]
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("jwt") === null) {
            next({
                path: '/'
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router