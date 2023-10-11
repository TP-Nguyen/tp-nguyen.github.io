<template>
       <v-parallax
    src="/public/logoTPN.png"
  >
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        {{ $t('GENERAL.LASTNAME') }} {{ $t('GENERAL.FIRSTNAME') }} 
      </h1>
      <h4 class="subheading">
        {{ $t('ABOUTME.INTRO') }} 
      </h4>
    </div>
  </v-parallax>
</template>

<script lang="ts">

</script>  
<style lang="scss" scoped>
     
</style>