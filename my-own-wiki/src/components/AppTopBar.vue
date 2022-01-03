<template>
    <div class="layout-topbar">
        <router-link to="/main" class="layout-topbar-link">
            <p class="topbar-title">Kena</p>
        </router-link>

        <Button class="p-link layout-menu-button layout-topbar-button p-button-text p-button-rounded">
            <i class="pi pi-bars"/>
        </Button>

        <ul class="layout-topbar-menu">
            <li>
                <Button class="p-link layout-topbar-button p-button-text p-button-rounded" @click="onSettingsPress">
                    <i class="pi pi-cog"></i>
                </Button>
                <Avatar
                    icon="pi pi-user"
                    class="p-avatar-circle"
                ></Avatar>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        onSettingsPress() {
            this.$router.push("/main/settings/users")
        }
    }
}
</script>

<style>
.layout-topbar {
    position: fixed;
    height: 5rem;
    z-index: 997;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 2rem;
    background-color: var(--surface-card);
    transition: left .2s;
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 5px rgba(0,0,0,.02), 0px 0px 2px rgba(0,0,0,.05), 0px 1px 4px rgba(0,0,0,.08);
}

.topbar-title {
    font-family: 'Lobster', cursive;
    font-size: 1.5rem;
    width: 300px;
    border-radius: 3px;
    color: var(--text-color-secondary);
}

.layout-topbar-link {
    text-decoration: none;
}

.topbar-title:hover {
    color: var(--text-color);
    background-color: var(--surface-hover);
}

.layout-topbar-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: var(--text-color-secondary);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: background-color .2s;
}

.layout-topbar-menu {
    margin: 0 0 0 auto;
    padding: 0;
    list-style: none;
    display: flex;
}
</style>