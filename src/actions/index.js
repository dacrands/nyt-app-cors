const fetch = require('node-fetch');

const bestUrl = `https://api.times.dcrands.com/api/best`;
const popularUrl = `https://api.times.dcrands.com/api/popular`;


export const FETCH_HISTORY = 'FETCH_HISTORY';
export const FETCH_BEST = 'FETCH_BEST';
export const FETCH_ARCHIVES = 'FETCH_ARCHIVES';
export const FETCH_POPULAR = 'FETCH_POPULAR';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_LOADING = 'FETCH_LOADING';

// -------------------------
// Error and loading actions
// -------------------------
export function fetchError(bool) {
    return  {
        type: 'FETCH_ERROR',
        isError: bool
    }
}

export function fetchLoading(bool) {
    return {
        type: 'FETCH_LOADING',
        isLoading: bool
    };
}


// -------------------------
// Fetches
// -------------------------
export function fetchHistory() {
    return fetch(historyUrl)
    .then((response) => {
        return response.json();
    })
    .then((request) => {        
        return {
            type: FETCH_HISTORY,
            payload: request 
        }
    });
}


export function fetchPopular() {
    return fetch(popularUrl)
    .then((response) => {
        return response.json();
    })
    .then((request) => {
        console.log(request);       
        return {
            type: FETCH_POPULAR,
            payload: request 
        }
    });
}

export function fetchBestSuccess(request) {
    return { 
        type: FETCH_BEST,
        payload: request
    };
}

export function fetchBest() {
    return dispatch => {
        dispatch(fetchLoading(true));        
        dispatch(fetchError(false));
        return fetch(bestUrl)
        .then((response) => {
            return response.json();
        })
        .then((request) => {
            dispatch(fetchLoading(false));
            return dispatch(fetchBestSuccess(request))
        }).catch(e => dispatch(fetchError(true)));
    }    
}

export function fetchArchivesSuccess(request) {
    return { 
        type: FETCH_ARCHIVES,
        payload: request
    };
}

export function fetchArchives(min, max) {
    const archivesUrl = `https://api.times.dcrands.com/api/archives/${getRandomYear(min, max)}/${getRandomMonth()}`;
    return dispatch => {
        dispatch(fetchLoading(true));        
        dispatch(fetchError(false));        
        return fetch(archivesUrl)
            .then((response) => {                
                return response.json();
            })
            .then((request) => {
                dispatch(fetchLoading(false))
                return dispatch(fetchArchivesSuccess(request))            
        }).catch(e => dispatch(fetchError(true)));
    }    
}


// ---------------
// Random number generators for
// archives action
// ---------------
function getRandomYear(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function getRandomMonth() {
    return Math.floor(Math.random() * (12-1) + 1);
}