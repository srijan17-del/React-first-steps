
const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"h1 Tag")))

// const heading = React.createElement("h1",{id:"heading"},"Hellew React!")//this heading is an object
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)
    console.log(parent)