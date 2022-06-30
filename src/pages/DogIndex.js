import React, { Component } from 'react'
import{ Card, CardTitle, Col, Button} from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class DogIndex extends Component {
  render() {
    const {dogs} = this.props
    return (
    <>
    <h3>Who Let the Dogs out ?</h3>
    <br />
    <Col sm="6">
    {dogs && dogs.map((dog)=> {
      return(
      <Card body key={dog.id}>
        <CardTitle>
          <h4>{dog.name}</h4>
        </CardTitle>
        <NavLink to={`/dogshow/${dog.id}`}>
          <Button> More Info </Button>
        </NavLink>
      </Card>
      )
      })}
    </Col>
    </>
    )
  }
}
