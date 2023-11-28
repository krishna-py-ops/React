{/* <div id = "parent">
        <div id = "child">
            <h1></h1>
            <h2></h2>
        </div>
        <div id = "child2">
            <h1><h1>
            <h2><h2>
    </div> */}

const heading = React.createElement("h1",{id : "heading"},"Hello world From React!!");
    // tag representation using react create element
const parent = React.createElement("div",{id: "parent"},
    [React.createElement("div",{id: "child1"},[
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag")
    ]),
    React.createElement("div",{id: "child2"},[
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag")
    ])]
    //Above we have a array of child elements for the parent id
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
//root.render(parent);
//render method is very useful to put the object into the page