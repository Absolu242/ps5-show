import { SEARCH_GAMES_REQUEST, SEARCH_GAMES_SUCCESS, SEARCH_GAMES_FAIL, FILTER_GAMES_REQUEST, FILTER_GAMES_SUCCESS, FILTER_GAMES_FAIL, GAME_DETAILS_REQUEST, GAME_DETAILS_SUCCESS, GAME_DETAILS_FAIL } from "../game_types/game_types"
import axios from "axios"

export const SearchGames = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_GAMES_REQUEST })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const { data } = await axios.get(`https://api.rawg.io/api/games?&search=${keyword}&key=320a0b4161474e5cbbab17a532f13381&platforms=187`, config)

    dispatch({
      type: SEARCH_GAMES_SUCCESS,
      payload: data.results,
    })
  } catch (error) {
    dispatch({
      type: SEARCH_GAMES_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const FilterGames = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: FILTER_GAMES_REQUEST })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const { data } = await axios.get(`https://api.rawg.io/api/games?genres=${keyword}&key=320a0b4161474e5cbbab17a532f13381&platforms=187`, config)

    dispatch({
      type: FILTER_GAMES_SUCCESS,
      payload: data.results,
    })
  } catch (error) {
    dispatch({
      type: FILTER_GAMES_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

export const oneGame = () => async (dispatch) => {
  try {
    dispatch({ type: GAME_DETAILS_REQUEST })

    const { data } = await axios.get(`https://api.rawg.io/api/games?&key=320a0b4161474e5cbbab17a532f13381&platforms=187`)

    dispatch({
      type: GAME_DETAILS_SUCCESS,
      payload: data.results,
    })
  } catch (error) {
    dispatch({
      type: GAME_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}
