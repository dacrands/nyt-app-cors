# New York Times API app

React/Redux application featuring data from the New York Times API.

<div style="text-align:center;">

![New york times app](https://i.imgur.com/7SIlmAJl.jpg)
</div>

<div style="max-width: 600px; margin: 0 auto;">

|  Features               |  Description               |
|------------------------|--------------------|
|Archive Search |Set a year range between the current year and 1900 and read articles from another era
|Best Sellers Showcase |View the best-sellers, hover over a book to read its abstract, click on a book to purchase it on Amazon
|Most Emailed Articles |See what articles people are sharing
</div>

## Table of Contents
- [Background](#background)
  - [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [How it works](#how)


## Background 
Once I found out about the wonderful world of APIs, I knew right away that I wanted to work with news data.

I don't follow the news at all, but news data, particularly news articles, typically have a simple data-structure of a title, text, and perhaps a few images. This was an ideal schema for me, as I wanted data that would be easy to build a UI around.

### Prerequisites
- [Node](https://nodejs.org/en/)
- [React-Redux](https://redux.js.org/basics/usage-with-react) knowledge
- a [designated API](https://github.com/dacrands/nyt-api-cors) that deliver NYT API data

### Why the New York Times?
The primary reason I went with the New York Times API was to access their archives. These archives are massive, with some request payloads for a single month numbering tens-of-thousands of articles. As a history buff, I wanted a tool tap into this immense trove of information, and thus this app.

## Getting Started
You will need to have Node installed. Once you've cloned the repository, install your dependencies.

```
$ npm i
```

### Development
```
$ npm run dev
```

### Production
```
$ npm run prod
```

## How it works
### Actions
Each Redux action is a call to a Flask application that then makes a call to the New York Times API (Here is the [repository for the Flask application](https://github.com/dacrands/times-app-api) used to handle API calls). I used the [redux-thunk library](https://github.com/reduxjs/redux-thunk) for these asynchronous API-calls, namely for the purposes of error and loading states. 

For example:

```javascript
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
```

This is the action used to fetch the archives data. Take note of `dispatch` and its returning of an asnychronous function. However, prior to returning this function, it calls two actions. `fetchLoading()` receives a boolean indicating whether or not the API call has resolved yet &mdash; when the associated reducer's state is set to `true`, the user sees a loading animation. `fetchError` also receives a bool and is only set to `true` if the fetch does not resolve &mdash; similar to `fetchLoading`, when the `fetchError` reducer's state is set to `true`, the user sees an error message. This allows for a nice UX, as calls to the archives can take a few seconds.




### Containers
Each container has an associated action. When a container mounts, the action is called and the data passed via props.

```javascript
componentDidMount() {
    this.props.fetchPopular();    
}
...
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPopular }, dispatch);    
}
function mapStateToProps({ popular }) {
    return { popular };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
```

That is really the primary logic of the application. 


## Author
David Crandall


