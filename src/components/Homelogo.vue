<template>
  <div class="homelogo">
      <g-image
        alt="homelogo image"
        class="homelogo__image"
        src="~/assets/images/ev.svg"
        width="180"
        height="180"
        blur="0"
      />

    <h1 v-if="showTitle" class="homelogo__site-title">{{ $static.metadata.siteName }}</h1>

    <p class="homelogo__intro">Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker</p>

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
