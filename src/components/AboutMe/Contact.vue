<template>
     <section class="d-flex justify-center align-center" >
          <v-sheet class="text-center pa-4 my-4" color="background"
               :width="1040">
               <img />
               {{ $t('GENERAL.LASTNAME') }}
               {{ $t('GENERAL.FIRSTNAME') }} <br>
               {{ $t('GENERAL.ADDRESS') }}
               <br><br>
               Email
               linkedin

          </v-sheet>


     </section>
</template>
<script lang="ts">

</script>
<style lang="scss" scoped>
section {
     height: 30vh;
     width: 100vw;
}
</style>