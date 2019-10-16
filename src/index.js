import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import logo from "./logo.png";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
function App() {
  return (
    <div className="App">
      <img src={logo} alt="Logo" />;<h1>hello</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
// Tell Webpack this JS file uses this image
console.log(logo); // /logo.84287d09.png
function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" class="center" />;
}
export default Header;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
ReactDOM.render(<Header />, rootElement);
