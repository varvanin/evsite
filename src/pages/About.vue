<template>
  <Layout :show-logo="true">
      <Nav v-if="showNav" />
   
     
  </Layout>
</template>

<page-query>

</page-query>

<script>
import Nav from "~/components/Nav.vue";

export default {
  props: {
    showNav: { default: true }
  },
  components: {
    Nav
  }
}
</script>

