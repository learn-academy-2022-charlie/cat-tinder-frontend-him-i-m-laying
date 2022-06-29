// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", ()=>{
    let homeRender
    beforeEach(() => {
      homeRender = shallow(<Home />)
    })
    it("displays a home text in h4", () => {
      const homeHeaderRender = homeRender.find("h4")
      expect(homeHeaderRender.length).toEqual(1)
    })
    it("renders an image", () => {
      const homeImageRender = homeRender.find("img").prop("id", "src")
      expect(homeImageRender).toEqual("home-dog")
     })
  })