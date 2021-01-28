import React from "react"
import { Link } from "react-router-dom"
import "./gameCard.css"

export default function GameCard({ game }) {
  return (
    <Link to={`game/${game.slug}`}>
      <div className="game">
        <div className="game-image" style={{ backgroundImage: `url(${game.background_image})` }}></div>
        <div className="game-name">
          <p>{game.name}</p>
        </div>
      </div>
    </Link>
  )
}
