<template>
  <div class="hero">
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

      <div class="col-md-4 mt-4">
        <div
          class="card-body"
          style="background-color: #ffe072; border-radius: 45px"
        >
          <h2 class="login-card-title" style="text">Signup</h2>
          <br />
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="fullname">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                class="form-control"
                placeholder="Full Name"
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
              />
            </div>

            <div class="form-group">
              <label for="confirmpassword">Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                class="form-control"
                placeholder="Confirm Password"
              />
            </div>

            <br />
            <b-button type="submit" variant="light">Sign Up</b-button>
          </form>

          <br />
          <p class="login-card-footer-text">
            Already have an account? <a href="#!" class="text-reset">Login</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero {
  font-family: Montserrat;
  font-size: 15px;
  color: #2c3e50;
}
</style>

<script>
// import swal from "sweetalert";
export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.post("/user/register", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
          // swal("Success", "Registration Was successful", "success");
        } else {
          // swal("Error", "Something Went Wrong", "Error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          // swal("Error", error.data.message, "error");
        } else {
          // swal("Error", error.data.err.message, "error");
        }
      }
    }
  }
};
</script>