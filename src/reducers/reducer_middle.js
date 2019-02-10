export function fetchError(state = false, action) {
  switch (action.type) {
    case "FETCH_ERROR":
      return action.isError;
  }
  return state;
}

export function fetchLoading(state = false, action) {
  switch (action.type) {
    case "FETCH_LOADING":
      return action.isLoading;
  }
  return state;
}
