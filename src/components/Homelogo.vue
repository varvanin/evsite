<template>
  <div class="homelogo">

    <logotype />

    <h1 v-if="showTitle" class="homelogo__site-title">{{ $static.metadata.siteName}}</h1>

    <p class="homelogo__intro">{{ $static.metadata.siteDescription }}</p>

    <p class="homelogo__links">
      <g-link to="/about/">O mnie</g-link>
      <g-link to="/projects/">Projekty</g-link>
      <g-link to="/contact/">Kontakt</g-link>
    </p>

    <div class="social">
      <g-link to="https://wa.me/720971779">
        <font-awesome :icon="['fab', 'whatsapp']" />
      </g-link>
      <g-link to="https://www.facebook.com/varvanin">
        <font-awesome :icon="['fab', 'facebook']" />
      </g-link>
      <g-link to="https://www.instagram.com/eugene_varvanin">
        <font-awesome :icon="['fab', 'instagram']" />
      </g-link>
      <g-link to="mailto:varvanin84@gmail.com">
        <font-awesome :icon="['fas', 'at']" />
      </g-link>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Logotype from "~/components/Logotype.vue";

export default {
  props: ["showTitle"],

  components: {
    Logotype
  }
};
</script>

<style lang="scss">
.homelogo {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  z-index: 999;
  padding: calc(var(--space) / 0.4) 0;

  &__svg {
    color: var(--logo-color);
  }
  &__intro {
    opacity: 0.9;
  }
  &__site-title {
    font-size: 1.8em;
  }
  &__links {
    margin-top: 0.5em;
    a {
      margin: 0 0.5em;
      color: var(--logo-color);
      padding: .3em;
      font-family: 'visby-round', Helvetica, Arial, sans-serif;
      text-decoration: none;
    }
  }
}

.social {
  font-size: 1.5em;
  a {
    color: var(--logo-color);
    padding: 0.2em;
  }
}
</style>
