
<script setup lang="ts">
import ProjectDetails from './ProjectDetails.vue'

</script>
<template>
     <v-container class="probox d-flex flex-wrap">
          <v-sheet class="d-flex justify-self-center align-self-center pa-4 my-4" color="background" :width="1040">
               <img />
               <h2 class="text-center">{{ $t('PROJECT.INTRODUCTION') }}</h2>
          </v-sheet>
          <v-row>
               <v-col> <v-tooltip :text="$t('PROJECT.MYANIMELIST.TOOLTIP')" location="bottom">
                         <template v-slot:activator="{ props }">
                              <v-card v-bind="props" class="d-flex justify-center align-center" color="#2E51A2" 
                              :height="500" :width="1040" 
                              @click="showDetail = true, typeDetail='MYANIMELIST'">
                                   <img :height="400" src="../../assets/ProjectCover/myanimelist-logo.jpg" />
                              </v-card></template></v-tooltip></v-col>
          </v-row>
          <v-row>
               <v-col><v-tooltip :text="$t('PROJECT.ZPHERE.TOOLTIP')" location="bottom">
                         <template v-slot:activator="{ props }"><v-card v-bind="props" color="#000"
                                   class="d-flex justify-center align-center" :height="300" :width="1040"
                                   @click="showDetail = true, typeDetail='ZPHERE'">
                                   <img :height="250" src="../../assets/ProjectCover/zphere.png" />
                              </v-card></template></v-tooltip></v-col>
          </v-row>
          <v-row>
               <v-col>
                    <v-row no-gutters><v-tooltip :text="$t('PROJECT.LAGOM.TOOLTIP')" location="bottom">
                              <template v-slot:activator="{ props }"><v-card v-bind="props" @click="showDetail = true, typeDetail='LAGOM'"
                                        class="d-flex justify-center align-center" :height="300" :width="670">
                                        <img :height="250"
                                             src="../../assets/ProjectCover/lagomIcon.png" /></v-card></template></v-tooltip></v-row>
                    <v-row no-gutters class="mt-7"><v-tooltip :text="$t('PROJECT.SURVIVAL.TOOLTIP')" location="bottom">
                              <template v-slot:activator="{ props }"><v-card v-bind="props" class="d-flex align-center" @click="showDetail = true, typeDetail='SURVIVAL'"
                                        :height="300" :width="670">
                                        <img :width="670"
                                             src="../../assets/ProjectCover/survival.png" /></v-card></template></v-tooltip></v-row>
               </v-col>
               <v-col class="d-flex justify-end"><v-tooltip :text="$t('PROJECT.INTERNET.TOOLTIP')" location="bottom">
                         <template v-slot:activator="{ props }"><v-card v-bind="props" :height="630" :width="300" 
                              @click="showDetail = true, typeDetail='INTERNET'">
                                   <img :height="630" :width="300"
                                        src="../../assets/ProjectCover/Datengrafik.png" /></v-card></template></v-tooltip></v-col>
          </v-row>
          <v-row>
               <v-col class="d-flex justify-start"><v-tooltip :text="$t('PROJECT.LASTMINUTE.TOOLTIP')" location="bottom">
                         <template v-slot:activator="{ props }"><v-card v-bind="props" class="d-flex justify-center"
                                   color="#fff" :width="300" @click="showDetail = true, typeDetail='LASTMINUTE'">
                                   <img :height="300" class="justify-center"
                                        src="../../assets/ProjectCover/Stressed.png" /></v-card></template></v-tooltip></v-col>
               <v-col class="d-flex justify-center"><v-tooltip :text="$t('PROJECT.THROWBACK.TOOLTIP')" location="bottom">
                         <template v-slot:activator="{ props }"><v-card v-bind="props" class="d-flex justify-center"
                                   color="#1B1A16" :height="300" :width="300" @click="showDetail = true, typeDetail='THROWBACK'">
                                   <img :height="300"
                                        src="../../assets/ProjectCover/ThrowbackDeckblatt.jpg" /></v-card></template></v-tooltip></v-col>
               <v-col class="d-flex justify-end"><v-tooltip :text="$t('PROJECT.EATABROAD.TOOLTIP')" location="bottom">
                         <template v-slot:activator="{ props }"><v-card v-bind="props" class="d-flex align-center"
                                   color="#fff" :height="300" :width="300" @click="showDetail = true, typeDetail='EATABROAD'">
                                   <img :width="300"
                                        src="../../assets/ProjectCover/eatabroad.png" /></v-card></template></v-tooltip></v-col>
          </v-row>
          <v-dialog v-model="showDetail" width="1000">
               <v-card color="black">
                    <ProjectDetails :type="typeDetail"/>
                    <v-card-actions>
                         <v-btn color="primary" block @click="showDetail = false">close</v-btn>
                    </v-card-actions>
               </v-card>
          </v-dialog>
     </v-container></template>
<script lang="ts">
export default {
data() { return{ showDetail:false, typeDetail:""}}
}

</script>
<style lang="scss" scoped>.probox {
     max-width: 1080px;
     padding: 20px;
}</style>