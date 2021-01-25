import { ref, PropType, onMounted, onUnmounted, Ref, defineComponent, h, onBeforeUpdate, onUpdated } from 'vue'
import { Cloudinary, Configuration } from 'cloudinary-core';
import 'cloudinary-video-player';
import 'cloudinary-video-player/dist/cld-video-player.css';
import type { CloudinaryVideoPlayer, VideoPlayerOptions } from '../types/VideoPlayer'
import type { Source } from '../types/Source';
import { PlaylistConfig } from '../types/Playlist';

export default defineComponent({
  name: "VideoPlayer",
  props: {
    videoId: {
      type: String,
      required: true,
      validator: (id: string) => !!id && !!id.trim()
    },
    sources: {
      type: Object as PropType<Source[]>,
      required: true,
      validator: (sources: Source[]) => Array.isArray(sources) && !!sources.length
    },
    cloud: {
      type: Object as PropType<Configuration.Options>,
      validator: (options: Configuration.Options) => !!options.cloud_name,
      default: () => ({})
    },
    playerOptions: {
      type: Object as PropType<VideoPlayerOptions>,
      default: () => ({})
    },
    playlistOptions: {
      type: Object as PropType<PlaylistConfig>,
      default: () => ({ autoAdvance: 0 }),
    }
  },
  setup(props: { cloud: any; sources: string | any[]; playerOptions: any; videoId: string; playlistOptions: any; }, context: any ) {
    const videoPlayer:Ref<any>  = ref(null)
    const reloaded = ref(true)

    const cloudinaryApi = new Cloudinary({
      secure: true,
      ...(props.cloud || {})
    })

    function init() {
      if (videoPlayer.value) return

      const isPlaylist = Array.isArray(props.sources) && props.sources.length > 1

      console.log(context.attrs)

      const options:VideoPlayerOptions = {
        bigPlayButton: true,
        controls: true,
        fontFace: "inherit",
        showJumpControls: true,
        ...(props.playerOptions || {})
      }

      if (isPlaylist && !options.playlistWidget) {
        //create playlist
        options.playlistWidget = {
          direction: "vertical",
          total: props.sources.length
        }
      }

      videoPlayer.value = (cloudinaryApi as CloudinaryVideoPlayer).videoPlayer(props.videoId, options)

      if (videoPlayer.value === null) return

      if (!options.publicId) {
        videoPlayer.value.source(props.sources[0])
      }

      if (isPlaylist) {
        videoPlayer.value.playlist(props.sources, props.playlistOptions)
      }

      videoPlayer.value.on('mute', ($event: any) => context.emit('mute', $event))
      videoPlayer.value.on('unmute', ($event: any) => context.emit('unmute', $event))
      videoPlayer.value.on('percentsplayed', ($event: any) => context.emit('percentsplayed', $event))
      videoPlayer.value.on('timeplayed', ($event: any) => context.emit('timeplayed', $event))
      videoPlayer.value.on('seek', ($event: any) => context.emit('seek', $event))
      videoPlayer.value.on('sourcechanged', ($event: any) => context.emit('sourcechanged', $event))
      videoPlayer.value.on('qualitychanged', ($event: any) => context.emit('qualitychanged', $event))

      context.emit('ready', videoPlayer.value)
    }

    function dispose () {
      if (!videoPlayer.value) return

      videoPlayer.value.dispose()
      videoPlayer.value = null
    }

    /**Problems */
    //1. Not reactive due to the fact on re-render, the actual component re-render wrongly (using inner video instead), and calling dispose removed everything
    /**2. Setting value = null will not help as the div with id now become irrelevant. */

    onMounted(init)
    onUnmounted(dispose)

    return () => h('video', {
      id: props.videoId,
      class: [ 'cld-video-player' ],
      ref: "videoPlayer"
    })
  },
})