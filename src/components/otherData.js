import React from "react";
import "./otherData.css";

function OtherData(props) {
	return (
		<div className={`cont ${props.color}`}>
			<div className="title ">{props.title}</div>
			<div className="value">{props.value}</div>
		</div>
	);
}

export default OtherData;
