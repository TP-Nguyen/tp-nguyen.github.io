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
                    <Skill :img="$t('PROJECT.' + props.type +  '.TECH.0')" :tooltip="$t('PROJECT.'+ props.type +'.TECH.TOOLTIP.0')"/></v-row>
                    <v-row class="mb-2">
                    <Skill :img="$t('PROJECT.' + props.type +  '.TECH.1')" :tooltip="$t('PROJECT.'+ props.type +'.TECH.TOOLTIP.1')"/></v-row>
                    <v-row class="mb-2" v-if="props.type!='SURVIVAL'">
                    <Skill :img="$t('PROJECT.' + props.type +  '.TECH.2')" :tooltip="$t('PROJECT.'+ props.type +'.TECH.TOOLTIP.2')"/></v-row>
                    <v-row class="mb-2" v-if="props.type!='SURVIVAL'&& props.type!='LASTMINUTE'&& props.type!='EATABROAD'">
                    <Skill :img="$t('PROJECT.' + props.type +  '.TECH.3')" :tooltip="$t('PROJECT.'+ props.type +'.TECH.TOOLTIP.3')"/></v-row>
               </v-col>
               <v-col class="pt-0">
                    <section>
                    <v-card-text class="pt-0">{{$t('PROJECT.' + props.type +  '.DESCRIPTION')}}</v-card-text>
                    <v-sheet v-if="props.type=='SURVIVAL'" color="black">
                         <iframe class="video" width="650" height="350" src="https://player.vimeo.com/video/432306020?h=be32ed5782" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </v-sheet>
                    <Slider v-if="props.type!='SURVIVAL'&& props.type!='MYANIMELIST'" :type="props.type"/>
                    <iframe v-if="props.type=='MYANIMELIST'" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="650" height="350" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FIKyKA9rHgxSKHfd3DPR99n%2FMAL%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DoxncHpV8ka9Cb8pj-1" allowfullscreen></iframe>
                    <v-btn v-if="$tm('PROJECT.' + props.type +  '.DOCU')!== ''" block class="my-3" :href="$t('PROJECT.' + props.type +  '.DOCU')" target="_blank">{{$t('GENERAL.DOCU')}}</v-btn>
                    <v-btn v-if="$tm('PROJECT.' + props.type +  '.GITHUB')!== ''" block class="my-3" :href="$t('PROJECT.' + props.type +  '.GITHUB')" target="_blank">{{$t('GENERAL.CODE')}}</v-btn>
                    <v-btn v-if="$tm('PROJECT.' + props.type +  '.LIVE')!== ''" block class="my-3" :href="$t('PROJECT.' + props.type +  '.LIVE')" target="_blank">{{$t('GENERAL.DEMO')}}</v-btn>
                    <v-btn v-if="$tm('PROJECT.' + props.type +  '.FIGMA')!== ''" block class="my-3" :href="$t('PROJECT.' + props.type +  '.FIGMA')" target="_blank">{{$t('GENERAL.FIGMA')}}</v-btn>
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
<style lang="scss">
.video{
     border: 0px;
}
</style>