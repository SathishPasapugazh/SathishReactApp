import React from "react";
import ReactDom from "react-dom";

const fname= "Sathish";
const lname="M";

ReactDom.render(<div><h1>{`${lname} ${fname}`}</h1><p>Your lucky number is {Math.floor(Math.random()*10)}</p></div>, document.getElementById("root"));