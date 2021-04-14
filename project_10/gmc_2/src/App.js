import React from "react";
import logo from './logo.svg';
import './App.css';
import spiderJ from './transmetropolitan.jpg';

function App() {
let first_name = "Welcome to Existence/Simulation";
  return (
    <React.Fragment>
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
            <h1 className={"title red"}>{first_name}</h1>
            <br />
            <img src={spiderJ} />
            <br />
            <img src={"/the-matrix.png"} />
        </div>

        <iframe src="https://www.youtube.com/embed/LhOSM6uCWxk"
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        />
    </React.Fragment>
  );
}

export default App;
