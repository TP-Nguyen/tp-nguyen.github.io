<script setup lang="ts">
import Skill from './Skill.vue'
import { defineComponent } from 'vue';
defineComponent({
     name: 'Timeslot'
});
</script>
<template>
     <v-sheet class="pb-5" color="background" max-width="800">
          <v-row>
               <v-col cols="1" class="pt-0">
                    <v-avatar class="mt-3 mx-5" :image="imageSrc"></v-avatar>
               </v-col>
               <v-col class="pt-0">
                    <v-card-title class="py-0">{{ $t('EXPERIENCE.' + props + '.TITLE') }}</v-card-title>
                    <v-card-subtitle>{{ $t('EXPERIENCE.' + props + '.SUBTITLE') }}</v-card-subtitle>

               </v-col>
          </v-row>
          <v-row class="px-3">
               <v-col class="pt-0" v-motion :initial="{
                    opacity: 0,
               }" :visible="{
     opacity: 1,
     transition: {
          delay: 200,
     }
}">
                    <v-card-text class="pt-0">{{ $t('EXPERIENCE.' + props + '.CONTENT') }}</v-card-text>
               </v-col>
          </v-row>
          <v-row height="130" v-if="props == 'RB' || props == '28APPS'">
               <v-col class="d-flex justify-space-evenly">
                    <div v-motion :initial="{
                         opacity: 0, x: -70,
                    }" :visible="{
     opacity: 1, x: 0,
     transition: {
          delay: 200,
     }
}">
                         <Skill :img="$t('EXPERIENCE.' + props + '.SKILL.0')"
                              :tooltip="$t('EXPERIENCE.' + props + '.SKILL.TOOLTIP.0')" />

                    </div>
                    <div v-motion :initial="{
                         opacity: 0, x: -60,
                    }" :visible="{
     opacity: 1, x: 0,
     transition: {
          delay: 200,
     }
}">
                         <Skill :img="$t('EXPERIENCE.' + props + '.SKILL.1')"
                              :tooltip="$t('EXPERIENCE.' + props + '.SKILL.TOOLTIP.1')" />

                    </div>
                    <div v-motion :initial="{
                         opacity: 0, x: -50,
                    }" :visible="{
     opacity: 1, x: 0,
     transition: {
          delay: 200,
     },
}">
                         <Skill :img="$t('EXPERIENCE.' + props + '.SKILL.2')"
                              :tooltip="$t('EXPERIENCE.' + props + '.SKILL.TOOLTIP.2')" />


                    </div>
                    <div v-motion :initial="{
                         opacity: 0, x: -40,
                    }" :visible="{
     opacity: 1, x: 0,
     transition: {
          delay: 200,
     },
}">
                         <Skill :img="$t('EXPERIENCE.' + props + '.SKILL.3')"
                              :tooltip="$t('EXPERIENCE.' + props + '.SKILL.TOOLTIP.3')" />


                    </div>
                    <div v-motion :initial="{
                         opacity: 0, x: -30,
                    }" :visible="{
     opacity: 1, x: 0,
     transition: {
          delay: 200,
     },
}">
                         <Skill v-if="props == '28APPS'" :img="$t('EXPERIENCE.' + props + '.SKILL.4')"
                              :tooltip="$t('EXPERIENCE.' + props + '.SKILL.TOOLTIP.4')" />
                    </div>
               </v-col>
          </v-row>
     </v-sheet>
</template>

<script lang="ts">
export default {
     props: {
          props: String,
     },
     computed: {
          imageSrc() {
               return new URL(`../../assets/logo/${this.props}.png`, import.meta.url).href;
          }
     }
     
}
</script>
<style lang="scss" scoped>
.avatar{
     height: 40px;
     width: 40px;
     border-radius: 30px;
}
</style>