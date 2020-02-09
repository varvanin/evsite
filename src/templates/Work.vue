<template>
  <Layout>
    <div class="work-title">
      <h1 class="work-title__text">
        {{ $page.work.title }}
      </h1>

    </div>

    <div class="work content-box">
      <div class="work__header">
        <g-image alt="Cover image" v-if="$page.work.cover_image" :src="$page.work.cover_image" />
      </div>

      <div class="work__content" v-html="$page.work.content" />

      <div class="work__footer">
        <WorkTags :work="$page.work" />
      </div>
    </div>

    <div class="work-comments">
      <!-- Add comment widgets here -->
    </div>

  </Layout>
</template>

<script>
import WorkTags from '~/components/WorkTags'

export default {
  components: {
    WorkTags
  },
  metaInfo () {
    return {
      title: this.$page.work.title,
      meta: [
        {
          name: 'description',
          content: this.$page.work.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Work ($id: ID!) {
  work: work (id: $id) {
    title
    path
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.work-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.work {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.work-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.work-author {
  margin-top: calc(var(--space) / 2);
}
</style>
