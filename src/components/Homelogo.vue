<template>
  <div class="homelogo">
  <div>
<svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="300" version="1.1" viewBox="0 0 300 230">

    <style>
        .logo-image {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: dash 4s linear forwards;

        }


        @keyframes dash {

            from {
                fill:#fff;
                fill-opacity:0;
                stroke:#fff;
                stroke-width:4;
            }

            98% {
                fill:#fff;
                fill-opacity:0;
                stroke:#fff;
                stroke-width:4;
            }


            to {
                stroke-dashoffset: 0;
                fill:000;
                fill-opacity:1;
                stroke-width:4;
                stroke:#000;

            }

        }
    </style>


 <path class="logo-image" fill='var(--logo-color)' stroke='var(--logo-color)' d="M14.8024+16.4901L80.7644+16.6551L97.1384+61.4526L14.8024+61.4526L14.8024+16.4901Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
 <path class="logo-image" fill='var(--logo-color)' stroke='var(--logo-color)' d="M14.8544+88.4811L106.886+89.2084L122.786+133.466L14.8544+133.444L14.8544+88.4811Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
 <path class="logo-image" fill='var(--logo-color)' stroke='var(--logo-color)' d="M14.8544+160.539L132.595+160.845L148.775+205.408L14.8544+205.501L14.8544+160.539Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
 <path class="logo-image" fill='var(--logo-color)' stroke='var(--logo-color)' d="M92.1254+15.2633L159.985+204.333L179.183+204.333L203.485+204.333L222.684+204.333L290.544+15.2633L271.346+15.2633L259.224+15.2633L240.026+15.2633L191.102+149.949L142.643+15.2633L123.445+15.2633L111.323+15.2633L92.1254+15.2633Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>

</svg>
</div>

    <h1 v-if="showTitle" class="homelogo__site-title">{{ $static.metadata.siteName }}</h1>

    <p class="homelogo__intro">Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.</p>

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
  
  &__svg {
    color:var(--logo-color);
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
