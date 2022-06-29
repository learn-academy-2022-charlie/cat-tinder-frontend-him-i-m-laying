import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import './Header.css'



export default class Header extends Component {
  render() {
    return (
      <header>
      <div>
        {/* insert nav bar with home, rules, my profile  */}
        <h4 class= "Header">NavBar goes here</h4>
        </div>
      
      
      {/* <NavLink to = '/'>
      </NavLink>
      <NavLink to = '/dogindex'>
        <p>see all dogs</p>
      </NavLink> */}
      </header>
    )
  }
}
