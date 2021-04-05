<template>
  <div class="hero">
      <!-- Desktop -->
      <div class="d-none d-md-block">
          <div class="row mt-4">
            <div class="col-md-6">
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">
                        <h2>Learn to code <strong>for free</strong>, <br> with <strong>Sekuuuding!</strong></h2>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button class="btn btn-lg btn-warning"><strong>Start Learning Now !</strong></button>
                    </div>
                </div>
            </div>
      <div class="col-md-6">
          <img src="../assets/images/myhero.png" width="100%"/>
      </div>
  </div>
  <br><br>
  <div class="text-center">
    <h2 class="text-center"><strong>How it works ?</strong></h2>
  </div>
  <div class="row">
    <div id="about" class="p-3 p-md-5">
      <div class="row">
          <p>This is the website we wish we had when we were learning on our own. We scour the internet looking for only the best resources to supplement your learning and present them in a logical order.</p>
        <div class="col-lg">
          <!-- Icon made by Freepik perfect from www.flaticon.com -->
          <img src="../assets/images/learn.png" height="120" class="m-4">
          <h5 class="ml-md-4 mr-md-4"><strong>Learn</strong></h5>
          <p>Learn from a curriculum with the best curated online tutorials, blogs, and courses.</p>
        </div>
        <div class="col-lg">
          <!-- Icon made by Freepik perfect from www.flaticon.com -->
          <img src="../assets/images/build.png" height="120" class="m-4">
          <h5 class="ml-md-4 mr-md-4"><strong>Build</strong></h5>
          <p>Build a portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites.</p>
        </div>
        <div class="col-lg">
          <!-- Icon made by Freepik perfect from www.flaticon.com -->
          <img src="../assets/images/connect.png" height="120" class="m-4">
          <h5 class="ml-md-4 mr-md-4"><strong>Connect</strong></h5>
          <p>You’re not alone. Learn and get help from our friendly community of beginner and experienced developers.</p>
        </div>
      </div>
    </div>
    </div>

      <div class="row mt-4">
        <div class="col">
          <h2><strong>Learn everything you need to know to become a Developer</strong></h2>
        </div>
        <div class="col">
          <router-link to="/module" class="btn btn-warning float-right"><b-icon-file-arrow-down></b-icon-file-arrow-down><strong> View All Our Courses</strong> </router-link>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-md-4 mt-4">
          <div>
            <b-card
              title="Web Development"
              img-src="https://img.icons8.com/bubbles/100/000000/internet.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-4"
            >
            <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div>
            <b-card
              title="Data Science"
              img-src="https://img.icons8.com/bubbles/100/000000/combo-chart.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-4"
            >
            <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div>
            <b-card
              title="Computer Science"
              img-src="https://img.icons8.com/bubbles/100/000000/programming-flag.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-4"
            >
            <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div>
            <b-card
              title="Web Design"
              img-src="https://img.icons8.com/bubbles/100/000000/design.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-4"
            >
            <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div>
            <b-card
              href="#"
              title="Mobile Development"
              img-src="https://img.icons8.com/bubbles/100/000000/broken-phone.png"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-4"
            >
            <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </div>
    </div>

    <div class="mt-4">
    <h2><strong>Our Testimoni</strong></h2>
    <b-card img-src="https://img.icons8.com/bubbles/100/000000/check-female.png" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Before I started sekuuuding I had literally ZERO 
programming experience. After almost exactly a year of 
working through the program, I was offered a job as a front...
      </b-card-text>
    </b-card>
    <b-card img-src="https://img.icons8.com/bubbles/100/000000/administrator-male.png" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Before I started sekuuuding I had literally ZERO 
programming experience. After almost exactly a year of 
working through the program, I was offered a job as a front...
      </b-card-text>
    </b-card>
    <b-card img-src="https://img.icons8.com/bubbles/100/000000/cloud-account-login-male.png" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Before I started sekuuuding I had literally ZERO 
programming experience. After almost exactly a year of 
working through the program, I was offered a job as a front...
      </b-card-text>
    </b-card>
    </div>

      </div>
  <!-- Mobile -->
  <div class="d-sm-block d-md-none">
      <div class="row mt-4">
          <div class="col-md-6 mb-3">
          <img src="../assets/images/myhero.png" width="100%"/>
      </div>
      <div class="col-md-6">
          <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                  <h2>Learn to code <strong>for free</strong>, <br> with <strong>Sekuuuding!</strong></h2>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button class="btn btn-lg btn-warning"><strong>Start Learning Now !</strong></button>
              </div>
          </div>
      </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>