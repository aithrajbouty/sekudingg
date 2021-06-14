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
        <div
          class="row"
          v-for="(classes, index) in materials"
          :key="classes.id"
        >
          <a
            @click="
              currentMaterial = index;
            "
            >{{ classes.name }}</a
          >
        </div>
      </div>
    </div>

    <div class="content">
      <h2 style="font-weight: bold">{{ getCurrentMaterial.name }}</h2>
      <br />
      <iframe
        :src="
          'https://www.youtube.com/embed/' +
          parseUrlId(getCurrentMaterial.video_path)
        "
        width="835"
        height="460"
        @load="markMaterialAsComplete(getCurrentMaterial.id)"
      >
      </iframe>
      <br />
      <b-progress :max="max" height="2rem">
        <b-progress-bar :value="getProgression">
          <span
            >Progress:
            <strong>{{ getProgression.toFixed(0) }} / {{ max }}</strong></span
          >
        </b-progress-bar>
      </b-progress>
      <br />
      <b-button variant="warning" style="float: right" @click="loadNextMaterial()">Next</b-button>
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
      max: 100,
      modul: [],
      materials: [],
      currentMaterial: 0,
      progressions: [],
      user: [],
    };
  },

  created() {
    const moduleid = this.$route.params.moduleid;
    const MODULE_API_URL =
      `${process.env.VUE_APP_API_URL}/module/` + moduleid + "/material";
    const USER_API_URL = `${process.env.VUE_APP_API_URL}/profile/`;
    const headers = { token: localStorage.token };

    fetch(USER_API_URL, { headers })
      .then((response) => response.json())
      .then((result) => {
        this.user = result;
      });

    fetch(`${process.env.VUE_APP_API_URL}/module/${moduleid}`)
      .then((response) => response.json())
      .then((result) => {
        this.modul = result;
      });

    fetch(MODULE_API_URL)
      .then((response) => response.json())
      .then((result) => {
        this.materials = result;
      });
  },

  methods: {
    parseUrlId(url) {
      return url.split("v=")[1];
    },
    markMaterialAsComplete(materialid) {
      const PROGRESSION_API_URL = `${process.env.VUE_APP_API_URL}/progress`;

      const req = {
        user_id: this.user.id,
        module_id: this.modul.id,
        material_id: materialid,
      };

      this.$http.post(PROGRESSION_API_URL, req).catch((error) => {
        console.error(error);
      });
    },
    updateProgression() {
      const PROGRESSION_API_URL = `${process.env.VUE_APP_API_URL}/progress`;
      fetch(`${PROGRESSION_API_URL}/${this.user.id}&${this.modul.id}`)
        .then((response) => response.json())
        .then((result) => {
          this.progressions = result;
        });
    },
    loadNextMaterial() {
      this.currentMaterial += 1;
      this.currentMaterial %= this.materials.length;
    }
  },

  computed: {
    getCurrentMaterial() {
      return this.materials[this.currentMaterial];
    },
    getProgression() {
      this.updateProgression();
      return (this.progressions.length * 100) / this.materials.length;
    }
  },
};
</script>