import { FETCH_POPULAR } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POPULAR:
      return [action.payload.results];
  }
  return state;
}
