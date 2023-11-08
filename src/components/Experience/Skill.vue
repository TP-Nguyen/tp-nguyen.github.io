<template>
     <v-tooltip :text="tooltip" location="bottom">
          <template v-slot:activator="{ props }">
               <v-card class="d-flex justify-center align-center" 
               v-bind="props" 
               color="cube" 
               width="10vw" height="10vw"
               max-width="130" max-height="130">
                    <img :src="imageSrc">
               </v-card>
          </template>
     </v-tooltip>
</template>
<script lang="ts">

export default {
     props: {
          img: String,
          tooltip: String,
     },
     computed: {
          imageSrc() {
               return new URL(`../../assets/Skill/${this.img}`, import.meta.url).href;
          }
     }
     
}
</script>
<style lang="scss" scoped>
img{
     min-width: 20px;
     width: 7vw;
     max-width: 60px
}</style>