import * as types from '../constants'
import axios from 'axios'

function requestSearch() {
  return {
    type: types.REQUEST_SEARCH
  }
}

function receiveSearch(json) {
  return {
    type: types.SEARCH_SUCCESS,
    tweets: json.tweets,
    nextResults: json.next_results
  }
}

export function search(query, endpoint) {
  return dispatch => {
    dispatch(requestSearch())
    return axios.get(`/search/${endpoint}.json${query}`)
      .then(res => dispatch(receiveSearch(res.data)))
  }
}

export function deleteSearch() {
  return {
    type: types.DELETE_SEARCH
  }
}
