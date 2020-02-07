<template>
    <nav class="nav__links">
       <g-link to="/about/">o mnie</g-link>
       <g-link to="/projects/">projekty</g-link>
       <g-link to="/contact/">kontakt</g-link>   
    </nav>
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
    display: flex;
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
