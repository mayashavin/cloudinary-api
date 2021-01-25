import { Configuration } from 'cloudinary-core'
import VideoPlayer from './components/VideoPlayer'
import { VideoPlayerOptions } from './types/VideoPlayer'

const install = (app: { component: (name: string, component: any) => void }, config: { cloud: Configuration.Options; playerOptions: VideoPlayerOptions }) => {
  if (!config || !config.cloud) return
  
  VideoPlayer.props.cloud.default = () => config.cloud

  if (config.playerOptions) {
    VideoPlayer.props.playerOptions.default = () => config.playerOptions
  }

  app.component(VideoPlayer.name, VideoPlayer)
}

export default {
  install
}