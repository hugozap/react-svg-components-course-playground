import React, { Component } from 'react';
import * as scale  from 'd3-scale'
import { SvgLoader, SvgProxy } from 'react-svgmt';
import { Motion, spring} from 'react-motion';


export default class CircularProgress extends Component {

	constructor(){
		super();
		this.state = {
			pathLength: 0
		}
		this.updateProgressElement = this.updateProgressElement.bind(this);
	}

	updateProgressElement(elem) {
		// We now have a reference to the dom element
		// let's use the path length to create our scale
		// it will be used to map from (0,100) to (0, path length)
		console.log(elem);
		this.scaleMap = scale.scaleLinear()
    	.domain([0, 100])
    	.range([0, elem.getTotalLength()]); 

    	this.setState({
    		pathLength: elem.getTotalLength(),
    	})
	}

	render() {
		// We need to map from 0 - 100 to 0 - path length

		const targetOffset = this.scaleMap ?  this.scaleMap(this.props.value) : 0
		console.log(this.props.value);
		return (
			<SvgLoader path="/circle-progress.svg">
			   <Motion defaultStyle={{offset:0}} style={{offset: spring(targetOffset)}}>
			   {(style)=>{
			   	 return <SvgProxy selector="#progress-circle"
			   	  stroke-dasharray={this.state.pathLength}
			   	  stroke-dashoffset={style.offset}
			   	  onElementSelected={this.updateProgressElement}/>

			   }}
			   </Motion>
			   <SvgProxy selector="tspan">{this.props.value}</SvgProxy>
			</SvgLoader>
		);
	}
}
