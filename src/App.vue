<template>
  <div id="app">
      <Homepage />
      <NoteBox />
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'
import NoteBox from './components/NoteBox.vue'

export default {
  name: 'App',
  components: {
    Homepage,
    NoteBox
  }
}
</script>

<style>
body {padding-top: 70px}
</style>
