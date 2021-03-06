create a directory in src called pages, components, and assets. ✅  

create a file called Header.js, Footer.js, Home.js, CatIndex.js, CatShow.js, CatNew.js, CatEdit.js, NotFound.js in the pages directory.✅ 
-- See Trello screen shot 

add a file to src called mockDogs.js and add an array of dog objects.✅ 
-- mock info from syllabus and edited for our needs

add Reactstrap to my application.✅ 
  ```
   This adds the dependencies for Reactstrap and Bootstrap via yarn 
        $ yarn add bootstrap
        $ yarn add reactstrap
  ```
  ```      
    This adds an import to index.js 
        Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'
   ```

    This adds the react-router to the package.json file.
        $ yarn add react-router-dom@5.3.0
```
    This allows us to import routing components to our application.
        import {
        BrowserRouter as Router,
        Route,
        Switch
        }  from 'react-router-dom'
```
use Reactstrap to create the header UI and footer UI.✅ 
```
    create a new header and footer .css and add text justification and color 
    .Footer{
        color:red;
        justify-content: center;}
    .Header{
        color:blue;
        justify-content: center;} 
```
import the header and footer to all the page components.✅ 
```
    insert into the page routes:
    import './Footer.css'
    import './Header.css'
```
add some styling to the Home component.✅ 
```   
    .App {
    color:darkviolet;
    text-align: center;}
```
add routes to be able to navigate manually to all pages.✅ 
```
      <Route exact path="/" component={Home} />
      <Route path="/dogindex" component={DogIndex} />
      <Route path="/dogshow" component={DogShow} />
      <Route path="/dognew" component={DogNew} />
      <Route path="/dogedit" component={DogEdit} />
      <Route component={NotFound}/>
```

Add Enzyme to your application✅ 
```
    yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
    yarn test
```
Add a test file for the Home, Header, Footer, and NotFound components with the test.js extension.✅ 
```
    src > components > Footer.test.js
    src > components > Home.test.js
    src > components > Header.test.js
    src > components > NotFound.test.js 
```
Create a test for each page, checking that the page is rendering by asserting against a single JSX element.✅ 
```
    describe("When Header renders", ()=>{
    let headerRender
    beforeEach(() => {
      headerRender = shallow(<Header />)
    })
    it("displays a header in h4", () => {
      const headerTitleRender = headerRender.find("h4")
      expect(headerTitleRender.length).toEqual(1)
    })
  })
  -----> output: PASS  src/components/Header.test.js
```
make tests more DRY by declaring reusable variables in global scope.✅ 
```
--Use the App.js to call on the separate components and pages for the test 
    --App.js has all the components and pages that were modified 

    describe("when App.js renders to the user, ", ()=> {
    it("it displays a *Element*",() => {
        const appRender = shallow(<App/>)
        const app*Element*Render = appRender.find("*Element*")
        expect(app*Element*Render.length).toEqual(1)
    })
Example:
    describe("When NotFound renders", ()=>{
        let notFoundRender
        beforeEach(() => {
            notFoundRender = shallow(<NotFound />)
        })
        it("displays a not found text in h1", () => {
            const notFoundHeaderRender = notFoundRender.find("h1").text()
            expect(notFoundHeaderRender).toEqual("This page is Not Found, Please Try again.")
        })
    })
```
Create an additional test for the component Home.js that checks for the first img tag and all of its props.✅ 
```
--Added an additional part of the test
     it("renders an image", () => {
      const homeImageRender = homeRender.find("img").prop("id", "src")
      expect(homeImageRender).toEqual("home-dog")
     })
```
Create an additional test for the component Header.js that checks for a tag by its class name to contain some text.✅ 
```
---not complete---
````
pass the mock data in state to my index component.✅ 
```
-- Add to App.js 
    <Route path="/dogindex" render={(props) => <DogIndex dogs={this.state.dogs} />} />  
```
see a page that lists of all the dog names.✅ 
```
-- dogindex 
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
```
 have test coverage on my index component.✅ 
 ```
 it("displays the motto", () => {
      const indexMottoRender = indexRender.find("h3")
      expect(indexMottoRender.length).toEqual(1)
    }) 
```
refactor the show route to pass the param of id for one cat.✅ 
```
    let id = props.match.params.id
    let dog = this.state.dogs.find(dog => dog.id == id)
```
see a page featuring all the information for one cat.✅ 
```
    <CardTitle tag= "h1">Hey! My name is {dog.name}</CardTitle>
        <img src={dog.image} alt="dog" />
    <CardText>I am {dog.age} years old. I enjoy {dog.enjoys}.</CardText>
```
click on a cat name and be taken to a page that shows me all the information about that cat.✅ 
```
    <NavLink to={`/dogshow/${dog.id}`}>
        <Button> More Info </Button>
    </NavLink>
```
As a developer, I have test coverage on my show component.✅ 
```
    it("displays text in a card", () => {
      const showDivRender = showRender.find("Card")
      expect(showDivRender.length).toEqual(1)
    }) 
```
fill out a form to add a new dog.✅ 
```
    <Form>
  <FormGroup>
    <Label for="name">Name</Label>
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
</Form>
```
store the dog object in state.✅ 
```
    this.state = {
        newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
        }
    }
```
pass the cat object to App.js on submit and see the cat object logged in the console.✅ 
```
{name: 'asdf', age: 'dfa', enjoys: 'fasdfas', image: 'asdf'}
age: "dfa"
enjoys: "fasdfas"
image: "asdf"
name: "asdf"
```
be routed to the index page after I submit the new cat form.✅ 
```
{this.state.submitted && <Redirect to="/catindex" />}
```
have test coverage on my new page.✅ 
```
    it("displays the new dog form", () => {
      const newFormRender = newRender.find("Form")
      expect(newFormRender.length).toEqual(1)
    }) 
```





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
