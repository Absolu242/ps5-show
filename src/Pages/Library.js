import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Library.css"
import { BiHome } from "react-icons/bi"
import Games from "../Components/Games/Games"
import { SearchGames, FilterGames } from "../game_actions/game_action"
import { useDispatch, useSelector } from "react-redux"

export default function Library(props) {
  const [Open, setOpen] = useState(false)

  const [value, setValue] = useState("")
  const [filtered, setFilter] = useState("")

  const SearchedGames = useSelector((state) => state.SearchedGames)
  const { games } = SearchedGames

  const FilteredGames = useSelector((state) => state.FilteredGames)
  const { filtergames } = FilteredGames

  const dispatch = useDispatch()
  const filter = {
    left: Open ? "0" : "-200%",
    overflow: "hidden",
  }
  const change = {
    transform: Open ? " translateX(0%)" : "translateX(-32%)",
  }

  useEffect(() => {
    if (filtered === "") {
      dispatch(SearchGames(value))
    } else if (filtered !== "" && value !== "") {
      const val = ""
      setFilter(val)
      dispatch(SearchGames(value))
    } else {
      dispatch(FilterGames(filtered))
    }
  }, [dispatch, value, filtered])

  console.log(Open)

  return (
    <div className="library">
      <div className="library-top">
        <div className="library-title">
          <div className="container">
            <h1>Library</h1>
          </div>
        </div>

        <div className="library-main container">
          <div className="library-filters" style={filter}>
            <Search close={setOpen} search={setValue} />

            <span
              className="library-category"
              style={filtered === "" ? { color: "#000" } : null}
              onClick={() => {
                setFilter("")
                setOpen(false)
              }}
            >
              <span className="catName">
                <p> All</p>
              </span>
              <span className="catNumber">
                <p> .</p>
              </span>
            </span>
            <span
              className="library-category"
              style={filtered === "action" ? { color: "#000" } : null}
              onClick={() => {
                setFilter("action")
                setOpen(false)
              }}
            >
              <span className="catName">
                <p> Action</p>
              </span>
              <span className="catNumber">
                <p> .</p>
              </span>
            </span>
            <span
              className="library-category"
              style={filtered === "adventure" ? { color: "#000" } : null}
              onClick={() => {
                setFilter("adventure")
                setOpen(false)
              }}
            >
              <span className="catName">
                <p> Adventure</p>
              </span>
              <span className="catNumber">
                <p> .</p>
              </span>
            </span>
            <span
              className="library-category"
              style={filtered === "rpg" ? { color: "#000" } : null}
              onClick={() => {
                setFilter("rpg")
                setOpen(false)
              }}
            >
              <span className="catName">
                <p> RPG</p>
              </span>
              <span className="catNumber">
                <p>.</p>
              </span>
            </span>
            <span
              className="library-category"
              style={filtered === "shooter" ? { color: "#000" } : null}
              onClick={() => {
                setFilter("shooter")
                setOpen(false)
              }}
            >
              <span className="catName">
                <p> Shooter</p>
              </span>
              <span className="catNumber">
                <p>.</p>
              </span>
            </span>
          </div>

          <Games change={change} props={props} games={filtered === "" ? games : filtergames} />
        </div>
      </div>
      <div className="library-bottom">
        <div className="buttons ">
          <span className="back ">
            <button onClick={() => setOpen(!Open)}>
              {" "}
              <span>O</span> {Open ? "Back" : "Filters"}{" "}
            </button>
          </span>
          <span className="back">
            <button>
              {" "}
              <p>
                <span>X</span> OK
              </p>{" "}
            </button>
          </span>
        </div>
        <div className="return">
          <Link to="/">
            <BiHome />
          </Link>
        </div>
      </div>
    </div>
  )
}

const Search = (props) => {
  const [value, setValue] = useState("")
  const handleValue = (e) => {
    setValue(e.target.value)
  }

  const resetValue = () => {
    const val = ""
    setValue(val)
    props.search(val)
    props.close(false)
  }

  const onSearch = (e) => {
    e.preventDefault()
    props.search(value)
    props.close(false)
  }
  return (
    <span className="search">
      <form onSubmit={onSearch}>
        <input value={value} onChange={(e) => handleValue(e)} type="text" name="search" placeholder="Search" id="" />
        <button
          style={{
            padding: " .5rem 1.2rem",
            background: "none",
            border: "1px solid ",
            color: "#646868",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          type="submit"
        >
          Search
        </button>
        {value === "" ? (
          <span></span>
        ) : (
          <button
            style={{
              padding: " .5rem 1.2rem",
              background: "none",
              border: "1px solid ",
              color: "#646868",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={resetValue}
          >
            Clear
          </button>
        )}
      </form>
    </span>
  )
}
