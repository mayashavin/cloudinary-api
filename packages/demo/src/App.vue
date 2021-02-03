<template>
  <h2>Vue Cloudinary Image Demo</h2>
  <div class="flex">
    <div>
      <div class="my-5">
        <h4 class="text-2xl mb-5 mx-3">Rotation</h4>
        <div>
          <label class="mx-3" v-for="rotation in rotations" :key="rotation.value">
            <input type="radio" v-model="angle" :value="rotation.value" :key="rotation.value" :id="`${rotation.name}_degree`">
            Rotate {{rotation.name}} Degree
          </label>
          <label class="mx-3">
            <input type="radio" v-model="angle" value=0 key="0" :id="`0_degree`">
            Default
          </label>
        </div>
      </div>
      <div class="my-5">
        <h4 class="text-2xl mb-5 mx-3">Make it round</h4>
        <div>
          <label class="mx-3" v-for="corner in corners" :key="corner">
            <input type="radio" v-model="radius" :value="corner" :key="corner" :id="`${corner}_px`">
            {{corner}}
          </label>
          <label class="mx-3">
            <input type="radio" v-model="radius" value="max" key="max" :id="`rounded`">
            Maximum
          </label>
          <label class="mx-3">
            <input type="radio" v-model="radius" value=0 key="0" :id="`0_px`">
            Default
          </label>
        </div>
      </div>
      <div class="my-5">
        <h4 class="text-2xl mb-5 mx-3">Add effect</h4>
        <div>
          <label class="mx-3 capitalize" v-for="opt in effects" :key="opt">
            <input type="radio" v-model="effect" :value="opt" :key="opt" :id="`${opt}_effect`">
            {{opt}}
          </label>
          <label class="mx-3">
            <input type="radio" v-model="effect" value='' key="0" :id="`0_effect`">
            Default
          </label>
        </div>
      </div>
    </div>
    <c-image :publicId="sampleImage" :cloud="{cloudName: 'demo'}" :transformations="transformations"/>  
  </div>
  
</template>

<script lang="ts">
import { TransformerOption } from 'types/lib'
import { defineComponent } from 'vue'
import CImage from './components/Image.vue'

export default defineComponent({
  name: 'App',
  components: { CImage },
  data() {
    return {
      sampleImage: 'sheep',
      angle: 0,
      radius: 0,
      rotations: [{
        value: 30,
        name: '30'
      }, {
        value: 45,
        name: '45'
      }, {
        value: 90,
        name: '90'
      }, {
        value: 120,
        name: '120'
      }],
      corners: [10, 20, 30, 100],
      effect: '',
      effects: ['grayscale', 'negate', 'vectorize', 'pixelate']
    }
  },
  computed: {
    transformations():TransformerOption[] {
      return [{
        resize: {
          width: 500,
          height: 500,
          type: 'thumb'
        },
        radius: this.radius,
        rotate: this.angle,
        effect: {
          name: this.effect,
        }
      }]
    }
  }
})
</script>
