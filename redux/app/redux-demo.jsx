import {createStore} from 'redux';

let initialState = {name: 'Anonymous', hobbies: []};
let hobbyId = 1;
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.data
            };
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: hobbyId++,
                        hobby: action.data
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.data)
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
store.subscribe(() => {
    let state = store.getState();
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

store.dispatch({
    type: 'ADD_HOBBY',
    data: 'Running'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    data: 1
});
