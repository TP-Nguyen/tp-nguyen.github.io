
<script setup lang="ts">
import ProjectDetails from './ProjectDetails.vue'

</script>
<template>
     <section id="project" class="mb-8">
          <v-container class="probox pa-5 pt-12 d-flex flex-wrap">
               <v-sheet class="d-flex justify-self-center align-self-center pa-4 my-4" color="background" :width="1040">
                    <img />
                    <h2 v-motion :initial="{
                         opacity: 0,
                    }" :visible="{
                         opacity: 1, y: 0,
                         transition: {
                              delay: 200,
                         },
                    }"
                    class="text-center">{{ $t('PROJECT.INTRODUCTION') }}</h2>
               </v-sheet>
               <v-row>
                    <v-col v-motion :initial="{
                         opacity: 0,
                    }" :visible="{
                         opacity: 1, y: 0,
                         transition: {
                              delay: 200,
                         },
                    }" class="d-flex justify-center"> 
                         <v-tooltip :text="$t('PROJECT.MYANIMELIST.TOOLTIP')" location="bottom">
                              <template v-slot:activator="{ props }">
                                   <v-card v-bind="props" class="d-flex justify-center align-center" color="#2E51A2"
                                        :max-height="500" :max-width="1040" :min-width="300" width="80vw" @click="openDialog(), typeDetail = 'MYANIMELIST'">
                                        <img height="300" src="../../assets/ProjectCover/myanimelist-logo.jpg" />
                                   </v-card></template></v-tooltip></v-col>
               </v-row>
               <v-row>
                    <v-col v-motion :initial="{
                         opacity: 0, y: 50,
                    }" :visible="{
                         opacity: 1, y: 0,
                         transition: {
                              delay: 200,
                         },
                    }" class="d-flex justify-center">
                    <v-tooltip :text="$t('PROJECT.ZPHERE.TOOLTIP')" location="bottom">
                              <template v-slot:activator="{ props }"><v-card v-bind="props" color="#000"
                                        class="d-flex justify-center align-center py-3" :min-width="300" width="80vw" :max-height="300" :max-width="1040"
                                        @click="openDialog(), typeDetail = 'ZPHERE'">
                                        <!-- @click="showDetail = true, typeDetail = 'ZPHERE'"> -->
                                        <img :height="200" src="../../assets/ProjectCover/zphere.png" />
                                   </v-card></template></v-tooltip></v-col>
               </v-row>
               <v-row>
                    <v-col>
                         <v-row no-gutters v-motion :initial="{
                              opacity: 0, y: 50,
                         }" :visible="{
                              opacity: 1, y: 0,
                              transition: {
                                   delay: 200,
                              },
                         }" class="d-flex justify-center">
                         <v-tooltip :text="$t('PROJECT.LAGOM.TOOLTIP')" location="bottom">
                                   <template v-slot:activator="{ props }"><v-card v-bind="props"
                                             @click="openDialog(), typeDetail = 'LAGOM'"
                                             class="d-flex justify-center align-center" :height="300" :min-width="300" width="80vw" :max-width="670">
                                             <img :height="250"
                                                  src="../../assets/ProjectCover/lagomIcon.png" /></v-card>
                                   </template>
                         </v-tooltip>
                         </v-row>
                         <v-row v-motion :initial="{
                              opacity: 0, y: 50,
                         }" :visible="{
     opacity: 1, y: 0,
     transition: {
          delay: 200,
     },
}"  no-gutters class="mt-7 d-flex justify-center"><v-tooltip :text="$t('PROJECT.SURVIVAL.TOOLTIP')" location="bottom">
                                   <template v-slot:activator="{ props }"><v-card v-bind="props" class="d-flex align-center"
                                             @click="openDialog(), typeDetail = 'SURVIVAL'" :height="300" :min-width="300" width="80vw" :max-width="670">
                                             <img :width="670"
                                                  src="../../assets/ProjectCover/survival.png" /></v-card></template></v-tooltip></v-row>
                    </v-col>
                    <v-col v-motion :initial="{
                         opacity: 0, y: 50,
                    }" :visible="{
     opacity: 1, y: 0,
     transition: {
          delay: 200,
     },
}" class="d-flex justify-center justify-lg-end"><v-tooltip :text="$t('PROJECT.INTERNET.TOOLTIP')" location="bottom">
                              <template v-slot:activator="{ props }"><v-card v-bind="props" :height="630" :width="300"
                                        @click="openDialog(), typeDetail = 'INTERNET'">
                                        <img :height="630" :width="300"
                                             src="../../assets/ProjectCover/Datengrafik.png" /></v-card></template></v-tooltip></v-col>
               </v-row>
               <v-row v-motion :initial="{
                    opacity: 0, y: 50,
               }" :visible="{
     opacity: 1, y: 0,
     transition: {
          delay: 200,
     },
}">
                    <v-col class="d-flex justify-center justify-lg-start"><v-tooltip :text="$t('PROJECT.LASTMINUTE.TOOLTIP')"
                              location="bottom">
                              <template v-slot:activator="{ props }"><v-card v-bind="props" class="d-flex justify-center"
                                        color="#fff" :width="300" @click="openDialog(), typeDetail = 'LASTMINUTE'">
                                        <img :height="300" class="justify-center"
                                             src="../../assets/ProjectCover/Stressed.png" /></v-card></template></v-tooltip></v-col>
                    <v-col class="d-flex justify-center justify-lg-center"><v-tooltip :text="$t('PROJECT.THROWBACK.TOOLTIP')"
                              location="bottom">
                              <template v-slot:activator="{ props }"><v-card v-bind="props" class="d-flex justify-center"
                                        color="#1B1A16" :height="300" :width="300"
                                        @click="openDialog(), typeDetail = 'THROWBACK'">
                                        <img :height="300"
                                             src="../../assets/ProjectCover/ThrowbackDeckblatt.jpg" /></v-card></template></v-tooltip></v-col>
                    <v-col class="d-flex justify-center justify-lg-end"><v-tooltip :text="$t('PROJECT.EATABROAD.TOOLTIP')" location="bottom">
                              <template v-slot:activator="{ props }"><v-card v-bind="props" class="d-flex align-center"
                                        color="#fff" :height="300" :width="300"
                                        @click="openDialog(), typeDetail = 'EATABROAD'">
                                        <img :width="300"
                                             src="../../assets/ProjectCover/eatabroad.png" /></v-card></template></v-tooltip></v-col>
               </v-row>
               <v-dialog v-model="showDetail" retain-focus width="1000">
                    <v-card color="black">
                         <ProjectDetails :type="typeDetail" />
                         <v-card-actions>
                              <v-btn color="primary" block @click="closeDialog()">close</v-btn>
                         </v-card-actions>
                    </v-card>
               </v-dialog>
          </v-container>
     </section>
</template>
<script lang="ts">
export default {
     data() { return { showDetail: false, typeDetail: "" } },
     methods:{
          openDialog(){
               document.documentElement.style.scrollBehavior = 'auto';
               this.showDetail = true;
          },
          closeDialog(){
               this.showDetail = false;
               // Verzögerung, um das Zurücksetzen der scroll-behavior-Eigenschaft zu ermöglichen
               setTimeout(() => {
               // Wiederherstellen der scroll-behavior-Eigenschaft
               document.documentElement.style.scrollBehavior = 'smooth';
               }, 1);
          }
     }
}

</script>
<style lang="scss" scoped>
.probox {
     max-width: 1080px;
}</style>