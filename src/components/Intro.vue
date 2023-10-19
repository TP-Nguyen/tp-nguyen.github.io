<template>
       <v-parallax id="top" class="changeColor"
    src="/public/logoTPN.svg"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 v-motion-fade-visible-once class="text-h1 font-weight-thin mb-4">
        {{ $t('GENERAL.LASTNAME') }} {{ $t('GENERAL.FIRSTNAME') }} 
      </h1>
      <h4 v-motion-fade-visible class="subheading">
        {{ $t('ABOUTME.INTRO') }} 
      </h4>
    </div>
  </v-parallax>
</template>

<script lang="ts">
     export default{
          name:'Intro'
     }
</script>
<style lang="scss" scoped>
    .changeColor{
      animation: colorchange 5s linear infinite;
    }
    .subheading{
      white-space: pre-line;
      text-align: center;
    }
</style>