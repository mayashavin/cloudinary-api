<template>
  <div>Hello</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  methods: {
    onLoaded(player) {
      console.log(player)
    }
  }
})
</script>
