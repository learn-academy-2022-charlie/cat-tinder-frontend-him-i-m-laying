import React, { Component } from 'react'
import{ Card, CardTitle, CardText, Col} from 'reactstrap'


export default class DogShow extends Component {
  render() {
    const { dog } = this.props
    // console.log(dog.name)
    return (
  <>
    <div>
      { dog && 
      <Col sm="6">
        <Card body key={dog.id}>
          <CardTitle tag= "h1">Hey! My name is {dog.name}</CardTitle>
            <img src={dog.image} alt="dog" />
          <CardText>I am {dog.age} years old. I enjoy {dog.enjoys}.</CardText>
        </Card>
      </Col>
  }
    </div>
  </>
    )
  } 
}
