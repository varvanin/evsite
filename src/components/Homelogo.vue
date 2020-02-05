<template>
  <div class="homelogo">
   
  <logotype />
  
    <h1 v-if="showTitle" class="homelogo__site-title">{{ $static.metadata.siteName }}</h1>

    <p
      class="homelogo__intro">tworzenie i projektowanie stron internetowych.</p>

    <p class="homelogo__links">
       <g-link to="/about/">.o mnie</g-link>
       <g-link to="/projects/">.projekty</g-link>
       <g-link to="/contact/">.kontakt</g-link>   
    </p>

    <div class="social">
        <g-link to="https://wa.me/720971779"><font-awesome :icon="['fab', 'whatsapp']"/></g-link>
        <g-link to="https://www.facebook.com/varvanin"><font-awesome :icon="['fab', 'facebook']"/></g-link>
        <g-link to="https://www.instagram.com/eugene_varvanin"><font-awesome :icon="['fab', 'instagram']"/></g-link>
        <g-link to="mailto:varvanin84@gmail.com"><font-awesome :icon="['fas', 'at']"/></g-link>
        
        
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Logotype from '~/components/Logotype.vue'

export default {
  props: ["showTitle"],

  components: {
    Logotype
  },
};

</script>

<style lang="scss">
.homelogo {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 0.4) 0;
  &__image {
    width: 300px;
    height: 230px;
  }

  &__svg {
    color: var(--logo-color);
  }
  &__intro {
    opacity: 0.8;
  }
  &__site-title {
    font-size: 1.5em;
  }
  &__links {
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
      text-decoration: none;
    }
  }
}

.social {
    font-size: 1.6em;
    a {
          color: var(--logo-color);
          padding: 0.2em;
        }
  }
  
</style>
