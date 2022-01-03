<template>
    <div class="container">
        <Toolbar>
            <template #start>
                <Button 
                    label="Neue Klasse anlegen" 
                    icon="pi pi-plus"
                    class="p-button-sm"
                    @click="onShowNewClassDialog"
                ></Button>
            </template>
        </Toolbar>
        <DataTable
            :value="aAllClasses"
            responsiveLayout="scroll"
        >
            <template #header>
                Alle Klassen
            </template>
            
            <Column field="name" header="Name"></Column>
            <Column field="heading" header="Titel"></Column>
            <Column field="object" header="Objekt"></Column>
            <Column field="extensions" header="Erweiterungen"></Column>
            <Column field="description" header="Beschreibung"></Column>
        </DataTable>
        <Dialog header="Neue Klasse anlegen" v-model:visible="display_new_class_dialog" class="class-dialog">
            <div class="p-fluid">
                <div class="p-field p-grid">
                    <label for="classname" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Klassenname</label>
                    <div class="p-col-12 p-md-10">
                        <InputText v-model="NewClass.name" id="classname" class="class-dialog-input" type="text"></InputText>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="heading" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Titel</label>
                    <div class="p-col-12 p-md-10">
                        <InputText v-model="NewClass.heading" id="heading" class="class-dialog-input" type="text"></InputText>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="object" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Objekt</label>
                    <div class="p-col-12 p-md-10">
                        <InputText v-model="NewClass.object" id="object" class="class-dialog-input" type="text"></InputText>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="extensions" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Erweiterungen</label>
                    <div class="p-col-12 p-md-10">
                        <InputText v-model="NewClass.extensions" id="description" class="class-dialog-input" type="text"></InputText>
                    </div>
                </div>
                <div class="p-field p-grid">
                    <label for="description" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Beschreibung</label>
                    <div class="p-col-12 p-md-10">
                        <InputText v-model="NewClass.description" id="description" class="class-dialog-input" type="text"></InputText>
                    </div>
                </div>
            </div>

            <template #footer>
                <Button label="Abbrechen" icon="pi pi-times" class="p-button-text" @click="cancelNewClass"/>
                <Button label="Anlegen" icon="pi pi-check" autofocus @click="submitNewClass"/>
            </template>
        </Dialog>
    </div>
</template>

<script>
export default {
    data: () => ({
        display_new_class_dialog: false,
        NewClass: {
            name: '',
            heading: '',
            object: '',
            extensions: '',
            description: ''
        },
        aAllClasses: []
    }),
    methods: {
        onShowNewClassDialog(){
            this.display_new_class_dialog = true
        },

        cancelNewClass() {
            this.display_new_class_dialog = false
        },

        async submitNewClass() {
            if(Object.values(this.NewClass).every(x => x === null || x === '')){
                return
            }

            await this.$http.post("/classes/register", this.NewClass)
                .then((response) => {
                    console.log(response)
                    this.$toast.add({severity: 'success', summary: 'Klasse angelegt', detail: 'Klasse wurde erfolgreich angelegt', life: 3000})
                    this.display_new_class_dialog = false
                }, (error) => {
                    console.log(error)
                    this.$toast.add({severity: 'error', summary: 'Klasse nicht angelegt', detail: 'Klasse wurde nicht angelegt', life: 3000})
                }) 
        },

        async getAllClasses() {
            let oResponse = await this.$http.get("/classes/")
            console.log(oResponse)
            if(oResponse){
                this.aAllClasses = oResponse.data
            }
        }
    },
    
    created(){
        this.getAllClasses()
    }
}
</script>

<style>
.class-dialog{
    width: 50vw;
    height: 50vh;
}

.class-dialog-input{
    width: 80%;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
}
</style>