<template>
     <section id="contact"  class="d-flex justify-center align-center mt-10" >
          <v-img max-width="100px" src="./src/assets/logoTPN.svg"/>
          <v-sheet class="pa-4 my-4" color="transparent" :width="1040">
               <v-row>
               <v-col cols="1">
                    <a :href="$t('GENERAL.LINKEDIN')">
                    <v-img src="./src/assets/icon/linkedin.svg"/></a>
                    <a :href="$t('GENERAL.LINKEDIN')">
                    <v-img src="./src/assets/Skill/LogoGithub.png"/></a>
                    <a href="mailto:phuongthao.nguyen@live.de">
                    <v-img src="./src/assets/icon/mail.svg"/> </a>
               </v-col>
               <v-col align-self="center">
                    <a href="./src/assets/CV_Nguyen.pdf" target="_blank">{{ $t('GENERAL.CV') }}</a>
               </v-col>
          </v-row>
          <span class="d-flex justify-center text-center">© 2023 Nguyen Phuong Thao</span>
          </v-sheet>
     </section>
</template>
<script lang="ts">
     export default{
          name:'Contact'
     }
</script>
<style lang="scss" scoped>
section {
     height: 20vh;
     width: 100vw;
     background-color: rgba(var(--v-theme-genre));
     // background-color: #fff;
     color: #fff;
     border-top: 5px solid dodgerblue;
     animation: colorchange 5s linear infinite;
}
a{
     text-decoration: none!important ;
     .v-img{
     max-height: 30px;
     width: 30px;
     margin: 10px 0;
     filter:hue-rotate(90deg);
     color: var(--primary-color);
     animation: colorchange 5s linear infinite;
     }
}
</style>