import "./App.css";
import { MovieList } from "./components/movieList.jsx";
import { MovieCard } from "./components/movie_card.jsx";
import { movies as m } from "./index.js";
import React, { useState } from "react";
import { MovieCheck } from "./components/MovieCheck";

function App() {
  const [movies, setMovies] = useState(m);
  const [checks, setChecks] = useState([]);
  const [direction, setDirection] = useState("row");
  const handleCheck = (id) => {
    setChecks([...checks, id]);
  };
  const handleClick = () => {
    setDirection(direction === "row" ? "column" : "row");
  };


  return (
    <div className="list">
      <button type="button" onClick={handleClick}>
        CLICK ME
      </button>
      <MovieList
        vertical
        flexDirection={direction}
      >
        {movies.map((movie) => (
          <>
            <MovieCard border key={movie.id} movie={movie} />
            <MovieCheck
              isCheck={checks.includes(movie.id)}
              onChange={() => handleCheck(movie.id)}
              checked={true}
            />
          </>
        ))}
      </MovieList>
    </div>
  );
}

export default App;
