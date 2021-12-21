import React from "react";
import Card from "./Card";

const Cardlist = ({ movies }) => {
  return (
    <div className="tc">
      {movies &&
        movies.map((movie, i) => (
          <Card
            key={i}
            id={movie.id}
            title={movie.title}
            image={movie.poster_path}
            overview={movie.overview}
            vote_average={movie.vote_average}
          />
        ))}
    </div>
  );
};
export default Cardlist;
