import {createStore, compose, combineReducers} from 'redux';
import axios from 'axios';

const mapReducer = (state = {isFetching: false, url: undefined}, action) => {
    switch (action.type) {
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url: undefined
            };
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            };
        default:
            return state;
    }
};

const startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    };
};

const completeLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    };
};

const fetchLocation = () => {
    store.dispatch(startLocationFetch());
    axios.get('http://ipinfo.io').then((response) => {
        const location = response.data.loc;
        const locationUrl = `http://maps.google.com?q=${location}`;
        store.dispatch(completeLocationFetch(locationUrl));
    });
};

const reducer = combineReducers({
    map: mapReducer
});
const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
store.subscribe(() => {
    const state = store.getState();
    if (state.map.isFetching) {
        document.getElementById('app').innerHTML = 'Loading...';
    } else {
        document.getElementById('app').innerHTML =
            `<a href="${state.map.url}" target="_blank">View Your Location</a>`;
    }
});

fetchLocation();