<template>
<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #FFFFFA;box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
    <div class="nav-container fixed-top">
          <div class="container">
    <a class="navbar-brand" href="#"
        style="font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 33px;
    color: #608EB8;">sekuuu.ding
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/module">Module</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contactus">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/aboutus">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/faq">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/profile">Profile</a>
        </li>
        <li class="nav-item">
          <button class="btn btn-info">
            <a href="/login" style="font-size: 15px; color: #9FEDD7; text-decoration:none;">
                Log Out</a></button>
        </li>
      </ul>
    </div>
  </div>
    </div>

</nav>
</template>

<script>
export default {
    name : 'NavbarUdahLogin'
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