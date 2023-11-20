<script setup lang="ts">
import Timeslot from './Timeslot.vue'
</script>
<script lang="ts">
export default {
  name: 'Timeline',
  computed: {
    mobile() {
      return this.$vuetify.display.mobile
    }
  }
  }
</script>
<template>
  <section id="experience">
    <div align="center">
      <h2 v-motion-fade-visible class="my-5">{{ $t('EXPERIENCE.QUOTE') }}</h2>
      <v-sheet align="center" width="40" height="40" class="dot"></v-sheet>
      <div v-motion :initial="{
        opacity: 0,
      }" :visible="{
  opacity: 1,

  transition: {
    delay: 200,
  },
}" class="line-up"></div>
      <div v-motion :initial="{
        opacity: 0,
      }" :visible="{
  opacity: 1,

  transition: {
    delay: 400,
  },
}" class="line"></div>
    </div>
    <v-timeline v-motion :initial="{
      opacity: 0,
    }" :visible="{
  opacity: 1,

  transition: {
    delay: 600,
  },
}" align="start" line-color="#fff" line-inset="15" side="start">

      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar class="dot" rounded="0">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <Timeslot props="SEOULTECH" />
        </template>
        <div v-if="!mobile" class="text-right">
          {{ $t('EXPERIENCE.SEOULTECH.DATE') }}
        </div>
      </v-timeline-item>


      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar class="dot" rounded="0">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <Timeslot props="28APPS" />
        </template>
        <div v-if="!mobile" class="text-right ">
          {{ $t('EXPERIENCE.28APPS.DATE') }}
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar class="dot" rounded="0">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <Timeslot props="RB" />
        </template>
        <div v-if="!mobile" class="text-right ">
          {{ $t('EXPERIENCE.RB.DATE') }}
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar class="dot" rounded="0">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <Timeslot props="EATHAPPY" />
        </template>
        <div v-if="!mobile" class="text-right ">{{ $t('EXPERIENCE.EATHAPPY.DATE') }}
        </div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar class="dot" rounded="0">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <Timeslot props="HSB" />
        </template>

        <div v-if="!mobile" class="text-right ">{{ $t('EXPERIENCE.HSB.DATE') }}</div>

      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar class="dot" rounded="0">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <Timeslot props="WWS" />
        </template>
        <div v-if="!mobile" class="text-right ">
          {{ $t('EXPERIENCE.WWS.DATE') }}</div>
      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar class="dot" rounded="0">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <Timeslot props="OL" />
        </template>
        <div v-if="!mobile" class="text-right ">{{ $t('EXPERIENCE.OL.DATE') }}</div>

      </v-timeline-item>

      <v-timeline-item>
        <template v-slot:icon>
          <v-avatar class="dot" rounded="0">
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <Timeslot props="BBS" />
        </template>
        <div v-if="!mobile" class="text-right ">
          {{ $t('EXPERIENCE.BBS.DATE') }}</div>
      </v-timeline-item>
    </v-timeline>
    <!-- <v-sheet align="center" width="500" class="line"></v-sheet> -->
    <!-- <v-divider class="border-opacity-50" inset></v-divider> -->
  </section>
</template>

<style lang="scss" scoped>
#experience {
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
  border: 1px solid #fff;
  max-width: 1040px;
  width: 80vw;
  // width: 290px;
}

.line-up {
  // transform: translate(-50%, -50%);
  // border: 1px solid #fff ;
  max-height: 100px;
  height: 5vh;
  width: 0px;
  border: 1px solid dodgerblue;
  animation: colorchange 5s linear infinite;
}
</style>