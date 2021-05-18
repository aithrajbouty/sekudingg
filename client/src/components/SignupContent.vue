<template>
  <div class="signupc">
    <div class="row mb-3">
      <div class="col-md-7 mt-7">
        <div>
          <b-card
            img-src="https://stories.freepiklabs.com/storage/27865/fomo-cuate-4484.png"
            img-alt="Image"
            style="max-width: 100rem; width: 482px; height: 532px"
          >
          </b-card>
        </div>
      </div>

        <div
          class="card-body"
          style="background-color: #ffe072; border-radius: 45px"
        >
          <h2 class="login-card-title" style="text">Signup</h2>
          <br />
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="name">Full Name</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                class="form-control"
                placeholder="Full Name"
                v-model="register.full_name" required
              />
            </div>

            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                class="form-control"
                placeholder="Username"
                v-model="register.username" required
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control"
                placeholder="Email"
                v-model="register.email" required
              />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control"
                placeholder="Password"
                v-model="register.password" required
              />
            </div>

            <br />
            <b-button type="submit" variant="light">Sign Up</b-button>
          </form>

          <br />
          <p class="login-card-footer-text">
            Already have an account? <a href="/login" class="text-reset">Login</a>
          </p>
        </div>
      </div>
  </div>
</template>

<style>
.signupc {
  font-family: Montserrat;
  font-size: 12px;
  color: #2c3e50;
}
.form-group{
  text-align: left;
  font-size: 12px;
}
.card-body{
  height: 570px;
}
</style>

<script>
const API_URL = "http://localhost:3000/auth/register"

export default {
  data() {
    return {
      register: {
        full_name: "",
        username: "",
        email: "",
        password: ""
      }
    }
  },

  methods: {
    // async registerUser(e) {
    //   e.preventDefault()

    //   try {
    //     const response = await fetch(API_URL, {
    //       method: "POST",
    //       headers: {"Content-Type": "application/json"},
    //       body: JSON.stringify(this.register)
    //     })

    //     const parseRes = await response.json()
    //     console.log(parseRes)
    //     localStorage.setItem("token", parseRes.token)

    //     if(localStorage.getItem("token") !== null){
    //       this.$emit("loggedin")
    //       this.$router.push("/modulsaya")
    //     }

    //   } catch (err) {
    //     console.error(err.message)  
    //   }
    // }
    registerUser(e) {
      e.preventDefault()
      if (this.register.password.length > 0){
        this.$http.post(API_URL, this.register)
        .then(response => {
          localStorage.setItem('token',response.data.token)

          if (localStorage.getItem('token') != null){
            this.$emit('loggedIn')
            this.$router.push('/modulsaya')    
          }
        })
        .catch(error => {
            console.error(error)
        })
      } 
    }    
  }
}
</script>