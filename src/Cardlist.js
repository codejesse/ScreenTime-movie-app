import React from "react"
import Card from "./Card"

const Cardlist = ({ movies }) => {
    const cardArray = movies.results.map((movie, i) => {
        return <Card 
        key={i} id={movies.results[i].id} 
        title={movies.results[i].title} 
        image={movies.results[i].poster_path} 
        overview={movies.results[i].overview}
        vote_average={movies.results[i].vote_average}
        />
    })
    return (
        <div className="tc">
            {cardArray}
        </div>
    )
}
export default Cardlist