import React from "react"


const Card = ({id, title, image}) => {
    return (
        <div className='bg- tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://image.tmdb.org/t/p/w342/${image}`}  alt="" />
            <h1 className="tc white">{title}</h1>
        </div>
    )
}
export default Card