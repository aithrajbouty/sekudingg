<template>
  <div class="body">
    <div
      class="sidenav text-center"
      v-for="classes in materials"
      :key="classes._id"
    >
      <h4 style="font-weight: bold">Data Mentor</h4>
      <img
        src="../assets/images/aithrapic.jpg"
        width="100px"
        style="border-radius: 50px"
      />
      <br /><br />
      <p style="font-weight: bold">{{ modul.author }}</p>
      <p>Front End Developer at Tokopaedi</p>

      <div class="col">
        <div class="row" v-for="(classes, index) in materials" :key="classes.id">
          <a @click="currentMaterial = index">{{ classes.name }}</a>
        </div>
      </div>
    </div>

    <div class="content">
      <h2 style="font-weight: bold">{{ getCurrentMaterial.name }}</h2>
      <br />
      <iframe :src="'https://www.youtube.com/embed/' + parseUrlId(getCurrentMaterial.video_path)"
        width="835"
        height="460"
      >
      </iframe>
      <br />
      <b-progress :max="max" height="2rem">
        <b-progress-bar :value="value">
          <span
            >Progress: <strong>{{ value.toFixed(2) }} / {{ max }}</strong></span
          >
        </b-progress-bar>
      </b-progress>
      <br />
      <b-button variant="warning" style="float: right">Next</b-button>
      <br /><br />
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
  background-color: #fef9c7;
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
  color: #608eb8;
}

.content {
  margin-left: 260px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      value: 33.333333333,
      max: 100,
      modul: [],
      materials: [],
      currentMaterial: "0"
    };
  },

  mounted() {
    const moduleid = this.$route.params.moduleid;
    const MODULE_API_URL =
      `${process.env.VUE_APP_API_URL}/module/` + moduleid + "/material";

    fetch(MODULE_API_URL)
      .then((response) => response.json())
      .then((result) => {
        this.materials = result;
      });

    fetch(`${process.env.VUE_APP_API_URL}/module/${moduleid}`)
      .then((response) => response.json())
      .then((result) => {
        this.modul = result;
      });

    console.log(this.$route.params.moduleid);
  },
  
  methods: {
    parseUrlId(url) {
      return url.split("v=")[1];
    }
  },

  computed: {
    getCurrentMaterial () {
      return this.materials[this.currentMaterial];
    }

  }
};
</script>