<template>
       <div class="navi">
        <v-tabs
        grow
        align-tabs="end"
        
  >
  <!-- <v-tab hide-slider href="#top" >

    <v-img class="ma-2" max-width="30px" src="../../../public/logoTPN.svg"/>
  </v-tab> -->
  <v-tab hide-slider href="#aboutme" >
      {{ $t('GENERAL.ABOUTME') }}
    </v-tab>
    <v-tab hide-slider href="#experience">
      {{ $t('GENERAL.EXPERIENCE') }}
    </v-tab>    
    <v-tab hide-slider href="#project">
      {{ $t('GENERAL.PROJECT') }}
    </v-tab>    
    <v-tab hide-slider href="#contact">
      {{ $t('GENERAL.CONTACT') }}
    </v-tab>
  </v-tabs>
  <!-- <v-progress-linear :model-value="scrollwidth" :height="5"></v-progress-linear> -->
       </div>
   </template>
<script lang="ts">
export default{
  name: 'Topbar',
}
</script>
<style lang="scss" scoped>
.navi {
  position: sticky;
  background: rgba(0, 0, 0, .8);
  border-bottom: 1px solid rgba(255, 255, 255, .3);
  top: 0;
  z-index: 10;
  .scrollbar {
    // width: 100vw;
    height: 10px;
    /* height: 50%; */
    background: dodgerblue
}
}

</style>