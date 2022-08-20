/* Page for ALL ITINERARIES*/
<template>
  <!-- class container in order to center the contend -->
  <!-- class mt-5 in order to heva a margin top of 5 units -->
  <div class="container mt-5">
    <!-- this component creates the top (first row) of the page. 
    The passed parameters are the name (for the title of the page), 
    the descritpion (in order to describe the content) and the tags 
    (in order to dynamically display the hashtags) -->
    <TopPageGeneric :name="header.name" :description="header.description" :tags="tags"
      :src_lottie="animation.src_lottie" :src_lottie_player="animation.src_lottie_player" />
    <hr />
    <!-- rows of poi cards -->
    <div class="row" v-if="works.length == 0">
    <div class="col-md align-self-center">
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_fQij9m.json" background="transparent" speed="1"
        style=" height: 500px;" loop autoplay></lottie-player>

</div>
<div class="col align-self-center" style="text-align:center;">
  <p class="header">Work in progress ... </p>
</div>
    </div>
    <div class="row mt-4">
      <!-- this component creates a number of cards equal to the total 
      number of events (because in this page a user can filter for specific 
      category (thanks to the CategoryComponent) or look at all the available 
      events displayed thanks to the CardComponent -->
      <CardComponent v-for="work in works" :id="work.codeWork" :key="work.codeWork" :name="work.name"
        :image="work.image" :path="pathToMachineLearning" class="col-xl-6 p-2" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GeospatialPage',

  async asyncData({ $axios }) {
    // Get all the itineraries previews data from server
    const { data } = await $axios.get('/api/machineLearning-works')

    const tagList = ['ML', 'AI', 'Data']
    data.forEach((work) => {
      tagList.push(work.shortName)
    })

    return {
      works: data,
      tags: tagList,
    }
  },
  data() {
    // static data that never changes
    return {
      header: {
        name: 'Machine Learning',
        description:
          'Inside this section it is possible to find some simple data analysis performed with a focus on the machine learning world. Here I will upload experiments with different kind of Machine Learning algorithms.',
      },
      pathToMachineLearning: 'machine-learning',
      animation: {
        src_lottie: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
        src_lottie_player: "https://assets7.lottiefiles.com/private_files/lf30_8npirptd.json"
      }
    }
  },
  head() {
    return {
      title: 'Mapflap | Machine Learning',
      meta: [
        {
          hid: 'descriptionML',
          name: 'description',
          content: 'in the current page all the available works for the Machine Learning section are shown. A brief introductory description of the page is also provided',
        },
        {
          hid: 'keywordsML',
          name: 'keywords',
          content: [this.tags.toString(), 'Machine Learning', 'Data Analysis'],
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>