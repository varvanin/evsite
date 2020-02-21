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
      <main class="main">
        <slot />
      </main>
    <footer class="footer">
  
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
    showNav: { default: true },
  },
  metaInfo: {
    title: "Tworzenie i projektowanie stron internetowych",
    titleTemplate: "%s"
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
  src: url("../assets/fonts/visby-round.woff");
  src: url("../assets/fonts/visby-round.eot?#iefix") format("embedded-opentype"),
    url("../assets/fonts/visby-round-bold.woff");
}

.header {
  display: flex;
  position: sticky;
  background-color: var(--bg-color);
  justify-content: space-between;
  align-items: center;
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
  flex: 1 0 auto;
  margin: 0 auto;
  min-height: calc(88vh);
}

.footer {
  display: block;
  padding: 0 calc(var(--space) / 2);
  z-index: 20;
}
</style>