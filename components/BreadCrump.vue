/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component will produce clickable breadcrumbs for easier navigation of the user 
through the website. The required parameters are:
    - the path to be followed for the click of each specific crumb */
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <h6>
    <span v-for="(item, index) in items" :key="index" class="crumb">
      <NuxtLink :to="item.url">
        <span>{{ item.label }}</span>
      </NuxtLink>
    </span>
  </h6>
</template>

<script>
// This component is not in layout as not all pages will use it
// also while we could have implemented it thanks to the store it would be the only use of the store and not worth implementing
// just for breadcrumbs
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.crumb {
  display: inline-block;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 2px;
  background: rgb(58, 133, 166);
  clip-path: polygon(0% 0%, 92% 0%, 100% 50%, 92% 100%, 0% 100%, 8% 50%);
  /*transform: skew(-20deg);*/
  /*border-radius: 10px 0px 0px 10px;*/
}

.crumb:hover {
  background: rgb(41, 96, 120);
}
.crumb span {
  color: #fff;
}
</style>