import React, { Component } from 'react'
import './Home.css'
export default class Home extends Component {
  render() {
    return (
      <>
       <div id="home-container">
       <h4 className = "Home">Home </h4> 
          <img id="home-dog" src={"https://images.unsplash.com/photo-1529472119196-cb724127a98e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60}"}></img>
        </div>
      </>    
    )
  }
}
