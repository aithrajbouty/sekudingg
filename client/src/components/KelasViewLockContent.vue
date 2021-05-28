<template>

<div class="body">
  <div class="sidenav text-center"  v-for="classes in materials" :key="classes._id">
    <!-- <a class="active" href="#materi1">Materi 1</a> -->
    <a href="#materi2">{{classes.name}}</a>
    <!-- <a href="#materi3">Materi 3</a>
    <a href="#materi4">Materi 4</a> -->
  </div>

  <div class="content text-center">
    <h2 style="font-weight: bold;">What is HTML?</h2>
    <br><br><br>
    <img src = "../assets/images/image 4.png" width="100px" style="border-radius: 50px;">
    <br><br>
    <h2>Konten dikunci, Login dulu yuk!</h2>
    <br>
    <b-button variant="warning"><a href="/login">Sign Up/Login</a></b-button>
  </div>
</div>

</template>

<style>
  body {
    font-family: "Lato", sans-serif;
  }
  .sidenav {
    height: 100%;
    width: 260px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #FEF9C7;
    overflow-x: hidden;
    padding-top: 100px;
  }
  .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: black;
    display: block;
  }
  .sidenav a:hover {
    color: #608EB8;
  }
  .content {
    margin-left: 260px; /* Same as the width of the sidenav */
    font-size: 28px; /* Increased text to enable scrolling */
    padding: 0px 10px;
  }
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
</style>

<script>
  // export default {
  //   data() {
  //     return {
  //       value: 33.333333333,
  //       max: 100
  //     }
  //   }
  // }

export default{
  data: () => ({
    error: "",
    materials: []
  }),
  mounted(){
    const moduleid = this.$route.params.moduleid
    const MODULE_API_URL = "http://localhost:3000/module/" + moduleid + "/material"

    fetch(MODULE_API_URL)
      .then(response => response.json())
      .then(result => {
        this.materials = result;
      });
  },
  methods: {}
};
</script>