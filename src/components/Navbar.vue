<!---->Navbar Belom Login
<template>
<div>
  <b-navbar toggleable="lg" fixed="top" style="background-color: #FFFFFA; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
    <b-navbar-brand href="/" style="    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 33px;
    color: #608EB8;
    margin-left: 120px;">sekuuu.ding</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav style="margin-left:auto;">
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/module">Module</b-nav-item>
        <b-nav-item href="/contactus">Contact Us</b-nav-item>
        <b-nav-item href="/aboutus">About Us</b-nav-item>
        <b-nav-item href="/faq">FAQ</b-nav-item>
        <span v-if="isLoggedIn">
          <b-nav-item href="/profile">Profile</b-nav-item>
        </span>
        <button class="btn btn-info">
          <span v-if="isLoggedIn">
            <a @click=logUserOut style="font-size: 15px; color: #9FEDD7; text-decoration:none;">
              Log out
            </a>
          </span>
          <span v-else>
            <a href="/login" style="font-size: 15px; color: #9FEDD7; text-decoration:none;">
                Sign Up / Login
            </a>
          </span>
        </button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name : 'Navbar',
  computed: {
    isLoggedIn : function() {return localStorage.getItem("token") != null}
  },

  methods: {
    // isLoggedIn(){
    //   localStorage.getItem("token") != null
    // }
    logUserOut(){
      localStorage.removeItem("token")
      this.$router.push("/login")
    }
  }
}
</script>

<style>
.b-nav-item {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
}


</style>