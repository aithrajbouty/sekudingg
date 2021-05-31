<template>
  <div class="module">
      <div class="justify-content-center align-self-center">
          <div class="card card-title"
                style="background: #FEF9C7;
                width: 400px; 
                left: 350px;
                height: 45px;
                box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
                text-align:center;
                margin-bottom:80px;">
            <h2><strong>Web Development</strong></h2>
    </div>
          <button class="btn btn-lg btn-warning" color="#E02780" @click=logUserOut><strong>LOGOUT</strong></button>
      </div>

      <div class="row mb-3">
        <div class="col-md-4 mt-4">
          <div>
            <b-card
              img-src="https://files.virgool.io/upload/users/240685/posts/bqlf6p609poi/hnolxu1til2y.png?x-img=v1/resize,w_700/optimize,q_100"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; background-color : #FEF9C7"
              class="mb-2"
            >
            <p align="Justify">This course will teach you how to design a web page using HTML</p>
            <p align="Right">Free</p>
            </b-card>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div>
            <b-card
              img-src="https://www.abdullahkus.com/wp-content/uploads/2020/05/php.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; background-color : #FEF9C7"
              class="mb-2"
            >
            <p align="Justify">PHP enables you to create develop websites and generate dynamic content</p>
            <p align="Right">Free</p>
            </b-card>
          </div>
        </div>
        <div class="col-md-4 mt-4">
          <div>
            <b-card
              img-src="https://i.ytimg.com/vi/_mj72QqsOs4/maxresdefault.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; background-color : #FEF9C7"
              class="mb-2"
            >
            <p align="Justify">Learn all the basic features of JavaScript, including making your website more interactive</p>
            <br>
            <p align="Right">Free</p>
            </b-card>
          </div>
        </div>
                <div class="col-md-4 mt-4">
          <div>
            <b-card
              img-src="https://miro.medium.com/max/900/1*OrjCKmou1jT4It5so5gvOA.jpeg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; background-color : #FEF9C7"
              class="mb-2"
            >
            <p align="Justify">Vue Js enables you to create develop websites and generate dynamic content</p>
            <p align="Right">Free</p>
            </b-card>
          </div>
        </div>
                <div class="col-md-4 mt-4">
          <div>
            <b-card
              img-src="https://files.virgool.io/upload/users/240685/posts/bqlf6p609poi/hnolxu1til2y.png?x-img=v1/resize,w_700/optimize,q_100"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; background-color : #FEF9C7"
              class="mb-2"
            >
            <p align="Justify">This course will teach you how to design a web page using HTML</p>
            <p align="Right">Free</p>
            </b-card>
          </div>
        </div>
                <div class="col-md-4 mt-4">
          <div>
            <b-card
              img-src="https://files.virgool.io/upload/users/240685/posts/bqlf6p609poi/hnolxu1til2y.png?x-img=v1/resize,w_700/optimize,q_100"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; background-color : #FEF9C7"
              class="mb-2"
            >
            <p align="Justify">This course will teach you how to design a web page using HTML</p>
            <p align="Right">Free</p>
            </b-card>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// import swal from "sweetalert";
export default {
  methods: {
    logUserOut(){
      localStorage.removeItem("token")
      this.$router.push("/login")
    }
  }
}
</script>