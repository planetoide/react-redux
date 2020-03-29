import { combineReducers } from 'redux';
import reducer from './reducer';
import reducerTwo from './reducerTwo';

const rootReducer = combineReducers({
    oneState: reducer,
    twoState: reducerTwo
});

export default rootReducer;
