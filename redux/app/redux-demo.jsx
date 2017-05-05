var redux = require('redux');

var reducer = (state = {name: 'Anonymous'}, action) => {
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

var store = redux.createStore(reducer);
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
