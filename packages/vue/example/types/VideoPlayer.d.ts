import { Cloudinary, Transformation } from "cloudinary-core";
import { PlaylistWidgetProps } from "./Playlist";
import VideoPlayer, { Options } from 'cloudinary-video-player/types/video-player'

export type AutoplayMode = "never" | "always" | "on-scroll"

export type FloatingMode = "left" | "right"

export type FontFaceMode = string | false

export type PreloadMode = "auto" | "metadata" | "none"

export type PlayButtonMode = boolean | "init"

export interface VideoUIColors {
  base?: string;
  accent?: string;
  text?: string;
}

export interface VideoPlayerOptions extends Options {
  publicId?: string;
  fontFace?: string;
  seekThumbnails?: boolean;
  autoplayMode?: AutoplayMode;
  sourceTypes?: string[];
  floatingWhenNotVisible?: FloatingMode;
  bigPlayButton?: PlayButtonMode;
  playlistWidget?: PlaylistWidgetProps;
  showJumpControls?: boolean;
  autoplay?: boolean;
  autoShowRecommendations?: boolean;
  loop?: boolean;
  maxTries?: number;
  muted?: boolean
  playedEventPercents?: number[];
  playedEventTimes?: number[];
  playsinline?: boolean;
  videoTimeout?: number;
  preload?: PreloadMode;
  sourceTransformation?: Transformation;
}

export interface VideoJsOptions {
  videoWidth: () => number;
  videoHeight: () => number;
  error_: unknown;
}

export interface ExtendedVideoPlayer extends VideoPlayer {
  videojs: VideoJsOptions;
  on: (res: string, cb: CallbackFunction) => void;
  off: (res: string, cb: CallbackFunction) => void;
}

export interface CloudinaryVideoPlayer extends Cloudinary {
  videoPlayer: (id: string, options: VideoPlayerOptions) => ExtendedVideoPlayer
}

export type CallbackFunction = () => void;
export type CallbackWithArgs = (payload: unknown) => void;
export type OnDimensionsChangeTYpe = (payload: { width: number; height: number }) => void

export interface PlayerOptions {
  displayNotification?: CallbackFunction;
  onErrorHandler?: CallbackWithArgs;
  trackVideoEvents?: CallbackWithArgs;
  onDimensionsChange?: OnDimensionsChangeTYpe;
}

export interface Html5 {
  hls: { withCredentials: boolean };
}

export interface VideojsOptions {
  html5?: Html5;
}
