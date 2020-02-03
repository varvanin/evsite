<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />
    
  </Layout>
</template>


<script>
import Author from '~/components/Homelogo.vue'

export default {
  components: {
    Homelogo
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
