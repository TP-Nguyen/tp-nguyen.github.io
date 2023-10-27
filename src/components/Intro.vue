<template>
  <v-parallax id="top" class="changeColor" :src="imageSrc">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1  class="text-h1 font-weight-thin mb-4">
        {{ $t('GENERAL.LASTNAME') }} {{ $t('GENERAL.FIRSTNAME') }}
      </h1>
      <h4  class="subheading">
        {{ $t('ABOUTME.INTRO') }}
      </h4>
    </div>
  </v-parallax>
</template>

<script lang="ts">

export default {
  name: 'Intro', computed: {
      imageSrc(){
               return new URL(`../../src/assets/logoTPN.svg`, import.meta.url).href;
          }
    }
}
</script>
<style lang="scss" scoped>
.changeColor {
  animation: colorchange 5s linear infinite;
}

.subheading {
  white-space: pre-line;
  text-align: center;
}
</style>