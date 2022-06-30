import React, { Component } from 'react'
import{ Card, CardTitle, CardText, Col} from 'reactstrap'
export default class DogShow extends Component {
  render() {
    console.log(this.props.dog)
    return (
      <>
      {/* <NavLink to={`/dogshow/${dog.id}`}>
                    {dog.name}
                    </NavLink> */}
      <h3>One Dog</h3>
      <div>
      <Col sm="6">
  <Card body>
    <CardTitle>Hi, my name is {this.props.dog.name}!</CardTitle>
    <img src={this.props.dog.image} alt="adorable cat" />
    <CardText>I am {this.props.dog.age} years old. I enjoy  {this.props.dog.enjoys}.</CardText>
  </Card>
</Col>
      </div>
      </>    )
  }
}
