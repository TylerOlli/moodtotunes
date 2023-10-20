import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { tracksData } from '../data/tracksData';

const initialState = {
  tracks: tracksData,
};

const store = createStore(rootReducer, initialState as RootState);

export type RootState = ReturnType<typeof rootReducer>;

export default store;