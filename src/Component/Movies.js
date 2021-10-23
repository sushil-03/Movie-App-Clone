import React, { Component } from 'react'
import axios from 'axios';
export default class Movies extends Component {
    constructor(){
        super();
        this.state={
            hover:'',
            parr:[1], //this is for pagination
            currPage:1,
            movies:[]
        }
    }

    //We use componentdidMount function so that our app wil remain rendering as well as getting api data
    async componentDidMount(){
        //Side effort work means the data that will be loading soon

        const res=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=62d06fc92abf22d0a252da28f2a7f61a&language=en-US&page=${this.state.currPage}`)
        let data=res.data
        this.setState({
            movies:[...data.results]
        })
        console.log('Mounting done');
    }
    changeMovies=async()=>{
        const res=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=62d06fc92abf22d0a252da28f2a7f61a&language=en-US&page=${this.state.currPage}`)
        let data=res.data
        this.setState({
            movies:[...data.results]
        })
    }
    handleRight = ()=>{
        //Editing  page
        let temparr=[]
        for(let i=1;i<=this.state.parr.length+1;i++){
            temparr.push(i);
        }
        this.setState({
            parr:[...temparr],
            currPage:this.state.currPage+1
        },this.changeMovies)
    }
    handleLeft = ()=>{
        //Editing  page
        if(this.state.currPage!=1){
            let temparr=[]
            for(let i=1;i<=this.state.parr.length-1;i++){
                temparr.push(i);
            }
            this.setState({
                parr:[...temparr],
                currPage:this.state.currPage-1
            },this.changeMovies)
        }
        
    }
    handleClick =(val)=>{
        if(val!=this.state.currPage)
            this.setState({
                currPage:val
            },this.changeMovies)

    }
   
    render() {
        console.log('Inside Rendering  ');
        return (
            <>
            {
            this.state.movies.length===0?
                //loader
                <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>:
                //loader end
            <div>
                <h3 className="text-center"><strong>Trending</strong></h3>
                <div className="movies-list">
                    {
                        this.state.movies.map((movieObj)=>{
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
                        <li class="page-item"><a class="page-link" onClick={this.handleLeft}>Previous</a></li>

                        {
                            this.state.parr.map((value)=>{
                                return <li class="page-item"><a class="page-link" onClick={()=>this.handleClick(value )}>{value}</a></li>

                            })
                        }
                        <li class="page-item"><a class="page-link" onClick={this.handleRight}>Next</a></li>
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
