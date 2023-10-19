<template>
     <v-tooltip :text="tooltip" location="bottom">
          <template v-slot:activator="{ props }">
               <v-card class="d-flex justify-center align-center" 
               v-bind="props" 
               color="cube" 
               width="130" height="130">
                    <img  :src="require(props.img)">
               </v-card>
          </template>
     </v-tooltip>
</template>
<script lang="ts">
export default {
     props: {
          img: String,
          tooltip: String,
     }
}
</script>
<style lang="scss" scoped>
img{
     max-width: 60px
}</style>