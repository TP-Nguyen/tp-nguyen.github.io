<template>
     <section id="aboutme" @scroll="nextSection()" class="d-flex justify-center align-center" >
          <v-sheet v-motion-fade-visible class="text-left pa-4 my-4" color="background"
               :width="1040">
               <v-row>
                    <v-col cols="3">
                    <v-img class="profilIMG" src="../../assets/profil.jpg"/>
                         <!-- <v-col>     
                              <v-row>
                                   <v-col>
                                        <a :href="$t('GENERAL.LINKEDIN')">
                              <v-img src="../../assets/icon/linkedin.svg"/></a>
                                   </v-col>
                                   <v-col>
                                        <a :href="$t('GENERAL.LINKEDIN')">
                              <v-img src="../../assets/skill/LogoGithub.png"/></a>
                                   </v-col>
                                   <v-col>
                                        <a href="mailto:phuongthao.nguyen@live.de">
                              <v-img src="../../assets/icon/mail.svg"/> </a></v-col>
                              </v-row> 
                         </v-col> -->
                         <v-col>
                              <v-row>
                                   <v-col>
                                        <a >
                              <v-img src="../../assets/skill/vscode.png"/></a>
                                   </v-col><v-col>
                                        <a >
                              <v-img src="../../assets/skill/figma.png"/></a>
                                   </v-col>
                                   <v-col>
                                        <a >
                              <v-img src="../../assets/skill/LogoGithub.png"/></a>
                                   </v-col>
                                   <v-col>
                                        <a >
                              <v-img src="../../assets/skill/postman.png"/> </a></v-col>
                              </v-row> 
                         </v-col>
                         <v-col></v-col>
                    </v-col>
                    <v-col cols="8">
               <span class="text-h2">
                         {{ $t('ABOUTME.GREETING') }}
               </span><span class="text-h4">
                         {{ $t('ABOUTME.NAME') }} <br>
               </span>
               {{ $t('ABOUTME.INTRODUCTION') }}</v-col>
               </v-row>
               
          </v-sheet>


     </section>
</template>
<script lang="ts">
export default{
     methods:{
          nextSection(){
               console.log("nextSection")
          }
     }
}
</script>
<style lang="scss" scoped>
#aboutme{
     height: 100vh;
     width: 100vw;
     overflow: hidden;
}
.profilIMG{
     width: 500px;
     border-radius: 10px;
}
a{
     .v-img{
     max-height: 30px;
     width: 30px;
     // filter: grayscale(100);
     color: var(--primary-color);
     // animation: colorchange 5s linear infinite;
     }
}
</style>