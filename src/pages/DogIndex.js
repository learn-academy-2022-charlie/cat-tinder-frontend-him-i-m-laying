import React, { Component } from 'react'
import{ Card, CardTitle, Col} from 'reactstrap'
import { NavLink } from 'react-router-dom'
export default class DogIndex extends Component {
  render() {
    return (
      <>
      <div>DogIndex</div>
        <h3>Who Let the Dogs out ?</h3>
<br />
<Col sm="6">
  {this.props.dogs.map(dog => {
    return(
      <Card body key={dog.id}>
        <CardTitle>
          <h4>{dog.name}</h4>
        </CardTitle>
      </Card>
    )
  })}
</Col>
      </>

    )
  }
}
