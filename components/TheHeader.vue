/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used to create the navbar of the website. Even if this component is only 
used in the default.vue layout we decided to implement it separately in order to maintain a 
certain order and do not act directly on the layout for future modifications*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>

  <nav class="navbar navbar-expand-xl navbar-light px-3 header">
    <!-- <div class="container"> -->
    <a class="navbar-brand" href="/"
      ><img
        class="logo"
        src="/favicon.ico"
        alt="logo"
        width="70"
        height="70"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarToggler" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          style="color: white"
        >
          <div class="cont">
            <NuxtLink :to="navItem.path" style="color: white" class="nav-link">
              {{ navItem.name }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
    <!-- </div> -->
  </nav>
</template>

<script scoped>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'Geospatial',
          path: '/geospatial',
        },
        {
          name: 'Machine Learning',
          path: '/machine-learning',
        },
        {
          name: 'Just Because',
          path: '/just-because',
        },
        {
          name: 'Portfolio',
          path: '/portfolio',
        },
        {
          name: 'About Mapflap',
          path: '/about-mapflap',
        },
      ],
    }
  },
}
</script>

<style scoped>
a {
  font-size: 25px;
  font-weight: 300;
}
.nav-link {
  margin: 0 10px 5px 10px;
  border-radius: 10px;
}
.nav-link:hover {
  background: rgba(166 , 90, 58, 0.5);
}
@media screen and (max-width: 992px) {
  .nav-link:hover {
    background: none;
    color: black;
  }
  .cont:hover {
    border-radius: 10px;
    background: rgba(166, 90, 58, 0.5);
    width: 40%;
  }
}
.header {
  background: rgb(58, 133, 166);
}
</style>
