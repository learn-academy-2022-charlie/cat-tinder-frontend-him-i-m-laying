import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DogIndex from './pages/DogIndex'
import DogEdit from './pages/DogEdit'
import DogShow from './pages/DogShow'
import DogNew from './pages/DogNew'
import NotFound from './pages/NotFound'
import mockDogs from './mockDogs'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

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
      <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/DogIndex" component={DogIndex} />
      <Route path="/DogShow" component={DogShow} />
      <Route path="/DogNew" component={DogNew} />
      <Route path="/DogEdit" component={DogEdit} />
      <Route component={NotFound}/>
      </Switch>
      </Router>

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


