<script setup lang="ts">
import Skill from './Skill.vue'
defineProps<{ props: string }>()
</script>
<template>
     <v-sheet class="pb-5" color="background" max-width="800">
          <v-row>
               <v-col cols="1"  class="pt-0">
                    <v-avatar class="mt-3 mx-5" :image="$t('EXPERIENCE.'+ props +'.IMG')"></v-avatar>
               </v-col>
               <v-col>
                    <v-card-title>{{ $t('EXPERIENCE.'+ props +'.TITLE') }}</v-card-title>
                    <v-card-subtitle>{{ $t('EXPERIENCE.'+ props +'.SUBTITLE') }}</v-card-subtitle>

               </v-col>
               </v-row>
     <v-row class="px-3">
          <!-- <v-col></v-col> -->
          <v-col>
          <v-card-text>
               {{ $t('EXPERIENCE.'+ props +'.CONTENT.0') }} <br>
               {{ $t('EXPERIENCE.'+ props +'.CONTENT.1') }} <br>
               {{ $t('EXPERIENCE.'+ props +'.CONTENT.2') }} <br>
               {{ $t('EXPERIENCE.'+ props +'.CONTENT.3') }} <br>
               {{ $t('EXPERIENCE.'+ props +'.CONTENT.4') }} <br>
               {{ $t('EXPERIENCE.'+ props +'.CONTENT.5') }} <br>
          </v-card-text>
     </v-col>
     </v-row>
     <v-row  height="130" v-if="props=='RB'||props=='28APPS'">
          <v-col class="d-flex justify-space-evenly">
          <Skill :img="$t('EXPERIENCE.'+ props +'.SKILL.0')" :tooltip="$t('EXPERIENCE.'+ props +'.SKILL.TOOLTIP.0')"/>
          <Skill :img="$t('EXPERIENCE.'+ props +'.SKILL.1')" :tooltip="$t('EXPERIENCE.'+ props +'.SKILL.TOOLTIP.1')"/>
          <Skill :img="$t('EXPERIENCE.'+ props +'.SKILL.2')" :tooltip="$t('EXPERIENCE.'+ props +'.SKILL.TOOLTIP.2')"/>
          <Skill :img="$t('EXPERIENCE.'+ props +'.SKILL.3')" :tooltip="$t('EXPERIENCE.'+ props +'.SKILL.TOOLTIP.3')"/>
          <Skill v-if="props =='28APPS'" :img="$t('EXPERIENCE.'+ props +'.SKILL.4')" :tooltip="$t('EXPERIENCE.'+ props +'.SKILL.TOOLTIP.4')"/></v-col>
     </v-row>
     </v-sheet>
</template>
<script lang="ts">
// export default{
//      props:{
//           props:String,
//      }
// }
</script>
<style lang="scss" scoped>

</style>