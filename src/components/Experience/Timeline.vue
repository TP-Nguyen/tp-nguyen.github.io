<script setup lang="ts">
import Timeslot from './Timeslot.vue'
</script>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Timeline',
  })
</script>
<template>
  <section id="experience">
  <div align="center">
  <h1 v-motion-fade-visible class="my-5">{{ $t('EXPERIENCE.QUOTE') }}</h1>
<v-sheet align="center" width="40" height="40" class="dot"></v-sheet>
<div v-motion
        :initial="{
          opacity: 0,
          }"
        :visible="{
          opacity: 1,
          
          transition: {
            delay: 200,
          },
        }" class="line-up"></div>
<div v-motion
        :initial="{
          opacity: 0,
          }"
        :visible="{
          opacity: 1,
          
          transition: {
            delay: 400,
          },
        }" class="line"></div>
</div>
  <v-timeline v-motion
        :initial="{
          opacity: 0,
          }"
        :visible="{
          opacity: 1,
          
          transition: {
            delay: 600,
          },
        }" align="start" line-color="#fff" line-inset="15">
    <!-- <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" color="secondary">
        </v-avatar>
      </template>
    </v-timeline-item>        
    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" color="secondary">
        </v-avatar>
      </template>
    </v-timeline-item>     -->

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0">
        </v-avatar>
      </template>      
      <template  v-slot:opposite>
        {{ $t('EXPERIENCE.SEOULTECH.DATE') }}
      </template>

      <Timeslot props="SEOULTECH" />
    </v-timeline-item>
  

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <Timeslot props="28APPS" />
      </template>
      <div class="text-right">
        {{ $t('EXPERIENCE.28APPS.DATE') }}
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" >
        </v-avatar>
      </template>
      <template v-slot:opposite>
        {{ $t('EXPERIENCE.RB.DATE') }}
      </template>
      <div>
        <Timeslot props="RB" />
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" >
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <Timeslot props="EATHAPPY" />
      </template>
      <div class="text-right">{{ $t('EXPERIENCE.EATHAPPY.DATE') }}
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" >
        </v-avatar>
      </template>
      <template v-slot:opposite>
        {{ $t('EXPERIENCE.HSB.DATE') }}
      </template>
      <Timeslot props="HSB" />
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <Timeslot props="WWS" />
      </template>
      <div class="text-right">
      {{ $t('EXPERIENCE.WWS.DATE') }}</div>
    </v-timeline-item>
    
    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        {{ $t('EXPERIENCE.OL.DATE') }}
      </template>
      <Timeslot props="OL" />
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" >
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <Timeslot props="BBS" />
      </template>
      <div class="text-right">
      {{ $t('EXPERIENCE.BBS.DATE') }}</div>
    </v-timeline-item>
  </v-timeline>
  <!-- <v-sheet align="center" width="500" class="line"></v-sheet> -->
  <!-- <v-divider class="border-opacity-50" inset></v-divider> -->
</section>
</template>

<style lang="scss" scoped>
#experience{
  padding: 40vh 0 0 0;

}
.dot {
  transform: translate(-50%, -50%);
  transform: rotate(45deg);
  z-index: 1;
  background-color: dodgerblue;
  animation: colorchange 5s linear infinite;
}
.line {
  // transform: translate(-50%, -50%);
  border: 1px solid #fff ;
  width: 1040px;
  // width: 290px;
}
.line-up {
  // transform: translate(-50%, -50%);
  // border: 1px solid #fff ;
  height: 100px;
  width: 0px;
  border: 1px solid dodgerblue;
  animation: colorchange 5s linear infinite;
}

</style>