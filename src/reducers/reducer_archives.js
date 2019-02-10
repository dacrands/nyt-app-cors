import { FETCH_ARCHIVES } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ARCHIVES:
      return [shuffleArchives(action.payload.response.docs)];
  }
  return state;
}

function shuffleArchives(arr) {
  // -----THANKS----------
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  // -----THANKS----------
  var currentIndex = arr.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}
