import defaultState from './state';
import { clickFocus, clickBlur } from './actionTypes';

export default (state = defaultState, action) => {
    if(action.type === clickFocus){
        const newState = JSON.parse(JSON.stringify(state));
        newState.searFocus = true;
        return newState;
    }
    if(action.type === clickBlur){
        const newState = JSON.parse(JSON.stringify(state));
        newState.searFocus = false;
        return newState;
    }
    return state;
}