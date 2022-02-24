import React, { Component } from "react";
import maskgroup1 from './maskgroup1.png';
import maskgroup2 from './maskgroup2.png';
import maskgroup3 from './maskgroup3.png';

import "./BoxComponent.css";

class BoxComponent extends Component {
	render() {
		return (
			<div className="BoxComponent">
			    <div className="boxheading">Box 1</div>	
                <div className="speaker">
                    <img className = "speakerimg" src = {maskgroup1} alt ='maskgroup1'/>
                    <div className="speakerheading">Speaker 1 </div>
                    <div className="speakertimestamp"> 09:45</div>
                </div>
                <div className="comment">
                    <p>There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa
                        don't look even slightly believable. If you are going to use a passage.</p>
                </div>
                <div className="speaker">
                    <img className = "speakerimg" src = {maskgroup2} alt ='maskgroup2'/>
                    <div  className="speakerheading">Speaker 2 </div>
                    <div className="speakertimestamp"> 06:35</div>
                </div>
                <div className="comment">
                    <p>There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa
                        don't look even slightly believable. If you are going to use a passage.</p>
                </div>
                <div className="speaker">
                    <img className = "speakerimg" src = {maskgroup3} alt ='maskgroup3'/>
                    <div  className="speakerheading">Speaker 3 </div>
                    <div className="speakertimestamp"> 04:30</div>
                </div>
                <div className="commentd">
                    <p>There are many variations of Lorem Ipsum but the majority have suffered alteration There are many variationpassa
                        believable. If you are going to don’t look even slightly believable. If you are going to use a passage.</p>
                </div>
			</div>
		);
	}
}

export default BoxComponent;
