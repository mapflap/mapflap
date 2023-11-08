<template>
  <!-- this div contains the whole page that is divided in 4 row, one for each main period of the history of Bergamo -->
  <!-- I will comment on the first row, everything is also applied to the remaining 3 rows -->
  <div class="container mt-5">
    <!-- First row - it contains an image (passed in StaticCard Component) and an explaination -->
    <TopPageGeneric :name="info.name" :tags="info.dynTags" :src_lottie="animation.src_lottie"
      :src_lottie_player="animation.src_lottie_player" class="mb-4" />
    <div class="row">
      <!-- the breakpoint is set to lg to better increase responsiveness and UI quality -->
      <!-- the classes order-lg-1 and order-1 are used to allow the alternate visualization of images and text while 
      using desktop version and, at the same time, to allow the mobile versione to always stack the image on top of 
      the explaination (in order to have an appealing and coherent visualization) -->
      <div class="col-lg-5 order-lg-1 order-1">
        <!-- The StaticCardComponent takes an image and, with it, produces a static card (i.e: a non clickable card) -->
        <StaticCardComponent :image="sections.section1.image" />
      </div>
      <!-- for the text, the ordering classes are order-lg-2 and order-2 beacuse this row, both in desktop and mobile,
      visualization, will display first the image and than the text -->
      <div class="col-lg-7 order-lg-2 order-2 align-self-center">
        <h2 class="subtitle">
          The Name
          <p class="snippet">
            Map flap, what does it mean? The origin of the name of this little project comes from two main reasons. The
            first one, I must be honest, is because it sounds really good. It seems that those two words were
            invented to be used together, isn't it? The second reason why (more serious, I promise) is because of my
            passion, I am a Geoinformatics Engineer and I am interested in all the technologies that help humans to locate themselves
            and things on the Earth (Elon, let me know when I can also add Mars).
            The main idea of this project is to build piece by piece a little digital world to show off my passion.
          </p>
        </h2>
      </div>
    </div>
    <hr />
    <!-- Second row -->
    <div class="row">
      <!-- here the ordering classes are alternated (order-lg-1 and order-2) because:
      - in desktop the displaying order will be: Text, Image
      - in mobile the displaiyng order will be (as always): Image, Text  -->
      <div class="col-lg-7 order-lg-1 order-2 align-self-center">
        <h2 class="subtitle">The Aim</h2>
        <p class="snippet">
          The aim of this project, as said, is to build a little digital world to show which is my passion. More
          concretely, I will use Mapflap to share some little works and experiments with any interested human, animal or
          martian (the latter depends again on you Elon) equipped with an internet connection. Have fun and thanks for
          dropping by. 👾
        </p>
      </div>
      <div class="col-lg-5 order-lg-2 order-1">
        <StaticCardComponent :image="sections.section2.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMapflapPage",
  data() {
    return {
      sections: {
        section1: {
          id: 0,
          image:
            '/about_mapflap/first_image.webp',
        },
        section2: {
          id: 1,
          image: '/about_mapflap/second_image.webp',
          title: '',
        },

      },
      info: {
        name: "About Mapflap",
        description: "",
        dynTags: ['TheName', 'TheAim', 'Mapflap', 'Geospatial']
      },
      animation: {
        src_lottie: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
        src_lottie_player: "https://assets3.lottiefiles.com/packages/lf20_imsi6g9g.json"
      }
    }
  },
  head() {
    return {
      title: `About Mapflap`,
      meta: [
        {
          hid: 'descriptionAboutMapflap',
          name: 'description',
          content: `The main idea behind this project`,
        },
        {
          hid: 'keywordsAboutMapflap',
          name: 'keywords',
          content: ['The name', 'The aim', 'MapFlap'],
        },
      ],
    }
  },
}
</script>

<style scoped>
.subtitle {
  font-weight: 400;
}
</style>