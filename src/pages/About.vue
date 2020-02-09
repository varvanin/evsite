<template>
  <Layout :show-logo="true" :showNav="true">
    <div class="content">
      <div class="itm profile">
        <g-image src="~/assets/images/profile.png" width="500" />
      </div>
      <div class="itm about">
        <h1>O mnie</h1>
        <p>
          Witaj, mam na imię Eugeniusz. Zajmuję się tworzeniem profesjonalnych stron internetowych w
          zaje...(dobrych) cenach. Duży nacisk kłade na funkcjonalność, przyjazną nawigację oraz zachowanie
          wszelkich dzisiejszych standardów WEB. Tworząc strony www stosuje najnowsze technologie i
          oprogramowania, a wszystkie wykonane przeze mnie strony internetowe są responsywne i zoptymalizowane
          do pozycjonowania w wyszukiwarkach internetowych.
        </p>
      </div>
    </div>
  </Layout>
</template>

<page-query>

</page-query>

<script>
export default {
  metaInfo: {
    title: "O mnie"
  }
};
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: row;
  transition: background-color 0.6s;
  border-radius: var(--radius);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02),
    1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.6s;

   .itm {
     justify-content: center;
     padding: 2em;
   }

   img {
     width: 100em;
   }
  
}

@media all and (max-width: 500px) {
	.content { flex-direction: column; }
}

</style>

