<template>
       <div class="navi">
        <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        align-tabs="end"
        grow
  >
    <v-tab>
      {{ $t('GENERAL.ABOUTME') }}
    </v-tab>
    <v-tab>
      {{ $t('GENERAL.EXPERIENCE') }}
    </v-tab>    
    <v-tab>
      {{ $t('GENERAL.PROJECT') }}
    </v-tab>    
    <v-tab>
      {{ $t('GENERAL.CONTACT') }}
    </v-tab>
  </v-tabs>
       </div>
   </template>
<script lang="ts"></script>
<style lang="scss" scoped>
.navi {
  position: sticky;
  background-color: rgba(var(--v-theme-background));
  top: 0;
  z-index: 10;
}
</style>