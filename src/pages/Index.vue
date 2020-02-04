<template>
  <Layout :show-logo="false">
    <!-- Homelogo intro -->
    <Homelogo :show-title="true" />
     
     <nav />
    
  </Layout>
</template>

<page-query>

</page-query>

<script>
import Homelogo from '~/components/Homelogo.vue'
import Homelogo from '~/components/Nav.vue'

export default {
  components: {
    Homelogo
    Nav
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
