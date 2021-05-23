<!---->Navbar Belom Login
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
          <button class="btn btn-info">
            <a href="/login" style="font-size: 15px; color: #9FEDD7; text-decoration:none;">
                Sign Up / Login</a></button>
        </li>
      </ul>
    </div>
  </div>
    </div>

</nav>
</template>

<script>
export default {
    name : 'Navbar'
}
</script>

<style>
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