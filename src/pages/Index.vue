<template>
  <Layout :show-logo="false">
    <!-- Homelogo intro -->
    <Homelogo :show-title="true" :key="componentKey" />
     
    
  </Layout>
</template>

<page-query>

</page-query>

<script>
import Homelogo from '~/components/Homelogo.vue'

export default {
data() {
    return {
      componentKey: 0
    },
  components: {
    Homelogo
  },
    methods: {
    forceRerender() {
      this.componentKey += 1
    }
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
