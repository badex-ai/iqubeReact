import React from "react";
import classes from "./state.module.css";

function State(props) {
	return (
		<div className={classes.contState}>
			<div className={classes.search} id={props.state}>
				{props.state}
			</div>
			<div>{props.confirmedCases}</div>
			<div>{props.casesOnAdmission}</div>
			<div>{props.discharged}</div>
			<div>{props.death}</div>
		</div>
	);
}

export default State;
