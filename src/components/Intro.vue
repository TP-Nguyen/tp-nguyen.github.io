<template>
  <v-parallax id="top" class="changeColor" :src="imageSrc">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 text-xl-h1 text-md-h3 text-lg-h2  font-weight-thin mb-4">
        {{ $t('GENERAL.LASTNAME') }} {{ $t('GENERAL.FIRSTNAME') }}
      </h1>
      <h4 class="subheading">
        {{ $t('ABOUTME.INTRO') }}
      </h4>
    </div>
  </v-parallax>
</template>

<script lang="ts">
export default {
  name: 'Intro', 
  computed: {
      imageSrc(){
               return new URL(`../../assets/logoTPN.svg`, import.meta.url).href;
          },
    }
}
</script>
<style lang="scss" scoped>
.changeColor {
  animation: colorchange 5s linear infinite;
  min-height: 100vh;
}

.subheading {
  white-space: pre-line;
  text-align: center;
}
</style>