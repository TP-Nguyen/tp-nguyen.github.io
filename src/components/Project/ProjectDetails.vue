<script setup lang="ts">
import Skill from '../Experience/Skill.vue'
import Slider from './Slider.vue'
const props = defineProps({
     type: String,
});
// const imageSrc="src/assets/image/" + props.typeDetail +".jpg";
</script>
<template>
     <v-card color="detail">
          <v-row>
               <v-col></v-col>
               <v-col><v-card-title class="text-center">{{$t('PROJECT.' + type +  '.TITLE')}}</v-card-title></v-col>
               <v-col></v-col>
          </v-row>
          <v-row>
               <v-col cols="2" class="d-flex align-end flex-column"> 
                    <v-row class="mb-2">
                    <Skill :img="$t('PROJECT.' + type +  '.TECH.0')" :tooltip="$t('PROJECT.'+ type +'.TECH.TOOLTIP.0')"/></v-row>
                    <v-row class="mb-2">
                    <Skill :img="$t('PROJECT.' + type +  '.TECH.1')" :tooltip="$t('PROJECT.'+ type +'.TECH.TOOLTIP.1')"/></v-row>
                    <v-row class="mb-2" v-if="type!='SURVIVAL'">
                    <Skill :img="$t('PROJECT.' + type +  '.TECH.2')" :tooltip="$t('PROJECT.'+ type +'.TECH.TOOLTIP.2')"/></v-row>
                    <v-row class="mb-2" v-if="type!='SURVIVAL'&& type!='LASTMINUTE'&& type!='EATABROAD'">
                    <Skill :img="$t('PROJECT.' + type +  '.TECH.3')" :tooltip="$t('PROJECT.'+ type +'.TECH.TOOLTIP.3')"/></v-row>
               </v-col>
               <v-col class="pt-0">
                    <section>
                    <v-card-text class="pt-0">{{$t('PROJECT.' + type +  '.DESCRIPTION')}}</v-card-text>
                    <v-sheet v-if="type=='SURVIVAL'" color="black">
                         <iframe class="video" width="650" height="350" src="https://player.vimeo.com/video/432306020?h=be32ed5782" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </v-sheet>
                    <Slider v-if="type!='SURVIVAL'" :type="type"/>
                    <v-btn v-if="$tm('PROJECT.' + type +  '.DOCU').length > 1" block class="my-3" :href="$t('PROJECT.' + type +  '.DOCU')" target="_blank">{{$t('GENERAL.DOCU')}}</v-btn>
                    <v-btn v-if="$tm('PROJECT.' + type +  '.GITHUB').length > 1" block class="my-3" target="_blank">github</v-btn>
                    <v-btn v-if="$tm('PROJECT.' + type +  '.LIVE').length > 1" block class="my-3" target="_blank">Live DEMO</v-btn>
               </section>
               </v-col>
               <v-col cols="2" class="d-flex align-start flex-column mb-2">
                    <v-row class="mb-2" v-if="type=='MYANIMELIST'">
                    <Skill :img="$t('PROJECT.' + type +  '.TECH.4')" :tooltip="$t('PROJECT.'+ type +'.TECH.TOOLTIP.4')"/></v-row>
                    <v-row class="mb-2" v-if="type=='MYANIMELIST'">
                    <Skill :img="$t('PROJECT.' + type +  '.TECH.5')" :tooltip="$t('PROJECT.'+ type +'.TECH.TOOLTIP.5')"/></v-row>
                    <v-row class="mb-2" v-if="type=='MYANIMELIST'">
                    <Skill :img="$t('PROJECT.' + type +  '.TECH.6')" :tooltip="$t('PROJECT.'+ type +'.TECH.TOOLTIP.6')"/></v-row>
                    <v-row class="mb-2" v-if="type=='MYANIMELIST'">
                    <Skill :img="$t('PROJECT.' + type +  '.TECH.7')" :tooltip="$t('PROJECT.'+ type +'.TECH.TOOLTIP.7')"/></v-row>
               </v-col>
          </v-row>
          <br>
     </v-card>
   </template>
<script lang="ts">
export default{
     
}
</script>
<style lang="scss">
.video{
     border: 0px;
}
</style>