import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import DogIndex from './pages/DogIndex'
import DogEdit from './pages/DogEdit'
import DogShow from './pages/DogShow'
import DogNew from './pages/DogNew'
import NotFound from './pages/NotFound'
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
    fetch("http://localhost:3000/dogs", {
      body: JSON.stringify(newDog),
      headers: {"Content-Type": "application/json"},
      method: "POST"
    })
    .then(response => response.json())
    .then(dogArray => this.readDog())
    .catch(errors => console.log("App.js createDog errors:", errors))
  }
  updateDog = (editDog) => {
    console.log("doggo updated:", editDog)
  }
  deleteDog = (dogId) => {
    console.log("Doggo was deleted", dogId)
  }
  
  
  render() {
    return (
    <Router>
          <Header/>
          <h1>Dog Tinder, a place to catch a bone</h1>
    
      <Switch>
          <Route exact path="/" 
            component={Home} />
          <Route path="/dogindex" 
            render={() => <DogIndex dogs={this.state.dogs} />} />  
          <Route path="/dogshow/:id" 
            render={(props) => {
            let id = props.match.params.id
            let dog = this.state.dogs.find(dog => dog.id == id)
            return <DogShow dog={dog} deleteDog={this.deleteDog}/> 
          }} />
          <Route
            path="/dognew"
            render={(props) => <DogNew 
            createDog={this.createDog} />}
          />
          <Route path="/dogedit" component={DogEdit} />
          <Route component={NotFound}/>
      </Switch>
      <Footer/>    
   </Router>
       
    )
  }
}


