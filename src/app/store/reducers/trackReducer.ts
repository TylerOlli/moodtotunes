import { TrackAction, TrackState } from '@/app/types';
import { ADD_TRACK, REMOVE_TRACK } from '../actions/trackActions';

type Track = {
    id: number;
    title: string;
    artist: string;
    album: string;
};

type State = {
    tracks: Track[];
};

const initialState = {
  tracks: [],
};

const trackReducer = (state = initialState, action: TrackAction): TrackState => {
    switch (action.type) {
      case ADD_TRACK:
        return {
          ...state,
          tracks: [...state.tracks, action.payload],
        };
      case REMOVE_TRACK:
        return {
          ...state,
          tracks: state.tracks.filter((track: { id: any; }) => track.id !== action.payload),
        };
      default:
        return state;
    }
  };

export default trackReducer;