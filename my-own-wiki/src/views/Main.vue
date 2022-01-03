<template>
    <div id="container">
        <AppTopBar></AppTopBar>

        <div class="layout-sidebar">
            <SideBar></SideBar>
        </div>
        
        <div class="layout-main-container">
            <div class="layout-main">
                <router-view/>
            </div>
        </div>

    </div>
</template>
<script>
import VueJwtDecode from 'vue-jwt-decode'
import AppTopBar from '../components/AppTopBar'
import SideBar from '../components/SideBar'

export default {
    data: () => ({
        user: {}
    }),
    
    components: {
        AppTopBar,
        SideBar
    },

    methods: {
        async _getUser() {
            let token = localStorage.getItem("jwt")
            let decoded = VueJwtDecode.decode(token)
            this.user = decoded
            this.$store.commit('set_user', this.user)
        } 
    },

    created() {
        this._getUser()
    }
}
</script>

<style scoped>
.container{
    width: 100%; 
    height: 100%; 
    padding: 0;
    margin: 0;
}

.navbar {
    position: fixed;
    width: 100%;
    height: 50px;
    background: black;
    margin: 0;
    padding: 0;
}

.layout-sidebar {
    position: fixed;
    width: 300px;
    height: calc(100vh);
    z-index: 999;
    overflow-y: auto;
    user-select: none; 
    top: 5.5rem;
    left: 0;
    transition: transform .2s, left .2s;
    background-color: var(--surface-overlay);
    padding: 1.5rem;
    box-shadow: 0px 3px 5px rgba(0,0,0,.02), 0px 0px 2px rgba(0,0,0,.05), 0px 1px 4px rgba(0,0,0,.08);
}

.layout-main-container {
    display: flex; 
    flex-direction: column; 
    min-height: 90vh;
    justify-content: space-between;
    padding-left: 300px;
    padding-top: 5.5rem;
    transition: margin-left .2s;
}

.layout-main {
    flex: 1 1 auto;
}
</style>