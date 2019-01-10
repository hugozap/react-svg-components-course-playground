import React, { Component } from 'react';
import * as scale  from 'd3-scale'
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default class CustomProgressBar extends Component {

	constructor(){
		super();

		//Save the scale function
		this.scaleMap = scale.scaleLinear()
    	.domain([0, 100])
    	.range([313, 0]); 
	}
	render() {
		const translateYValue = this.scaleMap(this.props.value);
		const transformValue = `translate(0,${translateYValue})`;
		return (
			<SvgLoader path="/bottle.svg">
				<SvgProxy selector="#liquid" transform={transformValue} />
			</SvgLoader>
		);
	}
}
