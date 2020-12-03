export const Compass = {
  North: "north",
  NorthEast: "north_east",
  NorthWest: "north_west",
  West: "west",
  SouthWest: "south_west",
  South: "south",
  SouthEast: "south_east",
  East: "east",
  Center: "center",
} as const

export const Gravity = {
  Auto: 'auto',
  Subject: "auto:subject",
  Face: "face",
  Sink: "sink",
  FaceCenter: "face:center",
  MultipleFaces: "faces",
  MultipleFacesCenter: "faces:center",
  ...Compass,
} as const