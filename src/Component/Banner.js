import { movies } from "./GetMovies";
import React, { Component } from "react";

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      mymovie: {},
    };
  }
  //   componentDidMount() {
  //     this.interval = setInterval(
  //       () =>
  //         this.setState((prev) => {
  //           console.log(prev);
  //           prev.mymovie = movies.results[prev.index];
  //           if (prev.index === 10) {
  //             prev.index = 0;
  //           } else {
  //             prev.index += 1;
  //           }
  //         }),
  //       3000
  //     );
  //   }
  //   componentWillUnmount() {
  //     clearInterval(this.interval);
  //   }
  render() {
    let movie = movies.results[12];

    return (
      <>
        {
          // loader
          movie === "" ? (
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : (
            // loader end

            <div class="card banner-card">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="card-img-top banner-img"
              />
              <h1 className="card-title banner-title">
                {movie.original_title}
              </h1>
              <p className="card-text banner-text">{movie.overview}</p>
            </div>
          )
        }
      </>
    );
  }
}
