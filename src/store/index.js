import { createStore } from 'redux';
import VetReducer, { INITIAL_STATE } from './reducers';

const store = createStore(VetReducer, INITIAL_STATE);

export default store;