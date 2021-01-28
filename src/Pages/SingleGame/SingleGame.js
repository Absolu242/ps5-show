import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { oneGame } from "../../game_actions/game_action"
import { VscLibrary } from "react-icons/vsc"
import { BiHome } from "react-icons/bi"
import "./SingleGame.css"
import { Link } from "react-router-dom"
import { BiLoader } from "react-icons/bi"

export default function SingleGame({ match }) {
  const Game = useSelector((state) => state.OneGame)
  const { games } = Game
  const prodId = match.params.id

  const dispatch = useDispatch()

  const game = games.filter((gam) => gam.slug === prodId)

  useEffect(() => {
    dispatch(oneGame())
  }, [dispatch, prodId])

  return (
    <>
      {game.length === 0 ? (
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
      ) : (
        <div className="single">
          <div className="single-content">
            <div className="single-grid">
              <div className="single-left">
                <div className="img" style={{ backgroundImage: `url(${game[0].background_image})` }}></div>
              </div>
              <div className="single-info">
                <span className="single-name">
                  <h1>{game[0].name}</h1>
                </span>
                <span className="single-details">
                  <p className="heading">
                    {" "}
                    Available on :
                    {game[0].platforms.map((plat, i) => (
                      <span key={i}> {plat.platform.name} </span>
                    ))}
                  </p>
                </span>
                <span className="single-details">
                  <p className="heading">
                    genres :{" "}
                    {game[0].genres.map((g, i) => (
                      <span key={i}> {g.name} </span>
                    ))}{" "}
                  </p>
                </span>
                <span className="single-details">
                  <p className="heading">Ratings: </p>
                  {game[0].ratings.map((g, i) => (
                    <p key={i}>
                      {" "}
                      <span>{g.title} : </span> {g.count} , {g.percent}{" "}
                    </p>
                  ))}
                  <p>Recommended : 815 , 46.5%</p>
                </span>
                <span className="single-details">
                  <p className="heading">
                    Stores:{" "}
                    {game[0].stores.map((plat, i) => (
                      <span key={i}> {plat.store.name} </span>
                    ))}{" "}
                  </p>
                </span>
                <span className="single-details">
                  <p className="heading">Tags: </p>
                  <p>
                    {" "}
                    {game[0].tags.map((plat, i) => (
                      <span key={i}> {plat.name} </span>
                    ))}
                  </p>
                </span>
                <span className="single-details">
                  <p className="heading">
                    Suggested by: <span>{game[0].suggestions_count}</span> people
                  </p>
                </span>
                <span className="single-details">
                  <p className="heading">
                    Released: <span>{game[0].released}</span>{" "}
                  </p>
                  <p className="heading">
                    Latest Update by: <span>{game[0].updated}</span>{" "}
                  </p>
                </span>
              </div>
            </div>
            <div className="single-images">
              <div className="single-images__content">
                {game[0].short_screenshots.map((img, i) => (
                  <div key={i} className="image" style={{ backgroundImage: `url(${img.image})` }}></div>
                ))}
              </div>
            </div>
          </div>
          <div className="library-bottom">
            <div className="return">
              <Link to="/library">
                <VscLibrary />
              </Link>
            </div>
            <div className="return">
              <Link to="/">
                <BiHome />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
