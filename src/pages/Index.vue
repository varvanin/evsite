<template>
  <Layout :show-logo="false" :showNav="false">
    <!-- Homelogo intro -->
    <Homelogo :show-title="true" />
    <Wave />
  </Layout>
</template>

<page-query>

</page-query>

<script>
import Homelogo from '~/components/Homelogo.vue';
import Wave from "~/components/Wave";

export default {
  components: {
    Homelogo,
    Wave
  },
    name: 'Główna',
    metaInfo: {
      title: 'szybko. tanio. zajebiście.',
      titleTemplate: null
    }
  
}
</script>