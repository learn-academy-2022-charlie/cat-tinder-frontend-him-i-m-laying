import React, { Component } from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home'
import DogIndex from './pages/DogIndex'
import DogShow from './pages/DogShow'
import DogNew from './pages/DogNew'
import mockDogs from './mockDogs'

// class App extends Component{
//   



export default class App extends Component {
  constructor(props){
        super(props)
        this.state = {
          dogs: mockDogs
        }
      }
  render() {
    return (
      <> 
      <Header/>
      <h1>Welcome To Dog Tinder</h1>
      <Home/>
      <DogIndex/> 
      <DogShow/>
      <DogNew/>
      <Footer/>
      </>
    )
  }
}


