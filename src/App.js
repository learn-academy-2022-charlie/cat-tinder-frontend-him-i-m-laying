import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DogIndex from './pages/DogIndex'
import DogEdit from './pages/DogEdit'
import DogShow from './pages/DogShow'
import DogNew from './pages/DogNew'
import NotFound from './pages/NotFound'
import mockDogs from './mockDogs.js'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // dogs: mockDogs
      dogs: []
    } 
  }

  componentDidMount() {
    this.readDog()
  }
  readDog = () => {
    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(dogArray => this.setState({dogs: dogArray}))
    .catch(errors => console.log("Dog Read Errors:", errors))
  }
  createDog = (newDog) => {
    console.log(newDog)
  }
  render() {
    return (
    <Router>
          <Header/>
          <h1>Welcome To Dog Tinder</h1>
    
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dogindex" render={() => <DogIndex dogs={this.state.dogs} />} />  
          <Route path="/dogshow/:id" render={(props) => {
            let id = props.match.params.id
            let dog = this.state.dogs.find(dog => dog.id == id)
            return <DogShow dog={dog}/> 
          }} />
    
          <Route
            path="/dognew"
            render={(props) => <DogNew createDog={this.createDog} />}
          />
          <Route path="/dogedit" component={DogEdit} />
          <Route component={NotFound}/>
      </Switch>
      <Footer/>    
   </Router>
       
    )
  }
}


