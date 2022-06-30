import React, { Component } from 'react'
import{ Card, CardTitle, CardText, Col} from 'reactstrap'


export default class DogShow extends Component {
  render() {
    return (
  <>
    <div>
      <Col sm="6">
        <Card body>
          <CardTitle>Hey! My name is {this.props.dog.name}!</CardTitle>
            <img src={this.props.dog.image} alt="dog" />
          <CardText>I am {this.props.dog.age} years old. I enjoy {this.props.dog.enjoys}.</CardText>
        </Card>
      </Col>
    </div>
  </>
    )
  } 
}
