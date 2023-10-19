<script setup lang="ts">
const props = defineProps({
     type: String
});
</script>

<template>

     <v-card outlined color="cube" class="rounded-lg">
       <v-carousel
         height="300"
         hide-delimiters
         progress="primary"
         show-arrows="hover"
         prev-icon="arrowLeftIcon"
         next-icon="arrowRightIcon"
         cycle
       >
         <v-carousel-item v-for="(slide, i) in  $tm('PROJECT.'+ props.type +'.IMG')" :key="i">
           <v-sheet height="100%">
               <v-img  height="100%" :src="slide" class="ma-0"></v-img>
                 
             <div class="d-flex fill-height justify-center align-center">
             </div>
           </v-sheet>
         </v-carousel-item>
       </v-carousel>
     </v-card>
   </template>
   <script lang="ts">
   export default {
    name: 'Slider',
  }
  </script>