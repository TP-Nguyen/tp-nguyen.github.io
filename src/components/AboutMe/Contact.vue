<template>
     <section id="contact"  class="d-flex justify-center align-center mt-10" >
          <v-img max-width="100px" src="../../../public/logoTPN.svg"/>
          <v-sheet  class="pa-4 my-4" color="transparent"
               :width="1040">
               <v-row>
               <!-- <v-col><v-img max-width="100px" src="../../../public/smile.jpg"/></v-col>
               
                         <v-col>{{ $t('GENERAL.LASTNAME') }}
               {{ $t('GENERAL.FIRSTNAME') }} <br>
               {{ $t('GENERAL.ADDRESS') }}</v-col> -->
               
               <v-col>
                    <!-- <v-row>
                         <v-col></v-col>
                         <v-col></v-col>
                    </v-row> -->
               <a :href="$t('GENERAL.LINKEDIN')">
               <v-img src="../../../public/icon/linkedin.svg"/></a>
               <a :href="$t('GENERAL.LINKEDIN')">
               <v-img src="../../../public/skill/github.svg"/></a>
               <!-- <v-img src="../../../public/skill/logoGithub.png"/></a> -->
               <a href="mailto:phuongthao.nguyen@live.de">
               <v-img src="../../../public/icon/mail.svg"/> </a></v-col>
          </v-row>
          </v-sheet>
     </section>
</template>
<script lang="ts">

</script>
<style lang="scss" scoped>
section {
     height: 30vh;
     width: 100vw;
     background-color: rgba(var(--v-theme-genre));
     // background-color: #fff;
     color: #000;
     border-top: 5px solid dodgerblue;
     animation: colorchange 5s linear infinite;
}
a{
     .v-img{
     max-height: 30px;
     width: 30px;
     filter: grayscale(100);
     color: var(--primary-color);
     animation: colorchange 5s linear infinite;
     }
}
</style>