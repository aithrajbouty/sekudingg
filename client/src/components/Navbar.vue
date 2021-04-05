<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-yellow fixed-top">
      <div class="container">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">sekuuu.ding
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>   
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/module">Module</router-link>   
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contactus">Contact Us</router-link>   
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/aboutus">About Us</router-link>   
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/faq">FAQ</router-link>   
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/profile">Profile</router-link>   
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <router-link class="nav-link" to="/signedout">Signed Out</router-link>   
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

</style>