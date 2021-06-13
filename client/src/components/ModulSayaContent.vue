<template>
  <div class="module">
      <div class="justify-content-center align-self-center">
          <div class="card card-title"
                style="background: #FEF9C7;
                width: 400px; 
                left: 350px;
                height: 45px;
                box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
                text-align:center;
                margin-bottom:80px;">
            <h2><strong>Web Development</strong></h2>
    </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-4 mt-4" v-for="modules in courses" :key="modules.id">
          <div>
            <router-link :to="{ name: 'KelasView', params: { moduleid: modules.id }}">
            <!-- <a href="/kelasview"> -->
              <b-card
                img-v-if="modules.image" :img-src="modules.image" :img-alt="modules.name"
                img-top
                tag="article"
                style="max-width: 20rem; background-color : #FEF9C7"
                class="mb-2"
              >
              <p align="Justify">{{modules.description}}</p>
              <p align="Right">{{modules.price}}</p>
              </b-card>
            <!-- </a> -->
            </router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
const API_URL = `${process.env.VUE_APP_API_URL}/profile/`
//const MODULSAYA_API_URL = `${process.env.VUE_APP_API_URL}/modulSaya/`

export default {
  data: () => ({
    error: "",
    courses: [],
    user: []
  }),

  mounted(){
    const headers = { token: localStorage.token };
    fetch(API_URL, { headers })
    .then(response => response.json())
    .then(result => {
      this.user = result;

      const MODULSAYA_API_URL = `${process.env.VUE_APP_API_URL}/modulSaya/${this.user.id }`
      fetch(MODULSAYA_API_URL)
        .then(response => response.json())
        .then(result => {
          this.courses = result
        })
    });

    
  },

  methods: {
    logUserOut(){
      localStorage.removeItem("token")
      this.$router.push("/login")
    },

    // modulsaya(){
    //   const userid = this.user.id 
    //   const MODULSAYA_API_URL = `${process.env.VUE_APP_API_URL}/modulSaya/` + userid 
    //   fetch(MODULSAYA_API_URL)
    //     .then(response => response.json())
    //     .then(result => {
    //       this.courses = result
    //       var parsedobj = JSON.parse(JSON.stringify(result))
    //       console.log(parsedobj)
    //       console.log("user id = " + this.user.id)
    //     })
    // }
  }
}
</script>