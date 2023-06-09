import "./App.css";
import photo from "../src/photos/Scarecrow.png";

function App() {
  return (
    <div className="App">
      <div id="not-found-div">
        <span id="not-found-span">404 NOT FOUND</span>
      </div>
      <div id="container">
        <img src={photo} id="photo" alt="witcher"></img>
        <div id="box">
          <h1>I have bad news for you</h1>
          <div id="p-box">
            <p>
              The page you are looking for might be removed or is temporarily
              unavailable
            </p>
          </div>
          <div id="button">
            <button id="btn">BACK TO HOMEPAGE</button>
          </div>
        </div>
      </div>
      <div id="footer">Created by EdiCymer - devChallanges.io</div>
    </div>
  );
}

export default App;
