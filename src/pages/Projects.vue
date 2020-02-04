<template>
  <Layout :show-logo="true">
   
     <nav />
    
  </Layout>
</template>

<page-query>

</page-query>

<script>
import Nav from '~/components/Nav.vue'
export default {
  components: {
    Nav
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
