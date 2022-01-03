<template>
  <div
    class="flex align-items-center justify-content-center pt-8 login-card-container"
  >
      <Card id="login_card">
          <template #title>
              Login
          </template>

          <template #content>
                <div class="flex align-items-center justify-content-center flex-column">
                    <p>Bitte melden Sie sich an</p>
                    
                    <InputText 
                        type="text"
                        placeholder="Email"
                        class="mb-2"
                        v-model="user.email"
                    />

                    <InputText
                        type="password"
                        placeholder="Passwort"
                        v-model="user.password"
                    ></InputText>
                    
                    <Message 
                        severity="error"
                        closable="false"
                        v-show="login_error_msg.visibility"
                    >
                        Login failed
                    </Message>

                </div>
          </template>

          <template #footer>
              <Button 
                icon="pi pi-check" 
                label="Login"
                @click="onLogin"
            />
          </template>
      </Card>
  </div>
</template>

<script>
export default {
    data: ()  => ({
        user: {
            email: '',
            password: ''
        },
        login_error_msg: {
            visibility: false,
            text: 'Login failed'
        }
    }),

    methods: {
        async onLogin() {
            try {
                let oResponse = await this.$http.post("/users/login", this.user)
                let token = oResponse.data.token
                localStorage.setItem("jwt", token)
                
                if(token){
                    console.log("Login successful")
                    this.$router.push("/main")
                }
            }catch(ex) {
                this.login_error_msg.visibility = true
                console.log("Error", "Login not successful", ex)
            }
        }
    }
}
</script>

<style>
#login_card {
    width: 30rem;
}

.login-card-container{
    width: 100%;
}
</style>