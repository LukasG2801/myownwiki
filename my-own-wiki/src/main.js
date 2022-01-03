import 'primeicons/primeicons.css'
import 'primevue/resources/themes/lara-light-teal/theme.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import { store } from './store/store'

/**
 * Some globally used components
 * those can be registered here so they have not to be 
 * registered in each single component
 */
import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Menu from 'primevue/menu'
import Avatar from 'primevue/avatar'
import TabMenu from 'primevue/tabmenu'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Chip from 'primevue/chip'
import Toolbar from 'primevue/toolbar'
import Dialog from 'primevue/dialog'
import ToastService from 'primevue/toastservice'
import ListBox from 'primevue/listbox'

// UI-Components
import PrimeVue from 'primevue/config'

const app = createApp(App)
const base = axios.create({
    baseURL: 'http://localhost:4000'
})

app.config.globalProperties.$http = base

app.component("Card", Card)
app.component("Button", Button)
app.component("InputText", InputText)
app.component("Message", Message)
app.component("Menu", Menu)
app.component("Avatar", Avatar)
app.component("TabMenu", TabMenu)
app.component("DataTable", DataTable)
app.component("Column", Column)
app.component("Chip", Chip)
app.component("Toolbar", Toolbar)
app.component("Dialog", Dialog)
app.component("ListBox", ListBox)

app.use(PrimeVue)
app.use(router)
app.use(store)
app.use(ToastService)

app.mount('#app')