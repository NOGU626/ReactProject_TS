import { combineReducers} from 'redux';
import {deleteName,setName} from '../actions/actions';
// reducers.js
// reduxではglobal stateを巨大なjson(store)として管理します。stateの変更はjsonの書き換えによってのみ管理します。
// actionは純粋なjsのオブジェクトを作る関数であることを思い出してください。
// reducerはactionで生成されたオブジェクトを受け取り、巨大なjson(store)を書き換える関数です。
type State = {
    name: String,
}

let INITIAL_STATE:State = {
    name: 'Nanasi',
};

// Actions
const ADD_NAME = 'ADD_NAME' as const;
const DELETE_NAME = 'DELETE_NAME' as const;


type Actions = ReturnType<typeof deleteName | typeof setName>;


const reducer = (state:State | null, action:Actions) => {
    if (!state) return INITIAL_STATE;

    switch (action.type) {
        case ADD_NAME:
            return {...state, name: action.name}
        case DELETE_NAME:
            return {...state, name: ''}
        default:
            return state;
    }
}

export const reducers = combineReducers({
    user: reducer
});
