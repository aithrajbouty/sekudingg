<template>
  <div class="profile">
    <Navbar />
    <div class="container">
      <div class="d-none d-md-block">
          <div class="row mt-4">
            <div class="col-md-6">
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">
                        <h2><strong>Profile</strong></h2>
                        <p><strong>Hi, .... </strong>Change your profile settings here</p>
                    </div>
                </div>
            </div>

                <div class="row">
                    <div class="col-sm-10 text-center"><br>
                        <img src="../assets/images/soangg.jpg" width="400" height="400" class="img-profile"><br><br>
                    </div>
                    <div class="col-sm-12">
                        <div class="container">
                            <form class="form-horizontal">
                                <div class="form-group">
                                    <label for="nama" class="col control-label">Nama</label>
                                    <div class="col-sm-10">
                                        <input class="form-control" id="nama" type="text" placeholder="Name" >
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="email" class="col control-label">Email</label>
                                    <div class="col-sm-10">
                                        <input class="form-control" id="email" type="text" placeholder="Email" >
                                    </div>
                                </div>
                                <div class="form-group has-feedback">
                                    <label class="col control-label" for="pw">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="pw" placeholder="Masukkan password lama....">
                                        <span class="form-control-feedback"></span>
                                    </div>
                                </div>
                                <div class="form-group has-feedback">
                                    <label class="col control-label" for="newpw">New Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="newpw" placeholder="Masukkan password baru....">
                                        <span class="form-control-feedback"></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-10 mt-4 text-right">
                        <button class="btn btn-warning" onclick="location.href=">Update Profile</button>
                        </div>
                    </div>
                </div>
  </div>
  </div>
    </div>

    
    <img src="../assets/images/path16.png" width="100%">
  </div>
  
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Profile',
  components: {
    Navbar
  }
}
</script>

<style>

</style>