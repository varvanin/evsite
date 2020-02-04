<template>
  <Layout :show-logo="false">
    <!-- Homelogo intro -->
    <Homelogo :show-title="true" />
    <g-link to="/about/">O Mnie</g-link>
    <g-link to="/projects/">Projekty</g-link>
    <g-link to="/contact/">Kontakt</g-link>
    
  </Layout>
</template>

<page-query>

</page-query>

<script>
import Homelogo from '~/components/Homelogo.vue'

export default {
  components: {
    Homelogo
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
