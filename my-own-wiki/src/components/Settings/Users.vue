<template>
    <div class="container">
        <DataTable
            :value="users"
            responsiveLayout="scroll"
        >
            <template #header>
                Benutzer
            </template>
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="role" header="Rolle">
                <template #body="slotProps">
                    <Chip :label="slotProps.data.role"/>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script>
export default {
    data: () => ({
        users: []
    }),
    
    computed: {

    },
    
    methods: {
        async getAllUsers() {
            let oResponse = await this.$http.get("/users");
            this.users = oResponse.data
        }
    },

    created() {
        this.getAllUsers()
    }
}
</script>