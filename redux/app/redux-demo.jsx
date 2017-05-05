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

const changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        data: name
    };
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

const addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        data: hobby
    };
};

const removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        data: id
    };
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


store.dispatch(changeName('Praveen'));

store.dispatch(changeName('Praveen Kumar'));

store.dispatch(addHobby('Swimming'));
store.dispatch(addHobby('Running'));
store.dispatch(removeHobby(1));

// unsubscribe();
