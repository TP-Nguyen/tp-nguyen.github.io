<script setup lang="ts">
import Intro from './components/Intro.vue'
import Topbar from './components/Navigation/Topbar.vue'
import Description from './components/AboutMe/Description.vue'
import Contact from './components/AboutMe/Contact.vue'
import Timeline from './components/Experience/Timeline.vue'
import ProjectView from './components/Project/ProjectView.vue'

</script>

<template>
  <Intro class="snap snap-stop"/>
  <Topbar class="snap snap-stop"/>
  <!-- <div class="space snap snap-stop"></div> -->
  <Description class="snap"/>
  <Timeline class="snap"/>
  <ProjectView class="snap"/>
  <Contact class="snap-end" />

</template>

<script lang="ts">
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
.space{
  height: 100vh;
}
</style>