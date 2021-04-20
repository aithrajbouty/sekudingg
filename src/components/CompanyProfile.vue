<template>
  <div class="companyprofile">
      <div class="card">
          <div class="card-body" style="background-color: #FEF9C7;">
            <h2 class="card-title"><strong>About Sekuuu.ding</strong></h2>
            <br>
            <p class="card-text">Sekuuuding stands for "Sekuuuy Ngoding" which is an invitation to the public to learn programming. <br>
            Sekuuuding provides a free open source coding curriculum that can be taken entirely online. Since it’s inception, it has helped many students get hired as developers and has assisted countless others learn enough programming to work on their own personal projects.</p>
          </div>
        </div>

        <div class="overview">
            <h4><strong>Overview of Sekuuuding</strong></h4>
        </div>
        <br>
        <div class="row">
          <div class="col-sm-4">
            <div class="card" style="background-color: #FEF9C7;">
              <div class="card-body">
                <h5 class="card-title"><strong>123009</strong></h5>
                <p class="card-text">Learners</p>
                
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style="background-color: #FEF9C7;">
              <div class="card-body">
                <h5 class="card-title"><strong>4</strong></h5>
                <p class="card-text">Teams</p>
                
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card" style="background-color: #FEF9C7;">
              <div class="card-body">
                <h5 class="card-title"><strong>2021</strong></h5>
                <p class="card-text">Founded</p>
              
              </div>
            </div>
          </div>
        </div>

        <div class="beliefs">
           <h4><strong>Our Beliefs</strong></h4>
        </div>
        <div class="isibeliefs">
          <div class="mt-4">
            <b-card img-src="https://pbs.twimg.com/media/EyNWq6YUYAYcpUd?format=png&name=360x360" img-alt="Card image" img-left class="mb-4">
              <b-card-text>
                <strong>Education should be free and accessible</strong><br>
                This curriculum itself is free and we tried to link to resources that are themselves free so anyone in the world can use them.
              </b-card-text>
            </b-card>
        </div>
        <div class="mt-4">
            <b-card img-src="https://pbs.twimg.com/media/EyNW7xOUcAIDHLl?format=png&name=360x360" img-alt="Card image" img-left class="mb-4">
              <b-card-text>
                <strong>Education should be free and accessible</strong><br>
                Our curriculum is full of video projects that will help you build a strong portfolio of work on Github to fill out your resume.
              </b-card-text>
            </b-card>
        </div>
        <div class="mt-4">
            <b-card img-src="https://pbs.twimg.com/media/EyNXvkNVgAYHTPJ?format=png&name=360x360" img-alt="Card image" img-left class="mb-4">
              <b-card-text>
                <strong>Education should be free and accessible</strong><br>
                We're committed to connecting students together so they can stay motivated and learn faster.
              </b-card-text>
            </b-card>
        </div>
        </div>
        <br><br>

        <div class="ourteam">
          <h2 style="text-align:center"><strong>Our Team</strong></h2>
          <div class="row">
            <div class="column">
              <div class="card">
                <img src="../assets/images/kefilpic.jpg" alt="Jane" style="width:100%">
                <div class="profile">
                  <br>
                  <h2>Kefilino Khalifa</h2>
                  <p class="title">CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>kefilifil@example.com</p>
                  <p><button class="button">Contact</button></p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="../assets/images/aithrapic.jpg" alt="Mike" style="width:100%">
                <div class="profile">
                  <br>
                  <h2>Aithra Junia</h2>
                  <p class="title">Art Director</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>aithraw@example.com</p>
                  <p><button class="button">Contact</button></p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <img src="../assets/images/hanapic.jpg" alt="John" style="width:100%">
                <div class="profile">
                  <br>
                  <h2>Hana Meilina</h2>
                  <p class="title">Designer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>hanamasa@example.com</p>
                  <p><button class="button">Contact</button></p>
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
.card{
  background: #FEF9C7;
  border-radius: 20px;
  margin-top: 100px;
}
.overview{
  text-align: center;
  margin-top: 50px;
}
.col-sm-4{
  border-radius: 20px;
}
.card-title{
  font-size: 35px;
  color : #4B4B5B;
}
.beliefs{
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
}
body {
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.profile {
  padding: 0 16px;
}

.profile::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>