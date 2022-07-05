import React, { Component } from 'react'
import{ Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'

// create a button for 'edit' and a 'save' button when the user is done 
// the input must be valid 

export default class DogEdit extends Component {
  constructor(props) {
this.state = {
  newDog: {
    name: "",
    age: "",
    enjoys: "",
    image: ""
  },
  submitted: false
  }
}
handleChange = (e) => {
  // destructuring form out of state
  let { newDog } = this.state
  newDog[e.target.name] = e.target.value
  // setting state to the updated form content
  this.setState({newDog: newDog})
}
 handleSubmit = ()  => {
  this.props.updateDog(this.state.newDog,this.props.dog.id) 
  this.setState({submitted:true})
 }



handleSubmit = () => {
  // a function call being passed from App.js
  this.props.updateDog(this.state.newDog, this.props.dog.id)
}
render() {
  return (
    <>
    <Form>
  <FormGroup>
  <Label
    for="name">Name:</Label>
    <Input
      type="text"
      name="name"
    />
  </FormGroup>
  <FormGroup>
    <Label for="age">Age</Label>
    <Input
      type="number"
      name="age"
    />
  </FormGroup>
  <FormGroup>
    <Label for="enjoys">Enjoys</Label>
    <Input
      type="text"
      name="enjoys"
    />
  </FormGroup>
  <FormGroup>
    <Label for="image">Image URL</Label>
    <Input
      type="text"
      name="image"
    />
  </FormGroup>

  <Button
  name="submit"
  onClick={this.handleSubmit}
>
  Edit Dog Profile
</Button>
</Form>
 </>   
  )  
} 
}    
//this.state.submitted &&<Redirect to={`/dogshow/${this.props.cat.id}`}







