<template>
  <div class="work-card content-box" :class="{'work-card--has-poster' : work.poster}">
    <div class="work-card__header">
      <g-image
        alt="Cover image"
        v-if="work.cover_image"
        class="work-card__image"
        :src="work.cover_image"
      />
    </div>
    <div class="work-card__content">
      <h2 class="work-card__title" v-html="work.title" />
      <p class="work-card__description" v-html="work.description" />

      <g-link class="work-card__link" :to="work.path">Link</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["work"]
};
</script>

<style lang="scss">
.work-card {
  margin: 1em;
  position: relative;
  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    padding: 0.5em;
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    &:empty {
      display: none;
    }
  }
  &__image {
    min-width: 100%;
  }
  &__title {
    margin-top: 0;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.5);
  }
  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>