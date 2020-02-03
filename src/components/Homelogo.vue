<template>
  <div class="homelogo">
    <div v-if="darkTheme">
      <g-image
        alt="homelogo image"
        class="homelogo__image"
        src="~/assets/images/ev_invert.svg"
        width="180"
        height="180"
        blur="0"
      />
    </div>
    <div v-else>
      <g-image
        alt="homelogo image"
        class="homelogo__image"
        src="~/assets/images/ev.svg"
        width="180"
        height="180"
        blur="0"
      />
    </div>

    <h1 v-if="showTitle" class="homelogo__site-title">{{ $static.metadata.siteName }}</h1>

    <p class="homelogo__intro">Strone internetowe</p>

    <p class="homelogo__links">
      <a href="//twitter.com/gridsome">Follow on Twitter</a>
      <a href="//github.com/gridsome/gridsome-starter-blog">GitHub</a>
    </p>
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
export default {
	data() {
    return {
      darkTheme: false
    }
  },
  methods: {
    toggleTheme() {
      this.darkTheme = !this.darkTheme

      // This is using a script that is added in index.html
      window.__setPreferredTheme(
        this.darkTheme ? 'dark' : 'light'
      )
    }
  },
  mounted() {
    if (window.__theme == 'dark') this.darkTheme = true
  },
  props: ["showTitle"]
};
</script>

<style lang="scss">
.homelogo {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    width: 300px;
    height: 230px;
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
    }
  }
}
</style>
