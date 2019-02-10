import { FETCH_BEST } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BEST:
      return [action.payload.results.books];
  }
  return state;
}
