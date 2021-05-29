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
        <b-nav-item href="/profile">Profile</b-nav-item>
        <button class="btn btn-info" @click=logUserOut>
            <a style="font-size: 15px; color: #9FEDD7; text-decoration:none;">
                Log out
            </a>
        </button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script >
export default {
  methods: {
    logUserOut(){
      localStorage.removeItem("token")
      this.$router.push("/login")
    }
  }
}
</script>

<style>
*{
    box-sizing: border-box;
    margin:0;
}
.nav-container{
    height: 60px;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
    background: #FFFFFA;
}
.wrapper{
    max-width: 1200px;
    margin: 0 auto;
}
nav {
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
}
nav ul{
    display: flex;
    float: right;
}
nav .logo {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    color: #608EB8;
    margin-left: -900px;
}
.nav-items li{
    list-style: none;
    margin-right: 40px;
    margin-top: -35px;
}
.nav-items li:nth-last-of-type(1) {
    margin: 0;
}
.nav-items li a{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;

    color: #000000;
}
.nav-link-active {
    font-weight: 800;
}
.nav-item {
    font-size: 18px;
    line-height: 20px;
    color: #000000;
    margin-right: 20px;
}
</style>