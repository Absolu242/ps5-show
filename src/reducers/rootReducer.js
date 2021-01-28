import { combineReducers } from "redux"

import { oneGameReducer, FilterGamesReducer, SearchGamesReducer } from "./gameReducers"

export default combineReducers({
  OneGame: oneGameReducer,
  FilteredGames: FilterGamesReducer,
  SearchedGames: SearchGamesReducer,
})
