<template>
  <div class="logincontent">
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
    <div class="card card0 border-0">
        <div class="row d-flex">
            <div class="col-lg-6">
                <div class="card1 pb-5">
                    <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="../assets/images/webdevcoba.png" class="image"> </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card2 card border-0 px-4 py-5">
                  <div class="text-center">
                      <h3>Login</h3> </div>
                    <div class="row px-3"> 
                    <input class="mb-4" type="text" name="email" placeholder="Email" style="border-radius: 25px;">
                    </div>
                    <div class="row px-3"> 
                      <input type="password" name="password" placeholder="Password" style="border-radius: 25px;"> </div>
                    <div class="row px-3 mt-3 mb-4">
                        <div class="custom-control custom-checkbox custom-control-inline"> 
                          <input id="chk1" type="checkbox" name="chk" class="custom-control-input"> 
                          <label for="chk1" class="custom-control-label text-sm">Show Password</label> </div> 
                          <a href="#" class="ml-auto mb-0 text-warning">Forgot Password?</a>
                    </div>
                    <div class="row mb-3 px-3"> 
                      <button type="submit" class="btn btn-warning text-center" style="width: 150px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 100px;">Login</button> 
                      </div>
                    <div class="row mb-4 px-3"> 
                      <small class="font-weight-bold">Doesn’t have an account yet?  <a class="text-warning">Sign up here</a></small> </div>
                </div>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name : 'LoginContent',
  data() {
    return {
      register: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    
  }
}
</script>
    
<style>
.card0 {
    box-shadow: 0px 4px 8px 0px #757575;
    border-radius: 0px
}
.card2 {
    margin: 0px 40px
}
.image {
    width: 360px;
    height: 280px
}
.border-line {
    border-right: 1px solid #EEEEEE
}
.text-sm {
    font-size: 14px !important
}
::placeholder {
    color: #BDBDBD;
    opacity: 1;
    font-weight: 300
}
:-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}
::-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}
input,
textarea {
    padding: 10px 12px 10px 12px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 5px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    color: #2C3E50;
    font-size: 14px;
    letter-spacing: 1px
}
input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #304FFE;
    outline-width: 0
}
button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}
a {
    color: inherit;
    cursor: pointer
}
@media screen and (max-width: 991px) {
    .image {
        width: 300px;
        height: 220px
    }
    .border-line {
        border-right: none
    }
    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px
    }
}
</style>