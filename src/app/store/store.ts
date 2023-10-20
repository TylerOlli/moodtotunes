import { createStore } from 'redux';
import rootReducer from './reducers/reducers';

const tracksData = [
  {
    id: 1,
    title: 'Song 1',
    artist: 'Artist 1',
    album: 'Album 1',
  },
  {
    id: 2,
    title: 'Song 2',
    artist: 'Artist 2',
    album: 'Album 2',
  },
  {
    id: 3,
    title: 'Song 3',
    artist: 'Artist 3',
    album: 'Album 3',
  },
];

const initialState = {
  tracks: tracksData,
};

const store = createStore(rootReducer, initialState as RootState);

export type RootState = ReturnType<typeof rootReducer>;

export default store;