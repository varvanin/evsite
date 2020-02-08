<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>
      <div class="header__nav">
        <Nav v-if="showNav" />
      </div>

      <div class="header__right">
        <ToggleTheme />
      </div>
    </header>
    <transition name="fade" appear>
      <main class="main">
        <slot />
      </main>
    </transition>
    <footer class="footer">
      <div class="header__left">
        <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
        <span class="footer__links">
          Działa na
          <a href="//gridsome.org">Gridsome</a>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";
import Nav from "~/components/Nav.vue";

export default {
  props: {
    showLogo: { default: true },
    showNav: { default: true }
  },
  metaInfo: {
    title: "Tworzenie i projektowanie stron internetowych",
    titleTemplate: "%s | szybko. tanio. zajebiście."
  },
  components: {
    Logo,
    ToggleTheme,
    Nav
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "visby-round";
  src: url("../assets/fonts/visby-round.eot");
  src: url("../assets/fonts/visby-round.eot?#iefix") format("embedded-opentype"),
    url("../assets/fonts/visby-round.woff") format("woff"),
    url("../assets/fonts/visby-round-bold.eot"),
    url("../assets/fonts/visby-round-bold.woff");
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--header-color);
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__nav {
    display: flex;
    align-items: left;
  }

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}


.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
  min-height: calc(100vh - 60px);
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.3s;
}

.fade-enter-active {
  transition-delay: 0.3s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--footer-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  font-size: 0.6rem;
  z-index: 20;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
