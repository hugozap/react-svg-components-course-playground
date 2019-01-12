import React, { Component } from 'react';
import * as scale  from 'd3-scale'
import {Motion, spring} from 'react-motion';
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default class RobotArmIntervalChange extends Component {

	constructor(){
		super();
		this.state = {
			rotationA: 0,
			rotationB: 0,
			rotationC: 0,
		}
	}

	componentDidMount() {
		this.interval = setInterval(()=>{
			this.setState({
				rotationA: Math.random() * 180 - 90,
				rotationB: Math.random() * 180 - 90,
				rotationC: Math.random() * 180 - 90,
			})
		},500);
	}

	render() {
		return (
			<SvgLoader path="/robot-arm.svg" width="500" viewBox="-300 0 700 600">
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
