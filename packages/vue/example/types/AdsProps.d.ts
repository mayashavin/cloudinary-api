export interface AdsProps {
  adTagUrl: string;
  adsInPlaylist?: AdsInPlaylist;
  showCountdown?: boolean
  adLabel?: string;
  locale?: string;
  prerollTimeout?: number;
  postrollTimeout?: number;
}

export type AdsInPlaylist = "first-video" | "every-video"