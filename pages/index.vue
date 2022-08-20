<template>
  <div class="container mt-5">
    <!-- this is the first (top) row of the homepage and includes
     the Title of the site, a small descritpion of its purpose 
    and an animation -->
    <div class="row">
      <div class="col-md margin-top">
        <h1 class="header-index mb-4">Mapflap</h1>
        <p class="snippet mb-4">
          Hi, I'm Francesco. Nice to meet you and welcome to Mapflap! Here you can find some info about myself and a
          selection of little personal projects. Thanks for dropping by. 👾
        </p>
        <div class="center">
          <NuxtLink to="about-mapflap">
            <div class="button btn">Read more about Mapflap</div>
          </NuxtLink>
        </div>
      </div>
      <div class="col-md center-div">

        <img height="500px" src="/homepage/face.png" alt="Francesco Memoji">

        <!--  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_rocodyl6.json" background="transparent"
          speed="1" style="width: 600px; height: 550px" loop autoplay class="image"></lottie-player> -->
      </div>
    </div>
    <div class="row mt-4 g-0">
      <!-- this component creates the 4 main sections in which the site is 
      structured (POIs, Itineraries, Events and Services) -->

      <div :class="`image col-sm-7 p-2 active position-relative menu`">
        <NuxtLink :to="`${sections.s1.path}`">
          <img :src="`${sections.s1.image}`" class="card-image img-fluid" :alt="`${sections.s1.name}-image`" />
          <div class="middle">
            <h1>{{ sections.s1.name }}</h1>
          </div>
        </NuxtLink>
      </div>

      <div :class="`image col-sm-${sections.s2.col} p-2 active position-relative menu`">
        <NuxtLink :to="`${sections.s2.path}`">
          <img :src="`${sections.s2.image}`" class="card-image img-fluid" :alt="`${sections.s2.name}-image`" />
          <div class="middle">
            <h1>{{ sections.s2.name }}</h1>
          </div>
        </NuxtLink>
      </div>

      <div :class="`image col-sm-${sections.s3.col} p-2 active position-relative menu`">
        <NuxtLink :to="`${sections.s3.path}`">
          <img :src="`${sections.s3.image}`" class="card-image img-fluid" :alt="`${sections.s3.name}-image`" />
          <div class="middle">
            <h1>{{ sections.s3.name }}</h1>
          </div>
        </NuxtLink>
      </div>

      <div :class="`image col-sm-${sections.s4.col} p-2 active position-relative menu`">
        <NuxtLink :to="`${sections.s4.path}`">
          <img :src="`${sections.s4.image}`" class="card-image img-fluid" :alt="`${sections.s4.name}-image`" />
          <div class="middle">
            <h1>{{ sections.s4.name }}</h1>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    // Home Page data never changes
    return {
      sections: {
        s1: {
          id: 0,
          name: 'Geospatial',
          image: '/homepage/geospatial.jpeg',
          col: 7,
          path: 'geospatial',
        },
        s2: {
          id: 1,
          name: 'Machine Learning',
          image: '/homepage/machineLearning.webp',
          col: 5,
          path: 'machine-learning',
        },
        s3: {
          id: 2,
          name: 'Just Because',
          image: '/homepage/justBecause.jpeg',
          col: 5,
          path: 'just-because',
        },
        s4: {
          id: 3,
          name: 'About Mapflap',
          image: '/homepage/surrogatoMapflap.webp',
          col: 7,
          path: 'about-mapflap',
        },
      },
    }
  },
  head() {
    return {
      title: `Mapflap | Homepage`,
      meta: [
        {
          hid: 'descriptionHomepage',
          name: 'description',
          content: `Homepage showing all possible sections of the site`,
        },
        {
          hid: 'keywordsHomepage',
          name: 'keywords',
          content: [
            'Homepage',
            'Geospatial',
            'Machine Learning',
            'Just Because',
            'About Mapflap',
            'CV',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
/* START Styles for top part (title + description + animation) +++ */

.header-index {
  font-weight: 900;
  font-size: 7vw;
}

.center-div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}

.margin-top {
  margin-top: 80px;
}

@media screen and (max-width: 1100px) {
  .header-index {
    font-size: 3em;
  }
}

@media screen and (max-width: 375px) {
  .header-index {
    font-size: 12vw;
  }
}

@media screen and (max-width: 991px) {
  .margin-top {
    margin-top: 0;
  }
}

/* END Styles for top part (title + description + animation) +++ */

/* START Styles for bottom part (4 cards) +++ */

.image {
  padding: 8px;
  height: 400px;
}

.img-fluid {
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  transition: 0.5s ease;
}

.menu {
  padding-bottom: 6px;
  padding-top: 6px;
}

.row .menu:hover .img-fluid {
  opacity: 0.3;
}

.row .menu:hover .middle {
  opacity: 0.9;
}

.middle {
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  color: rgba(0, 0, 0, 0.866);
}

@media screen and (max-width: 992px) {
  .middle {
    color: rgba(0, 0, 0, 0.866);
    opacity: 0.9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .img-fluid {
    opacity: 0.4;
  }

  .center {
    text-align: center;
  }
}

/* END Styles for bottom part (4 cards) +++ */
.button {
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(166, 90, 58);
  color: white;
  width: 24rem;
  font-weight: 600;
  transition: 0.5s;
}

.button:hover {
  width: 25.5rem;
}
</style>
