<template>
  <div class="kelas">
    <div
      class="card card-title"
      style="
        background: #fef9c7;
        width: 400px;
        left: 350px;
        height: 45px;
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
        text-align: center;
        margin-top: 120px;
      "
    >
      <h2>
        <strong>{{ modul.name }}</strong>
      </h2>
    </div>

    <br />
    <div class="text-center">
      <b-img
        :src="modul.image"
        fluid
        alt="Responsive image"
        style="max-height: 600px"
      ></b-img>
    </div>

    <br />
    <h1>Overview</h1>
    <p>{{ modul.description }}</p>

    <div class="containerr">
      <b-card style="background-color: #fef9c7; border-radius: 100px">
        <b-card
          v-for="material in materials"
          :key="material.id"
          class="overflow-hidden"
          style="max-width: 800px; max-height: 95px; border-radius: 30px"
        >
          <b-row no-gutters>
            <b-col md="2">
              <b-card-img
                src="https://img.icons8.com/carbon-copy/100/000000/html.png"
                style="width: 70px"
                alt="Image"
                class="rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="10">
              <b-card-body>
                <h2>{{ material.name }}</h2>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card>
      <div class="text-center mt-4 mb-4">
        <button @click="enrollUser" type="button" class="btn btn-primary">Daftar Kelas</button>
      </div>
    </div>
  </div>
</template>

<style>
.overflow-hidden {
  align-items: center;
}

.containerr {
  padding-top: 20px;
  padding-right: 200px;
  padding-left: 200px;
}
</style>

<script>
export default {
  data() {
    return {
      user: [],
      modul: [],
      materials: [],
    };
  },

  mounted() {
    const moduleid = this.$route.params.moduleid;
    const MODULE_API_URL =
      `${process.env.VUE_APP_API_URL}/module/` + moduleid + "/material";
    const PROFILE_API_URL = `${process.env.VUE_APP_API_URL}/profile/`;
    const headers = { token: localStorage.token };

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

    fetch(PROFILE_API_URL, { headers })
      .then((response) => response.json())
      .then((result) => {
        this.user = result;
      });
  },

  methods: {
    enrollUser(e) {
      const ENROLL_API_URL = `${process.env.VUE_APP_API_URL}/modulsaya/enroll`;

      e.preventDefault();
      const req = {
        student_id: this.user.id,
        course_id: this.modul.id,
      };
      this.$http
        .post(ENROLL_API_URL, req)
        .then(() => {
          this.$router.push("/kelasview/" + this.modul.id);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>