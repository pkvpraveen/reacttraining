import {createStore} from 'redux';

const reducer = (state = {name: 'Anonymous'}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.data
            };

        default:
            return state;
    }
};

const store = createStore(reducer);
store.subscribe(()=>{
    let state = store.getState();
    console.log( state);
});


store.dispatch({
    type:'CHANGE_NAME',
    data:'Praveen'
});

store.dispatch({
    type:'CHANGE_NAME',
    data:'Praveen Kumar'
});
