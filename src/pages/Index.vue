<template>
  <Layout :show-logo="false">
    <!-- Homelogo intro -->
    <Homelogo :show-title="true" />
    
  </Layout>
</template>


<script>
import Homelogo from '~/components/Homelogo.vue'

export default {
  components: {
    Homelogo,
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
