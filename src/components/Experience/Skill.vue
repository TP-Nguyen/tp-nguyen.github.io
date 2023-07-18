<template>
     <v-tooltip :text="tooltip" location="bottom">
          <template v-slot:activator="{ props }">
               <v-card class="d-flex justify-center align-center" 
               v-bind="props" 
               color="cube" 
               width="130" height="130">
                    <v-img max-width="60" :src="img"></v-img>
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
<style lang="scss" scoped></style>