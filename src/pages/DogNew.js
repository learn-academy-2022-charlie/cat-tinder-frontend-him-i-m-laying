import React, { Component } from 'react'
import{ Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'


export default class DogNew extends Component {
  constructor(props){
    super(props)
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
    let { newDog } = this.state
    newDog[e.target.name] = e.target.value
    this.setState({newDog: newDog})
  }
  handleSubmit = () => {
    this.props.createDog(this.state.newDog)
    this.setState({submitted: true})
  }
  
  render() {
    return (
    <>
    <Form>
    <FormGroup>
      <Label for="name">Name:</Label>
      <Input 
        type="text"
        name="name"
        onChange={this.handleChange}
        value={this.state.newDog.name}
      />
    </FormGroup>

    <FormGroup>
      <Label for="age">Age:</Label>
      <Input 
        type="text"
        name="age"
        onChange={this.handleChange}
        value={this.state.newDog.age}
      />
    </FormGroup>

    <FormGroup>
      <Label for="enjoys">Enjoys:</Label>
      <Input 
        type="text"
        name="enjoys"
        onChange={this.handleChange}
        value={this.state.newDog.enjoys}
      />
    </FormGroup>

    <FormGroup>
      <Label for="image">Insert a Selfie</Label>
      <Input 
        placeholder="need to create an upload box"
        type="text"
        name="image"
        onChange={this.handleChange}
        value={this.state.newDog.image}
      />
    </FormGroup>

    <Button
      name="submit"
      onClick={this.handleSubmit}>
      Create a New Profile
    </Button>
    </Form>
    {this.state.submitted && <Redirect push to="/dogindex" />}
    </>
    )
  } 
}

