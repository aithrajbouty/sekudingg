<template>
  <div class="accordion" role="tablist" style="margin-top:-130px;">
    <h2 style="text-align:center;"><strong>Frequently Asked Question</strong></h2>
    <br>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="info">Who is Sekuuuding for?</b-button>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Sekuuu.ding is for absolute beginners in the world of coding platform and those who have tried other resources without success. In reality, Sekuuu.ding is for anyone who wants to work as a developer, do freelancing work, build a startup, or just hack together a homepage for yourself. All the tools you need are here. 
We’ve built an in-depth curriculum designed to take you 100% of the way to becoming a developer. Many other resources out there teach you just the basics of programming. With Sekuuu.ding you’ll create your own websites, games, and social media sites.
The curriculum has also been designed in a modular fashion, making skimming through lessons a breeze.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-2 variant="info">What is the goal of Sekuuding?</b-button>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>The goal of Sekuuu.ding is to provide a complete path for students to go from zero programming knowledge to employed as web developers while working with other students and picking up the skills to become self sufficient along the way.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="info">Where do I sign up?</b-button>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>By registering you will be able to view all the materials and the complete curriculum, as well as easily track your progress. We do not collect any user data and minimize the number of emails.
The trick is to click the Login / Sign Up Button, then select "You don't have an account yet and Sign Up by filling in your personal data".</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-4 variant="info">Is Sekuuding is free?</b-button>
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Yes! Sekuuu.ding is an open-source project created and maintained by hard working volunteers. To find out how you can help us, please visit our how to contribute page.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
      <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-5 variant="info">How is Sekuuding different from other programs?</b-button>
      </b-card-header>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>Sekuuu.ding is different from other online programs in that it pulls the best resources from around the web and compiles them to create a complete curriculum. In many other programs the material is formatted to meet their specific curriculum. This means that not all of the lessons are top-notch. Sekuuu.ding sidesteps this downfall by pulling various free video resources from around the web and compiles them in one place.</b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
      }
    }
  }
</script>

