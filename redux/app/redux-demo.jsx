import {createStore, compose, combineReducers} from 'redux';

let hobbyId = 1;
const nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.data;
        default:
            return state;
    }
};
const hobbyReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: hobbyId++,
                    hobby: action.data
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.data);
        default:
            return state;
    }
};
const reducer = combineReducers({
    name: nameReducer,
    hobbies: hobbyReducer
});
const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
const unsubscribe = store.subscribe(() => {
    let state = store.getState();
    document.getElementById('app').innerHTML = state.name;
    console.log(state);
});


store.dispatch({
    type: 'CHANGE_NAME',
    data: 'Praveen'
});

store.dispatch({
    type: 'CHANGE_NAME',
    data: 'Praveen Kumar'
});

store.dispatch({
    type: 'ADD_HOBBY',
    data: 'Swimming'
});

// unsubscribe();

store.dispatch({
    type: 'ADD_HOBBY',
    data: 'Running'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    data: 1
});
