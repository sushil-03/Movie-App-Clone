import {movies} from './GetMovies'
import React, { Component } from 'react'

export default class Movies extends Component {
    constructor(){
        super();
        this.state={
            hover:'',
            parr:[1] //this is for pagination
        }
    }
    render() {
        let movie=movies.results;
        return (
            <>
            {
            movie.length===0?
                //loader
                <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>:
                //loader end
            <div>
                <h3 className="text-center"><strong>Trending</strong></h3>
                <div className="movies-list">
                    {
                        movie.map((movieObj)=>{
                            return(
                                 <div className="card movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id })}  onMouseLeave={()=>this.setState({hover:''})}>
                                <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}  style={{height:'40vh'}} alt={movieObj.title} className="card-img-top banner-img"/>
                                <h5 className="card-title movies-title">{movieObj.original_title}</h5>
                                {/* <p className="card-text movies-text">{movieObj.overview}</p> */}
                                <div className="button-wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>
                                    {
                                        this.state.hover===movieObj.id && 
                                    <a className="btn btn-primary movies-button">Add to Favourite</a>
                                    }
                                </div>
                            </div>
                            )
                           
                        })
                    }
                
                </div>
                {/* Pagination */}
                <div style={{display:'flex',justifyContent:'center'}}>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>

                        {
                            this.state.parr.map((value)=>{
                                return <li class="page-item"><a class="page-link" href="#">{value}</a></li>

                            })
                        }
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
                </div>
                {/* Pagination end */}
            </div> 
            }
            </>
        )
    }
}
