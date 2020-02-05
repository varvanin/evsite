<template>
  <Layout :show-logo="false">
    <!-- Homelogo intro -->
    <Homelogo :show-title="true" />
      
    
  </Layout>
</template>

<page-query>

</page-query>

<script>
import Homelogo from '~/components/Homelogo.vue'
import Logotype from '~/components/Logotype.vue'

export default {
  components: {
    Homelogo,
    Logotype
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
