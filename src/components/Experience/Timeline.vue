<script setup lang="ts">
import Timeslot from './Timeslot.vue'
</script>
<template>
  <div align="center">
  <h1 class="my-5">{{ $t('EXPERIENCE.QUOTE') }}</h1>
<v-sheet align="center" color="#fff" width="40" height="40" class="dot"></v-sheet>
<div class="line-up"></div>
<div class="line"></div>
</div>
  <v-timeline align="start" line-color="#fff" line-inset="15">
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
        <v-avatar class="dot" rounded="0" color="secondary">
        </v-avatar>
      </template>      
      <template v-slot:opposite>
        {{ $t('EXPERIENCE.SEOULTECH.DATE') }}
      </template>
      <Timeslot props="SEOULTECH" />
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" color="primary">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <Timeslot props="28APPS" />
      </template>
      <div>
        {{ $t('EXPERIENCE.28APPS.DATE') }}
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" color="primary">
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
        <v-avatar class="dot" rounded="0" color="primary">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <Timeslot props="EATHAPPY" />
      </template>
      <div>{{ $t('EXPERIENCE.EATHAPPY.DATE') }}
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" color="secondary">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        {{ $t('EXPERIENCE.HSB.DATE') }}
      </template>
      <Timeslot props="HSB" />
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" color="secondary">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <Timeslot props="WWS" />
      </template>
      {{ $t('EXPERIENCE.WWS.DATE') }}
    </v-timeline-item>
    
    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" color="primary">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        {{ $t('EXPERIENCE.OL.DATE') }}
      </template>
      <Timeslot props="OL" />
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="dot" rounded="0" color="secondary">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <Timeslot props="BBS" />
      </template>
      {{ $t('EXPERIENCE.BBS.DATE') }}
    </v-timeline-item>
  </v-timeline>
  <!-- <v-sheet align="center" width="500" class="line"></v-sheet> -->
  <!-- <v-divider class="border-opacity-50" inset></v-divider> -->
</template>
<script lang="ts"></script>
<style lang="scss" scoped>
.dot {
  transform: translate(-50%, -50%);
  transform: rotate(45deg);
  z-index: 1;
}
.line {
  // transform: translate(-50%, -50%);
  border: 1px solid #fff ;
  width: 1000px;
  // width: 290px;
}
.line-up {
  // transform: translate(-50%, -50%);
  border: 1px solid #fff ;
  height: 100px;
  width: 0px;
}

</style>