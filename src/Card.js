import React from "react"


const Card = ({id, title, image, overview, vote_average}) => {
    return (
        <div className='bg- tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://image.tmdb.org/t/p/w342/${image}`}  alt="" />
            <h1 className="f3 tc white">{title}</h1>
            <p className='f4 white b'>⭐{vote_average}</p>
        </div>
    )
}
export default Card