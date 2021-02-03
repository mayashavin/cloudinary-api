<script lang="ts">
import { buildImageUrl, getConfig } from 'cloudinary-build-url/dist/esm'
import { CldOptions, CloudConfig,  } from 'types/lib'
import { placeholderTypes } from "../helpers"
import { h, onBeforeUpdate, ref } from 'vue'
import init from '../mixins/cloudinary'

export default {
  name: "CImage",
  props: {
    publicId: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
      validator: value => !value || !!placeholderTypes[value]
    },
    cloud: {
      type: Object,
      default: () => ({}),
      validator: value => value && value.cloudName
    },
    transformations: {
      type: Object,
      default: () => ({}),
    }
  },
  data() {
    return {
      cloudinary: null,
      imageLoaded: false
    }
  },
  methods: {
    load() {
      this.imageLoaded = true
    }
  },
  setup(props, context) {
    if (!props.publicId) {
      throw Error("PublicId is required to use this component.");
    }
    if ((!props.cloud || !props.cloud.cloudName) && !(getConfig() as CloudConfig).cloudName) {
      throw Error("cloudName is required to use this component.");
    }

    const cimage = ref(null)
    const src = ref("")

    const image = new Image();

    image.onload = () => {
      cimage.value && cimage.value.setAttribute("src", image.src);
    };

    function setImage() {
      const {url, placeholder} = init(props)
      
      image.src = url;
      src.value = placeholder || url
    }

    
    onBeforeUpdate(setImage)

    setImage()

    return () => h(
      "img",
      {
        src,
        ref: cimage,
        class: ["c-image"]
      }
    );
  }
}
</script>

<style>

</style>