// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import DogShow from './DogShow'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When Show renders", ()=>{
    const dog = {
        id: 1,
        name: "Spike",
        age: 3,
        enjoys: "bones and belly rubs",
        image: "https://images.unsplash.com/photo-1648090561451-d0e58ef8027e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9ncyUyMGNsb3NlJTIwdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=6033743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80"
    }
    let showRender
    beforeEach(() => {
      showRender = shallow(<DogShow dog ={dog} />)
    })
    it("displays text in a card", () => {
      const showDivRender = showRender.find("Card")
      expect(showDivRender.length).toEqual(1)
    }) 
  })