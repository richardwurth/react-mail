import React from "react";
import './hover.css';

export default class MessageLink extends React.Component {


	render() {

		const styles= this.getStyles();

		return (
			<div style={ styles.wrapper } className="wrapper">
				<h3>{ this.props.name }</h3>

				{ this.props.email }
			</div>
		);
	}




	// 	changeStyle() {
	// 		return {
	// 		  test : {
	// 			fontSize : 28
	// 		}
	// 	}
	// }

	getStyles() {
		return {
			wrapper: {
				alignItems: "baseline"
				, border: "1px solid #e0e0e0"
				, borderRadius: 8
				, display: "flex"
				, justifyContent: "space-between"
				, margin: 10
				, padding: 10
				, width: "95%"
				, transition: "all .3s"
			}
			}
		}
	}
