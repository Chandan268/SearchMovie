import React, { useState } from "react";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

const API_KEY = "ba318b2b";

const App = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState("");

  const fetchMovie = async () => {
    setSelectedMovie(null); // clear previously selected movie
    setError("");
    const res = await fetch(
      `https://www.omdbapi.com/?t=${search}&apikey=${API_KEY}`
    );
    const data = await res.json();
    if (data && data.Response !== "False") {
      setMovie(data);
      setSearch("");
    } else {
      setMovie(null);
      setError("Movie not found. Please try another title.");
    }
  };

  const handleCardClick = () => {
    setSelectedMovie(movie);
  };

  return (
    <div
      style={{ padding: "20px", fontFamily: "Arial", alignContent: "center" }}
    >
      <h2>Search any movie here</h2>
      <input
        type="text"
        value={search}
        placeholder="Enter movie title"
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginRight: "10px",
          borderRadius: "5px",
        }}
      />
      <button
        style={{
          padding: "10px",
          marginRight: "10px",
          borderRadius: "5px",
          color: "white",
          backgroundColor: "green",
        }}
        onClick={fetchMovie}
      >
        Search
      </button>

      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {movie && !error && (
        <>
          <MovieCard movie={movie} onClick={handleCardClick} />
          {selectedMovie && <MovieDetails movie={selectedMovie} />}
        </>
      )}
    </div>
  );
};

export default App;
