<template>

    <div class="logo-image">
        <svg width="300" clip-rule="evenodd" fill-rule="evenodd" version="1.1" viewBox="0 0 300 230" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
              <path class="logo-image" d="m14.802 16.49 65.962 0.165 16.374 44.798h-82.336v-44.962z" fill="var(--logo-color)" stroke="var(--logo-color)" stroke-linecap="round" stroke-linejoin="round"/>
              <path class="logo-image" d="m14.854 88.481 92.032 0.7273 15.9 44.258-107.93-0.022v-44.963z" fill="var(--logo-color)" stroke="var(--logo-color)" stroke-linecap="round" stroke-linejoin="round"/>
              <path class="logo-image" d="m14.854 160.54 117.74 0.306 16.18 44.563-133.92 0.093v-44.962z" fill="var(--logo-color)" stroke="var(--logo-color)" stroke-linecap="round" stroke-linejoin="round"/>
              <path class="logo-image" d="m92.125 15.263 67.86 189.07h19.198 24.302 19.199l67.86-189.07h-19.198-12.122-19.198l-48.924 134.69-48.459-134.69h-19.198-12.122-19.198z" fill="var(--logo-color)" stroke="var(--logo-color)" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>

</template>

<script>

</script>

<style lang="scss">
.logo-image {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: all 0.5s ease-in;
  animation: dash 3s linear forwards;
  
}

@keyframes dash {
  from {
    fill-opacity: 0;  
    stroke-width: 4;
  }
  98% {
    fill-opacity: 0;
    stroke-width: 4;
  }
  to {
    stroke-dashoffset: 0;  
    fill-opacity: 1;
    stroke-width: 4;
  
  }
}
</style>
