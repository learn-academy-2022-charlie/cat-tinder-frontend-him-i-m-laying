import React, { Component } from 'react'
import './NotFound.css'

export default class NotFound extends Component {
  render() {
    const myStyle ={
      backgroundImage:"url('https://thumbs.dreamstime.com/b/dog-quizzical-expression-question-mark-over-his-head-87722813.jpg')",
      height:'100vh',
      marginTop:'-70px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',

    }
    return (
      <>
      
        
        
        
      <div style= {myStyle}>
         
        <h4 className = "NotFound">This page is Not Found, Please Try again.</h4>
      </div>
    
      
      </>    )
  }
}
