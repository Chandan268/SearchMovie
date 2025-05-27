import React from "react";

const MovieCard = (props) => {
  const { movie, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        marginTop: "20px",
        border: "1px solid #ccc",
        padding: "10px",
        display: "flex",
        maxWidth: "500px",
        alignItems: "center",
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{ width: "100px", marginRight: "20px" }}
      />
      <div>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
