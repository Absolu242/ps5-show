import { SEARCH_GAMES_REQUEST, SEARCH_GAMES_SUCCESS, SEARCH_GAMES_FAIL, FILTER_GAMES_REQUEST, FILTER_GAMES_SUCCESS, FILTER_GAMES_FAIL, GAME_DETAILS_REQUEST, GAME_DETAILS_SUCCESS, GAME_DETAILS_FAIL } from "../game_types/game_types"

export const oneGameReducer = (state = { games: [] }, action) => {
  switch (action.type) {
    case GAME_DETAILS_REQUEST:
      return { ...state, loading: true }
    case GAME_DETAILS_SUCCESS:
      return { loading: false, games: action.payload }
    case GAME_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export function FilterGamesReducer(state = { filtergames: [] }, action) {
  switch (action.type) {
    case FILTER_GAMES_REQUEST:
      return { loading: true, filtergames: [] }
    case FILTER_GAMES_SUCCESS:
      return {
        loading: false,
        filtergames: action.payload,
      }
    case FILTER_GAMES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export function SearchGamesReducer(state = { games: [] }, action) {
  switch (action.type) {
    case SEARCH_GAMES_REQUEST:
      return { loading: true, games: [] }
    case SEARCH_GAMES_SUCCESS:
      return {
        loading: false,
        games: action.payload,
      }
    case SEARCH_GAMES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
