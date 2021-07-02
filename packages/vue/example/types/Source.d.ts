import { Transformation } from "cloudinary-core";

export interface SourceInfo {
  title: string;
  subtitle?: string;
  description?: string;
}

export interface Subtitle {
  label: string;
  language: string;
  default?: boolean;
  url: string;
}

export interface TextTracks {
  captions: Subtitle | Subtitle[];
  subtitles: Subtitle | Subtitle[];
}

export interface Source {
  publicId: string;
  transformation?: Transformation[];
  info?: SourceInfo;
  textTracks?: TextTracks;
  recommendations?: Source[]
}