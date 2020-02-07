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


export default {
  components: {
    Homelogo
  },
    name: 'Główna',
    metaInfo: {
      title: 'szybko. tanio. zajebiście.',
      titleTemplate: null
    }
  
}
</script>