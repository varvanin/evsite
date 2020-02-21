<template>
    <div class="nav nav__links">
      <g-link to="/about/">O mnie</g-link>
      <g-link to="/projects/">Projekty</g-link>
      <g-link to="/contact/">Kontakt</g-link>
    </div>
</template>

<script>
</script>

<style lang="scss">
.nav {
  margin: 0 auto;

  &__links {
    margin: 0;
    a {
      margin: 0 0.5em;
      font-family: "visby-round";
      color: var(--logo-color);
      text-decoration: none;
    }
  }
}
</style>
