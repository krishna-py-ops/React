# React Readme file
# Step1
 
 Paste the React sdn links in html file so that react will be injected to the app
 --> All the react code is written in the script tag

 # Setting up git 
    --> set up ssh properly
    --> for the problem in git push 
       --> try:

git fetch origin master
git merge origin master
After to wrote this code I received other error: (non-fast-forward)

I write this code:

git fetch origin master:tmp
git rebase tmp
git push origin HEAD:master
git branch -D tmp

# NPM
---> npm is not called as node package manager
---> npm manages packages
---> how to install npm into the project
    ---> npm init
    ---> Give description and entrypoint
    ---> for test command write jest

# About package.json
---> It is used to manage the packages inside the react application
---> it is used to add the dependencies
--> the most important dependecy is Bundler
--> Bundlers bundles the whole programm 
---> Types of bundlers 1.parcel 2.vet 3.webpack

--> Types of dependecies 1.dev dependency 2. normal dependency
# how to install parcel
 --> npm install -D parcel(installing parcel as dev dependency)
 -->  parcel creates node modules file which have all the code the project needs
 --> Note : What is transitive dependencies

 # igniting our app

--> We use parcel to ignite the application
--> Command : npx parcel index.html

# Parcel
- Dev build
- Local Server
- HMR - Hot module replacement
- File Watching algorithm(C++ algorithm)
- Caching - Faster builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Code splitting
- Differential bundling -to support older browsers
- Gives app support for HTTPS
- Tree Shaking
- Different dev and prod bundels

Note : remove the main in the package.json
to bundle the application for prod ready app
Command : npx parcel build index.html

# Scripting in package.json
- Instead of running the command npx parcel index.html we automate by giving alias in the script block
- In package.json "start" : "parcel index.html"
so now to run the application in the terminal we write the cmd as 
--> npx run start


# Episode 3 Laying the foundation
- What is a react element
it has three arguments 
React.createElement("h1",{id:"heading"},"React App");
Here React.createElement create an object
After rendering to the DOM it becomes a HTML element

# JSX 
- JSX is writting html inside the javascript
- JSX is HTML like syntax
- JSX is transpiled before it reaches to JS, this is done by babel dependency of PARCEL 
- "Parcel is a beast"
- Babel converts the JSX code into React.createElement
- JSX => React.createElement => ReactElement-JS object => HTML Element(rendered)
- The attributes in JSX should be in camelcase
- If JSX is in mutliple lines wrap it with braces so that babel can understand

# React Components

// Creating React Element without JSX

//const heading = React.createElement("h1",{id :"heading"},"This is React App!");

//Creating React Element with JSX

const Jsxheading = () => (
<h1 id="heading">This is React Heading using JSX</h1>
);

//React Component
// Class based components -old way
// Functional components - new way

//-Functional component
const HeadingComponent = () => (
    <div id="container">
    <h2>{100+200}</h2>
    <h3>{console.log("This is js inside jsx")}</h3>
    <Jsxheading />
     <h1>Functional component is normal JS function</h1>;
    </div>
);

//way to render the functional component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

# props 
- props are like arguments given to the function


# Hooks
- It is a normal Javascript function with special utilites 
- These are written by Facebook developers
- There are two imp Hooks
    1: useState() - This is used to generate super powerful react variables
    2: useEffect() - 

# How to create State variables
- const[variable] = useState(); -> State variable
- let variable; -> Normal JS variable
# How to pass default value to the State variable
const[variable] = useState([]); - the list of variables
const[variable] = useState([0]); - the variable with the initial value of zero


 # Note - Whenever the state variable changes react re-renders the component  