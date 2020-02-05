<template>
  <div id="app">
    <transition appear
        appear-active-class="fade-enter-active"
        @before-appear="beforeAppear"
        @appear="appear"
        @after-appear="afterAppear">
    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="header__left">
        <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
        <span class="footer__links">
        Powered by
        <a href="//gridsome.org">Gridsome</a>
      </span>
      </div>
    </footer>
     </transition>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true }
  },
  components: {
    Logo,
    ToggleTheme
  },
  methods: {
    beforeAppear: function(el) {
      console.log('beforeAppear')
    },
    appear: function(el) {
      console.log('appear!')
    },
    afterAppear: function(el) {
      console.log('afterAppear!')
    }
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

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
  min-height: calc(100vh - 130px);
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
