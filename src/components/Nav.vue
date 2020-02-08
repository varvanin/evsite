<template>
    <nav class="nav__links">
      <g-link to="/about/">o mnie</g-link>
      <g-link to="/projects/">projekty</g-link>
      <g-link to="/blog/">artykuly</g-link>
      <g-link to="/contact/">kontakt</g-link>
    </nav>
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
      text-decoration: none;
    }
  }
}
</style>
