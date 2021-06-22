export const SET_URL = 'url/setUrl'
export const SET_SEARCH = 'search/setSearch'
export const SET_SEARCH_LOADING = 'searchLoading/setSearchLoading'
export const SET_SEARCH_ERR = 'searchErr/setSearchErr'

export function setUrl (payload) {
  return { type: SET_URL, payload: payload }
}
export function setSearch (payload) {
  return { type: SET_SEARCH, payload: payload }
}
export function setSearchLoading (payload) {
  return { type: SET_SEARCH_LOADING, payload: payload }
}
export function setSearchErr (payload) {
  return { type: SET_SEARCH_ERR, payload: payload }
}

export function fetchSearch (query) {
  return function (dispatch) {
    dispatch(setSearchLoading(true))
    fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${query}&num=10`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d6d0e9407dmshac156ea46b856b2p11d367jsnd81ebddbd315",
        "x-rapidapi-host": "google-search3.p.rapidapi.com"
      }
    })
    .then(res => res.json())
    .then(response => {
      dispatch(setSearch(response.results))
    })
    .catch(err => {
      console.error(err);
    })
    .finally(() => {
      dispatch(setSearchLoading(false))
    })
  }
}