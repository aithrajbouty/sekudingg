<template>

<div class="body">
  <div class="sidenav text-center">
    <h4 style="font-weight: bold;">Data Mentor</h4>
    <img src = "../assets/images/aithrapic.jpg" width="100px" style="border-radius: 50px;">
    <br><br>
    <p style="font-weight: bold;">Aithra Junia Bouty</p>
    <p>Front End Developer at Tokopaedi</p>
    
    <a class="active" href="#materi1">Materi 1</a>
    <a href="#materi2">Materi 2</a>
    <a href="#materi3">Materi 3</a>
    <a href="#materi4">Materi 4</a>
  </div>

  <div class="content">
    <h2 style="font-weight: bold;">What is HTML?</h2>
    <br>
    <iframe width="835" height="460" src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
    <br>
    <b-progress :max="max" height="2rem">
      <b-progress-bar :value="value">
        <span>Progress: <strong>{{ value.toFixed(2) }} / {{ max }}</strong></span>
      </b-progress-bar>
    </b-progress>
    <br>
    <b-button variant="warning" style="float: right;">Next</b-button>
    <br><br>
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
  export default {
    data() {
      return {
        value: 33.333333333,
        max: 100
      }
    }
  }
</script>