<template>
    <div class="layout-menu-container">
        <div class="layout-sidebar-filter">
            <InputText/>
        </div>
        <div class="layout-sidebar-menu">
            <Menu :model="aAllClasses">
                <template #item="{item}">
                    <a class="p-menuitem-text" href="item.link">{{ item.name }}</a>
                </template>
            </Menu>
        </div>
    </div>    
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                label: 'Dashboard',
                icon: 'pi pi-home',
                group: true
            },
            {
                label: 'Sub Dashboard',
                group: false
            }
        ],
        aAllClasses: []
    }),

    methods: {
        async getAllClasses() {
            let oResponse = await this.$http.get("/classes/")
            console.log(oResponse)
            if(oResponse){
                this.aAllClasses = oResponse.data
            }
        }
    },

    created() {
        this.getAllClasses()
    }
}
</script>

<style>
.layout-sidebar-menu{
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.layout-sidebar-menu-menu{
    list-style-type: none;
}

</style>