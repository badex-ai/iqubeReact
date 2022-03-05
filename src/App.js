import logo from "./logo.svg";
import "./App.css";
import State from "./components/state";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import OtherData from "./components/otherData";
import Magnifier from "./assets/magnifier";

function App() {
	const [statesInfo, setStatesInfo] = useState([]);
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get("https://covidnigeria.herokuapp.com/api").then((result) => {
			console.log(result.data.data);
			let data = result.data.data;
			let states = result.data.data.states;
			setStatesInfo(states);
			setData(data);
		});
	}, []);

	console.log(statesInfo + " this is the states info");

	let Info = statesInfo.map((state) => {
		return (
			<State
				key={state._id}
				state={state.state}
				confirmedCases={state.confirmedCases}
				casesOnAdmission={state.casesOnAdmission}
				discharged={state.discharged}
				death={state.death}
			></State>
		);
	});

	return (
		<div className="App">
			<header className="App-header">
				<div className="logo">COVID 19</div>
				<div>
					<div>
						<input type="text" />
						<div>
							<Magnifier></Magnifier>
						</div>
					</div>
				</div>
			</header>
			<div className="body">
				<div className="main_cont">
					<div className="headings">
						<div className="head">State</div>
						<div className="head">Confirmed Cases</div>
						<div className="head">Cases On Admission</div>
						<div className="head">Discharged</div>
						<div className="head">Death</div>
					</div>
					<div className="main">{Info}</div>
				</div>

				<div className="side">
					<div className="side_fix">
						<div>
							<OtherData
								color={"org"}
								title={"Total Samples Tested"}
								value={data.totalSamplesTested}
							></OtherData>
							<OtherData
								color={"blu"}
								title={"Total Confirmed Cases"}
								value={data.totalConfirmedCases}
							></OtherData>
							<OtherData
								color={"grn"}
								title={"Total Active Cases"}
								value={data.totalActiveCases}
							></OtherData>
							<OtherData
								color={"ylw"}
								title={"Total Discharged"}
								value={data.discharged}
							></OtherData>
							<OtherData
								color={"rd"}
								title={"Total Deaths"}
								value={data.death}
							></OtherData>
						</div>
						<div className="smalltxt">
							<p>
								*Always adhere to preventive measures such as: washing hands
								regularly, using a face masks and maintaining social distancing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
