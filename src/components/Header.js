import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <header>
      <div>
        <h1 class= "Header">Header</h1>
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
