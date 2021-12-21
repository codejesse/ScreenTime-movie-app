import React, { useEffect, useState } from "react";
import Cardlist from "./Cardlist";
import Scroll from "./Scroll";
import "./index.css"

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=544297d08ee9679e6641d18e5056a278&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    )
      .then(response => response.json())
      .catch(err => console.error(err))
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1 className="tc white header">ScreenTime 🍿</h1>
      <Scroll>
        <Cardlist movies={movies} />
      </Scroll>
    </div>
  );
}

export default App;
