export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const SELECT = 'SELECT';

export const select = (selected) => ({
  type: SELECT,
  selected,
})
export const request = () => ({
  type: REQUEST,
});

export const success = (json) => ({
  type: SUCCESS,
  json,
});

export const fail = (error) => ({
  type: FAIL,
  error,
});

export const fetchPosts = (subReddit) => {
  return (dispatch) => {
    dispatch(request());
    return fetch(`https://www.reddit.com/r/${subReddit}.json`)
      .then((response) => response.json()
        .then( 
        (json) => dispatch(success(json)),
        (error) => dispatch(fail(error)),
        ))
  }
} 