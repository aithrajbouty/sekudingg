<template>
  <div class="profilec">
      <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header" style="min-height: 600px; background-image: url('https://lh5.googleusercontent.com/proxy/yiUEVo8AYFveJlYj_Sbz-qcMP9n3bikVMHIKBXIDiybAkcNGuSI3xVkK4EPIGPxPL9LOhCz5_3pZp-SIiMqgmkbM3Y10Ny7iYw4zbe8QIcQjCvGocRCn9cOfOw=w1200-h630-p-k-no-nu'); background-size: cover; background-position: center top;">
        <div class="container-fluid">
            <span class="mask bg-gradient-success opacity-8"></span>
            <div class="d-flex align-items-center container-fluid">
            <div class="row">
                <div class="col">
                <h1 class="display-2 text-white">Hello {{user.username}}</h1>
                <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
                <div>
                <!-- Using modifiers -->
                <b-button v-b-toggle.collapse-2 class="m-1 btn btn-info">Edit Profile</b-button>

                <!-- Element to collapse -->
                <b-collapse id="collapse-2">
                <div class="row">
                   <div class="order-xl-2 mb-5 col-xl-4">
                        <div alt="Image placeholder" class="card card-profile">
                            <div class="row justify-content-center">
                                <div class="card-profile-image text-center">
                                 <a href="#">
                                     <img src="../assets/images/aithrapic.jpg" width="50%" class="rounded-circle"></a>
                                    </div>
                                    </div>
                                    <div class="card-body pt-0">
                                    <div class="row">
                                    <div class="col">
                                   </div></div>
    <div class="text-center"><h5 class="h3">
        {{user.full_name}}
        <span class="font-weight-light">, {{user.age}}</span>
        </h5><div class="h5 font-weight-300">
          <i class="ni location_pin mr-2"></i>{{user.email}}
      </div>
      <div class="h5 mt-4">
        <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
      </div><div>
        <i class="ni education_hat mr-2"></i>University of Computer Science
      </div>
      <hr class="my-4">
      <p>{{user.description}}</p>
      </div></div></div></div>
      <div class="order-xl-1 col-xl-8">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8"><h3 class="mb-0">Edit profile </h3>
                </div></div></div>
                  <div class="card-body">
                    <form class="" @submit.prevent="updateUser">
                      <h6 class="heading-small text-muted mb-4">User information</h6>
                      <div class="pl-lg-4">
                        <div class="row">
                          <div class="col-lg-6">
                            <span placeholder="Username">
                              <fieldset class="form-group" id="__BVID__84">
                                <div tabindex="-1" role="group" class="bv-no-focus-ring">
                                  <label class="form-control-label">
                                    Username
                                    <!-- DESCRIPTION -->
                                  </label>
                                  <div class="has-label">
                                    <input v-model="user.username" type="text" placeholder="Username" class="form-control" valid="true"><!----></div><!----><!----><!----><!----><!----></div></fieldset></span></div><div class="col-lg-6"><span placeholder="mike@email.com"><fieldset class="form-group" id="__BVID__87"><!----><div tabindex="-1" role="group" class="bv-no-focus-ring"><label class="form-control-label">
                                    Email address
                                  </label>
                                  <div class="has-label">
                                    <input v-model="user.email" type="email" placeholder="mike@email.com" class="form-control" valid="true"><!----></div><!----><!----><!----><!----><!----></div></fieldset></span></div></div><div class="row"><div class="col-lg-6"><span placeholder="First Name"><fieldset class="form-group" id="__BVID__90"><!----><div tabindex="-1" role="group" class="bv-no-focus-ring"><label class="form-control-label">
                                    First Name
                                  </label>
                                  <div class="has-label">
                                    <input v-model="user.full_name" type="text" placeholder="First Name" class="form-control" valid="true"><!----></div><!----><!----><!----><!----><!----></div></fieldset></span></div><div class="col-lg-6"><span placeholder="Last Name"><fieldset class="form-group" id="__BVID__93"><!----><div tabindex="-1" role="group" class="bv-no-focus-ring"><label class="form-control-label">
                                    Last Name
                                  </label>
                                  <div class="has-label">
                                    <input type="text" placeholder="Last Name" class="form-control" valid="true"><!----></div><!----><!----><!----><!----><!----></div></fieldset></span></div></div></div><hr class="my-4"><h6 class="heading-small text-muted mb-4">Contact information</h6><div class="pl-lg-4"><div class="row"><div class="col-md-12"><span placeholder="Home Address"><fieldset class="form-group" id="__BVID__96"><!----><div tabindex="-1" role="group" class="bv-no-focus-ring"><label class="form-control-label">
                                    Address
                                  </label>
                                  <div class="has-label">
                                    <input type="text" placeholder="Home Address" class="form-control" valid="true"><!----></div><!----><!----><!----><!----><!----></div></fieldset></span></div></div><div class="row"><div class="col-lg-4"><span placeholder="City"><fieldset class="form-group" id="__BVID__99"><!----><div tabindex="-1" role="group" class="bv-no-focus-ring"><label class="form-control-label">
                                    City
                                  </label>
                                  <div class="has-label">
                                    <input type="text" placeholder="City" class="form-control" valid="true"><!----></div><!----><!----><!----><!----><!----></div></fieldset></span></div><div class="col-lg-4"><span placeholder="Country"><fieldset class="form-group" id="__BVID__102"><!----><div tabindex="-1" role="group" class="bv-no-focus-ring"><label class="form-control-label">
                                    Country
                                  </label>
                                  <div class="has-label">
                                    <input type="text" placeholder="Country" class="form-control" valid="true"><!----></div><!----><!----><!----><!----><!----></div></fieldset></span></div><div class="col-lg-4"><span placeholder="ZIP Code"><fieldset class="form-group" id="__BVID__105"><!----><div tabindex="-1" role="group" class="bv-no-focus-ring"><label class="form-control-label">
                                    Postal Code
                                  </label>
                                  <div class="has-label">
                                      <input type="text" placeholder="ZIP Code" class="form-control" valid="true"></div>
                                      </div></fieldset></span></div></div></div>
                                      <hr class="my-4">
                                      <h6 class="heading-small text-muted mb-4">About me</h6>
                                      <div class="pl-lg-4">
                                          <div role="group" class="form-group mb-0" id="__BVID__106">
                                              <div class="bv-no-focus-ring">
                                                  <textarea id="about-form-textaria" placeholder="A few words about you ..." rows="4" wrap="soft" class="form-control"></textarea>
                                                  </div></div></div>
                                                  
                                                  <div class="col-sm-10 mt-4 text-right" style="margin-bottom:20px;">
                                                    <button type="submit" class="btn btn-warning" style="padding:20px; font-weight:bold; font-size:18px;">Update Profile</button>
                                                    </div>
                                                  </form></div></div></div></div>
                                                
                </b-collapse>
              </div>
                </div></div></div></div></div>
                            

                                                  </div>
                
</template>

<script>
const API_URL = "http://localhost:3000/profile/"

export default {
  data: () => ({
    error: "",
    user: []
  }),

  mounted(){
    const headers = { token: localStorage.token };
    fetch(API_URL, { headers })
    .then(response => response.json())
    .then(result => {
      this.user = result;
      var parsedobj = JSON.parse(JSON.stringify(result))
      console.log(parsedobj)
    });
  },

  methods: {
    // userData(){
    //   if(this.user == null){
    //     this.user = "-"
    //   }
    // },

    updateUser(e){
      const userid = this.user.id
      const UPDATE_API_URL = "localhost:3000/profile/" + userid
      e.preventDefault()
      
      if (this.user.description.length > 0) {
        this.$http.put(UPDATE_API_URL, this.user)
        // .then(response => {
        //   localStorage.setItem('token',response.data.token)

        //   if (localStorage.getItem('token') != null){
        //       this.$emit('loggedIn')
        //       this.$router.push('modulsaya')
        //   }
        // })
        .catch(function (error) {
          console.error(error.response);
        })
      }
    }
  }
}
</script>

<style>

</style>