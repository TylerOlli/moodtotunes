
export const ADD_TRACK = 'ADD_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

export interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface TrackAction {
  type: typeof ADD_TRACK | typeof REMOVE_TRACK;
  payload: Track;
}

export interface TrackState {
  tracks: Track[];
}