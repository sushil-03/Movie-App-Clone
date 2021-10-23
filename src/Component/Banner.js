import {movies} from './GetMovies'
import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        let movie=movies.results[0];
        return (
            <>{
                // loader
                movie===""?
                    <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>:
                // loader end

                <div class="card banner-card">
    {/* image will be added later */}
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="card-img-top banner-img"/>
                    <h1 className="card-title banner-title">{movie.original_title}</h1>
                    <p className="card-text banner-text">{movie.overview}</p>
                </div>

            }
            </>
        )
    }
}
