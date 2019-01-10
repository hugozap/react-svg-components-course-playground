import React, { Component } from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default class CoolMap extends Component {
	render() {
	const selector = `*[cc="${this.props.selectedCountry}"]`

		return (
			<SvgLoader path="/map.svg">
				<SvgProxy selector="[cc]" fill="white"/>
				<SvgProxy selector={selector} fill="red"/>
			</SvgLoader>
		);
	}
}