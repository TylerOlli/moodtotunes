import { Track } from '../types';
export const ADD_TRACK = 'ADD_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

export const addTrack = (track: any) => ({
  type: ADD_TRACK,
  payload: track,
});

export const removeTrack = (trackId: any) => ({
  type: REMOVE_TRACK,
  payload: trackId,
});

export const fetchTracks = async (): Promise<Track[]> => {
  const response = await fetch('../../data/sample-tracks.json');
  if (!response.ok) {
    throw new Error('Failed to fetch tracks');
  }
  const data = await response.json();
  console.log(data);
  return data.tracks;
};