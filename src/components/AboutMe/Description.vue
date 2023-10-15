<template>
     <section id="aboutme" class="d-flex justify-center align-center" >
          <v-sheet v-motion-fade-visible class="text-left pa-4 my-4" color="background"
               :width="1040">
               <v-row>
                    <v-col cols="3">
               <v-img class="profilIMG" src="../../../public/smile.jpg"/></v-col>
                    <v-col cols="6">
               {{ $t('ABOUTME.INTRODUCTION') }}</v-col>
               </v-row>
          </v-sheet>


     </section>
</template>
<script lang="ts">

</script>
<style lang="scss" scoped>
section {
     height: 80vh;
     width: 100vw;
}
.profilIMG{
     width: 300px;
     border-radius: 10px;
}
</style>