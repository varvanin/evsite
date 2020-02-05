<template>
    <p class="nav__links">
       <g-link to="/about/">o mnie</g-link>
       <g-link to="/projects/">projekty</g-link>
       <g-link to="/contact/">kontakt</g-link>   
    </p>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.nav {
  margin: 0 auto;
  text-align: center;
  padding: calc(var(--space) / 0.4) 0;

  &__links {
    margin: -3.7em 0 0 3.7em;
    a {
      margin: 0 0.5em;
      text-decoration: none;
    }
  }
}

</style>
