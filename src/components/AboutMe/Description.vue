<template>
     <section id="aboutme" @scroll="nextSection()" class="d-flex justify-center align-center" >
          <v-sheet v-motion-fade-visible class="text-left pa-4 my-4" color="background"
               :width="1040">
               <v-row>
                    <v-col cols="auto" lg="4" >
                    <img class="profilIMG" src="../../assets/profil.jpg"/>
                              <v-row>
                                   <v-col>
                                        <a >
                              <img src="../../assets/Skill/vscode.png"/></a>
                                   </v-col><v-col>
                                        <a >
                              <img src="../../assets/Skill/figma.png"/></a>
                                   </v-col>
                                   <v-col>
                                        <a >
                              <img src="../../assets/Skill/LogoGithub.png"/></a>
                                   </v-col>
                                   <v-col>
                                        <a >
                              <img src="../../assets/Skill/postman.png"/> </a></v-col>
                              </v-row> 
                    </v-col>
                    <v-col cols="auto" lg="8">
                         <span class="text-h2">
                                   {{ $t('ABOUTME.GREETING') }}
                         </span><span class="text-h4">
                                   {{ $t('ABOUTME.NAME') }} <br>
                         </span>
                         {{ $t('ABOUTME.INTRODUCTION') }}
                    </v-col>
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
     min-height: 100vh;
     width: 100vw;
     overflow: hidden;
}
.profilIMG{
     width: 300px;
     border-radius: 10px;
}
a{
     img{
     max-height: 30px;
     width: 30px;
     // filter: grayscale(100);
     color: var(--primary-color);
     // animation: colorchange 5s linear infinite;
     }
}
</style>