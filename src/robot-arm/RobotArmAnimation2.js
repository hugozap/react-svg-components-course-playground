import React, { Component } from 'react';
import * as scale  from 'd3-scale'
import {Motion, spring} from 'react-motion';
import { SvgLoader, SvgProxy } from 'react-svgmt';


  const URL = '/macarena.mp3';
    
    
  let yodelBuffer;

  
    

  function play(audioBuffer, cb) {
  	const context = new AudioContext();
  	window.fetch(URL)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
    .then(audioBuffer => {
      yodelBuffer = audioBuffer;
        const source = context.createBufferSource();
	    source.buffer = audioBuffer;
	    source.connect(context.destination);
	    source.start();
	    cb();
    });


  }


export default class RobotArmIntervalChange extends Component {

	constructor(){
		super();
		this.state = {
			rotationA: 0,
			rotationB: 0,
			rotationC: 0,
			dance: true,
			angle: 10,
		}
		this.startDance = this.startDance.bind(this);
	}

	componentDidMount() {
		this.interval = setInterval(()=>{

			this.state.dance && this.setState({
				rotationA: Math.random() * this.state.angle - this.state.angle/2,
				rotationB: Math.random() * this.state.angle - this.state.angle/2,
				rotationC: Math.random() * this.state.angle - this.state.angle/2,
			})
		},500);
	}

	startDance() {
		this.setState({
			dance: true
		})

		play(yodelBuffer, ()=>{
			this.setState({
				angle: 180
			})
		});

	}

	render() {
		return (
			<SvgLoader onClick={this.startDance} path="/robot-arm.svg" width="500" height="600" viewBox="-250 0 600 500">
			    <Motion defaultStyle={{angle: 0}} style={{angle: spring(this.state.rotationA)}}>
			    	{
			    		(val) => {
							const transform = `rotate(${val.angle}, 63, 312)`
						    return <SvgProxy selector="#a" transform={transform}/>
			    		}
			    	}
			    </Motion>
				<Motion defaultStyle={{angle: 0}} style={{angle: spring(this.state.rotationB)}}>
			    	{
			    		(val) => {
							const transform = `rotate(${val.angle}, 63, 218)`
						    return <SvgProxy selector="#b" transform={transform}/>
			    		}
			    	}
			    </Motion>
			    <Motion defaultStyle={{angle: 0}} style={{angle: spring(this.state.rotationC)}}>
			    	{
			    		(val) => {
							const transform = `rotate(${val.angle}, 63, 127)`
						    return <SvgProxy selector="#c" transform={transform}/>
			    		}
			    	}
			    </Motion>
			</SvgLoader>
		);
	}
}
