import React from "react";
import './Intro.css';
import { ReactTyped  } from "react-typed";
//import img from '../port-img.png';


function Intro () {
    return (
        <div className="intro">

            <div className="intro-header">
                <h2>
                    Hey, I'm{" "}
                    <ReactTyped
                        strings={["Jake", "a student", "a developer", "a problem solver"]}
                        typeSpeed={100}
                        loop
                        backSpeed={20}
                        cursorChar=">"
                        showCursor={true}
                    />
                </h2>
            </div>
            <div className="intro-txt">
                <p>I'm a student who can't get enough of the tech world. I'm constantly trying to learn all the latest and greatest developments in the tech space</p>
            </div>
        </div>
    );
}

export default Intro;