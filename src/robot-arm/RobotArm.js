import React, { Component } from 'react';
import * as scale  from 'd3-scale'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default class RobotArm extends Component {

	constructor(){
		super();
	}

	render() {

		const transformA = `rotate(45, 63, 312)`
		const transformB = `rotate(45, 63, 218)`
		const transformC = `rotate(45, 63, 127)`
		return (
			<SvgLoader path="/robot-arm.svg" width="500">
				<SvgProxy selector="#a" transform={transformA}/>
				<SvgProxy selector="#b" transform={transformB}/>
				<SvgProxy selector="#c" transform={transformC}/>
			</SvgLoader>
		);
	}
}
