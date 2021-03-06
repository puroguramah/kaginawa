import * as types from '../constants'

const initialState = {
  links: []
}

export default function selectedImages(state = initialState, action = null) {
  switch (action.type) {
    case types.SELECT_IMAGE:
      return { links: [ ...state.links, action.link ] }
    case types.UNSELECT_IMAGE:
      return { links: state.links.filter( link => link != action.link ) }
    default:
      return state
  }
}
