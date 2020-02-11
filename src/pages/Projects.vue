<template>
  <Layout :show-logo="true" :showNav="true">
    <div class="works">
      <WorkCard v-for="edge in $page.works.edges" :key="edge.node.id" :work="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query {
  works: allWork(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
      }
    }
  }
}
</page-query>

<script>
import WorkCard from "~/components/WorkCard.vue";
export default {
  components: {
    WorkCard
  },
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style lang="scss">
.works {
  display: flex;
  flex-direction: row;
  padding: 1em;
}

@media all and (max-width: 500px) {
  .works {
    flex-direction: column;
  }
}
</style>
