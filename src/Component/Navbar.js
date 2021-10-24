import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'lightblue', alignItem:'center',padding:'1rem'}}>
            <Link to="/" style={{textDecoration:'none'}}><h1 >Movies App</h1></Link>
            <Link to="/favourites" style={{textDecoration:'none'}}> <h2 style={{marginTop:'.5rem'}}>Favourite</h2></Link>
               
            </div>
        )
    }
}
