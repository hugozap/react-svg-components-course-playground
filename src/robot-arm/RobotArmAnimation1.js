import React, { Component } from 'react';
import * as scale  from 'd3-scale'
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
				rotationA: Math.random() * 180,
				rotationB: Math.random() * 180,
				rotationC: Math.random() * 180,
			})
		},500);
	}

	render() {

		const transformA = `rotate(${this.state.rotationA}, 63, 312)`
		const transformB = `rotate(${this.state.rotationB}, 63, 218)`
		const transformC = `rotate(${this.state.rotationC}, 63, 127)`
		return (
			<SvgLoader path="/robot-arm.svg" width="500" height="300" viewBox="-126 0 126 600">
				<SvgProxy selector="#a" transform={transformA}/>
				<SvgProxy selector="#b" transform={transformB}/>
				<SvgProxy selector="#c" transform={transformC}/>
			</SvgLoader>
		);
	}
}
