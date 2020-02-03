<template>
  <Layout :show-logo="false">
    <!-- Homelogo intro -->
    <Homelogo :show-title="true" />
    
  </Layout>
</template>

<page-query>
query {

}
</page-query>

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
