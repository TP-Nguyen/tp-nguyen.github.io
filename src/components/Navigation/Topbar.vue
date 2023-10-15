<template>
       <div class="navi">
        <v-tabs
        v-model="tab"
        align-tabs="end"
        grow
  >
  <v-tab href="#aboutme" >
      {{ $t('GENERAL.ABOUTME') }}
    </v-tab>
    <v-tab href="#experience">
      {{ $t('GENERAL.EXPERIENCE') }}
    </v-tab>    
    <v-tab href="#project">
      {{ $t('GENERAL.PROJECT') }}
    </v-tab>    
    <v-tab href="#contact">
      {{ $t('GENERAL.CONTACT') }}
    </v-tab>
  </v-tabs>
       </div>
   </template>
<script lang="ts">
</script>
<style lang="scss" scoped>
.navi {
  position: sticky;
  background: rgba(0, 0, 0, .8);
  border-bottom: 1px solid rgba(255, 255, 255, .3);
  top: 0;
  z-index: 10;
}
</style>