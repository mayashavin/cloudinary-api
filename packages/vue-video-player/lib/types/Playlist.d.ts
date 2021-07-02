/** Video Playlist */
export interface PlaylistWidgetProps {
  direction: 'vertical' | 'horizontal',
  total: number,
  width?: number,
}

export interface PlaylistConfig {
  autoAdvance: boolean,
  repeat: boolean,
  presentUpcoming: number | true
}