import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { VscLibrary } from "react-icons/vsc"
import { AiOutlineMessage } from "react-icons/ai"
import { FiSettings } from "react-icons/fi"
import { GiExitDoor } from "react-icons/gi"
import { IoIosWifi } from "react-icons/io"
import "./Home.css"
import GameCard from "../Components/GameCard"
import Slider from "react-slick"
import img from "./profile.jpg"
import { SearchGames } from "../game_actions/game_action"
import { useDispatch, useSelector } from "react-redux"

export default function Home(props) {
  const SearchedGames = useSelector((state) => state.SearchedGames)
  const { games } = SearchedGames

  const dispatch = useDispatch()

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "20px",
    autoplaySpeed: 2000,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  }

  useEffect(() => {
    const updateName = async () => {
      dispatch(SearchGames(""))
    }
    updateName()
  }, [dispatch])

  return (
    <div className="home">
      <div className="home-top gameshow">
        <div className="gameshow-content">
          {props.loading ? (
            <p>Loading...</p>
          ) : props.error ? (
            <p>error</p>
          ) : (
            <>
              <Slider {...settings}>
                {games.map((game, i) => (
                  <div className="oneGame" key={i}>
                    <GameCard game={game} />
                  </div>
                ))}
              </Slider>
            </>
          )}
        </div>
      </div>

      <div className="home-bottom container">
        <div className="home-bottom-content">
          <div className="user">
            <div className="user-content">
              <span className="user-image">
                <img src={img} alt="profile " />
              </span>
              <span className="user-name">Rahan Bouess</span>
            </div>
          </div>
          <div className="menu">
            <div className="menu-content">
              <span className="menu-icon">
                <Link to="/library">
                  <VscLibrary />
                </Link>
              </span>
              <span className="menu-icon">
                <Link to="/library">
                  <AiOutlineMessage />
                </Link>
              </span>
              <span className="menu-icon">
                <Link to="/library">
                  <FiSettings />
                </Link>
              </span>

              <span className="menu-icon">
                <Link to="/">
                  <GiExitDoor />
                </Link>
              </span>
            </div>
          </div>

          <div className="info">
            <div className="info-content">
              <span className="info-icon">
                <IoIosWifi />
              </span>
              <span className="info-time">
                <p></p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
