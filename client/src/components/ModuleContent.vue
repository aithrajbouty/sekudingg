<template>
  <div class="module">
    <div class="justify-content-center align-self-center">
        <button class="btn btn-lg btn-warning" color="#FEF9C7"><strong>Web Development</strong></button>
    </div>

    <div class="row mb-3">
      <div class="col-md-4 mt-4" v-for="modules in courses" :key="modules._id">
        <div>
          <b-card
            img-v-if="modules.image" :img-src="modules.image" :img-alt="modules.name"
            img-top
            tag="article"
            style="max-width: 20rem; background-color : #FEF9C7"
            class="mb-2"
          >
          <p align="Justify">{{modules.description}}</p>
          <p align="Right">{{modules.price}}</p>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const API_URL = "http://localhost:3000/module"

export default{
  name: "ModuleContent",
  data: () => ({
    error: "",
    courses: []
  }),

  mounted(){
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.courses = result;
      });
  },
  methods: {}
};
</script>

<style>

</style>