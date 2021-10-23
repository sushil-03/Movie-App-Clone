import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'lightblue', alignItem:'center',padding:'1rem'}}>
                <h1 >Movies App</h1>
                <h2 style={{marginTop:'.5rem'}}>Favourite</h2>
                
            </div>
        )
    }
}
