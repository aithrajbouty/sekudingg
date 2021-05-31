<template>
  <div class="logincontent">
        <div class="row">
            <div class="col-lg-6">
                <div class="card1 pb-5">
                    <div class="row justify-content-center border-line" style="margin-top:80px;"> 
                        <img src="../assets/images/myloginnew.svg" class="image" width="100%"> </div>
                </div>
            </div>
            <div class="col-lg-6">
            <form @submit.prevent="loginUser">
                <div class="card2 card border-0 px-4 py-5" style="background: rgba(159, 237, 215, 0.75);"> 
                    <div class="text-center" style="margin-bottom:40px">
                        <h1><strong>Login</strong></h1> 
                    </div>
                    <div class="row px-3 form-group"> 
                        <input
                            class="mb-4" 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            style="border-radius: 25px;font-size: 17px; line-height: 15px;" 
                            v-model="login.email" required
                        />
                    </div>
                    <div class="row px-3 form-group"> 
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            style="border-radius: 25px;font-size: 17px; line-height: 15px;" 
                            v-model="login.password" required
                        /> 
                    </div>
                    
                    <div class="row mb-3 px-3" style="margin-top:20px; margin-left:110px;"> 
                        <button type="submit" class="btn btn-warning text-center" style="width: 300px; height:50px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 100px;"><strong>Login</strong></button> 
                    </div>
                    <div class="row mb-4 px-3"> 
                        <small class="font-weight-bold">Doesn’t have an account yet?  
                            <a href="/register" style="text-decoration: none;" class="text-warning">Sign up here</a></small> 
                    </div>
                </div>
            </form>
            </div>
        </div>

  </div>
</template>

<script>
const API_URL = `${process.env.VUE_APP_API_URL}/auth/login`

export default {
  //name : 'LoginContent',
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    }
  },

    methods: {
        loginUser(e){
            e.preventDefault()
            if (this.login.password.length > 0) {
                this.$http.post(API_URL, this.login)
                .then(response => {
                    localStorage.setItem('token',response.data.token)

                    if (localStorage.getItem('token') != null){
                        this.$emit('loggedIn')
                        this.$router.push('module')
                    }
                })
                .catch(function (error) {
                    console.error(error.response);
                })
            }
        }
    }
}
</script>
    
<style>
.card2 {
    margin: 0px 40px;
}
.border-line {
    border-right: 1px solid #EEEEEE
}
.text-sm {
    font-size: 14px !important
}
::placeholder {
    color: #BDBDBD;
    opacity: 1;
    font-weight: 300
}
:-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}
::-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}
input,
textarea {
    padding: 10px 12px 10px 12px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 5px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    color: #2C3E50;
    font-size: 14px;
    letter-spacing: 1px
}
input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #304FFE;
    outline-width: 0
}
button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}
a {
    color: inherit;
    cursor: pointer
}
@media screen and (max-width: 1440px) {
    .image{
        width: 541px;
        height: 422px;
    }
    .border-line {
        border-right: none
    }
    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px
    }
}
</style>