import React from "react"
import GameCard from "../GameCard"
import "../../Pages/Library.css"

import { BiLoader } from "react-icons/bi"
function Games({ props, games, change }) {
  return (
    <>
      <div className="library-games" style={change}>
        <div className="library-games-content">
          {props.loading || games.length <= 0 ? (
            <div
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                padding: "3rem 0",
                flexDirection: "column",
                width: "100%",
              }}
              className="text-center f-sm py-3"
            >
              <p>
                {" "}
                <BiLoader fontSize="60px" color="#000" />
              </p>
              <p>Loading</p>
            </div>
          ) : props.error ? (
            <p>error</p>
          ) : (
            <>
              {games.map((game, i) => (
                <div className="grid-item" key={i}>
                  <GameCard game={game} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Games
