<template>
  <VideoPlayer
    video-id="playlist" :sources="[{ publicId: 'elephants' }]" :width="600" 
    :playerOptions="{ showLogo: false }" 
    @ready="onLoaded"
    @loadedmetadata="onLoaded"  
    @play="onLoaded"
    class="tet"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    onLoaded(player) {
      console.log(player)
    }
  }
})
</script>

<style>

</style>