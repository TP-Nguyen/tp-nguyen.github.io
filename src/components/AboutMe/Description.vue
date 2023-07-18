<template>
     <section class="d-flex justify-center align-center" >
          <v-sheet class="text-center pa-4 my-4" color="background"
               :width="1040">
               <img />
               <p>
                    {{ $t('ABOUTME.INTRODUCTION') }} <br><br>
                    {{ $t('ABOUTME.CURRENTSTATUS') }}<br><br>
                    {{ $t('ABOUTME.AFTERWORDS') }}<br><br>
                    {{ $t('ABOUTME.LOOKAROUND') }}<br>
                    {{ $t('ABOUTME.CATCH') }}
               </p>
          </v-sheet>


     </section>
</template>
<script lang="ts">
</script>
<style lang="scss" scoped>
section {
     height: 100vh;
     width: 100vw;
}
</style>