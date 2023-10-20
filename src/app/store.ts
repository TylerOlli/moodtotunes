import { createStore, combineReducers } from 'redux';
import { Track } from './types';
import tracksData from './tracksData';

export interface RootState {
  tracks: Track[];
}

const tracks: Track[] = tracksData;

const initialState: RootState = {
  tracks,
};

function rootReducer(state = initialState, action: { type: any; }) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;