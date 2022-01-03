<template>
    <div class="container">
        <TabMenu :model="tab_items">
        </TabMenu>
        <div class="container-settings">
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        tab_items: [
            {
                label: 'Benutzer',
                icon: 'pi pi-user',
                to: '/main/settings/users'
            },
            {
                label: 'API',
                icon: 'pi pi-database',
                to: '/main/settings/api'
            }
        ]
    })
}
</script>