<template>
  <div id="app">
    <particles-bg v-if="showParticles" type="custom" :config="config" :bg="true" />
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
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
      <span class="footer__links">
        Działa na
        <a href="//gridsome.org">Gridsome</a>
      </span>
    </footer>
  </div>
</template>

<script>

import { ParticlesBg } from "particles-bg-vue";

import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";
import Nav from "~/components/Nav.vue";
import icon from "~/assets/icon.js";

export default {
    data: function() {
    return {
      config: {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-30, 30],
        body: icon,
        alpha: [0.6, 0],
        scale: [0.1, 0.4],
        position: "all",
        cross: "dead",
        random: 15
      }
    };
  },
  props: {
    showLogo: { default: true },
    showNav: { default: true },
    showParticles: { default: true }
  },
  metaInfo: {
    title: "Tworzenie i projektowanie stron internetowych",
    titleTemplate: "%s"
  },
  components: {
    Logo,
    ToggleTheme,
    ParticlesBg,
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

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.1s;
}

.fade-enter-active {
  transition-delay: 0.1s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.footer {
  flex: 0 0 auto;
  padding: 0 calc(var(--space) / 2);
  font-size: 0.55rem;
  z-index: 20;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>