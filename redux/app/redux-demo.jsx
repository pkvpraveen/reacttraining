import {createStore,compose} from 'redux';

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

const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
const unsubscribe =store.subscribe(() => {
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
