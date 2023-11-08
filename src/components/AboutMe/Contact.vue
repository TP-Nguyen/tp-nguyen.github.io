<template>
     <section id="contact"  class="d-flex justify-center align-center mt-10" >
          <img class="logo" src="../../assets/logoTPN.svg"/>
          <v-sheet class="pa-4 my-4" color="transparent" :width="1040">
               <v-row>
               <v-col cols="2">
                    <a :href="$t('GENERAL.LINKEDIN')" target="_blank"> 
                    <img src="../../assets/icon/linkedin.svg"/></a>
                    <br>
                    <a :href="$t('GENERAL.GITHUB')" target="_blank">
                    <img src="../../assets/Skill/LogoGithub.png"/></a>
                    <br>
                    <a href="mailto:phuongthao.nguyen@live.de">
                    <img src="../../assets/icon/mail.svg"/> </a>
               </v-col>
               <v-col align-self="center">
                    <a href="https://drive.google.com/file/d/1qE7z0gxNRmBdI-hKD1V8wP268sDM7BZt/view?usp=share_link" target="_blank">{{ $t('GENERAL.CV') }}</a>
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
.logo{
     max-height: 100px;
}
a{
     text-decoration: none!important ;
     img{
     max-height: 30px;
     width: 30px;
     margin: 0;
     filter:hue-rotate(90deg);
     color: var(--primary-color);
     animation: colorchange 5s linear infinite;
     }
}
</style>