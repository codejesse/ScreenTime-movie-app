import React from "react"
import "./index.css"


const Card = ({id, title, image, overview, vote_average}) => {
    return (
     <div className='container row'>
        <div className='column'>
            <img src={`https://image.tmdb.org/t/p/w342/${image}`}  alt=""/>
            <h1 className="f3 tc white">{title}</h1>
            <div className="overlay">
                <div className="f3 tc white title">{title}</div>
                <div className="text">{overview}</div>
                <div className="rating">Rating: ⭐{vote_average}</div>
            </div>
        </div>
      </div>
    )
}
export default Card