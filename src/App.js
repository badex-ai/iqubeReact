import "./App.css";
import State from "./components/state";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import OtherData from "./components/otherData";
import Magnifier from "./assets/magnifier";
import Map from "./assets/map";

function App() {
	const [statesInfo, setStatesInfo] = useState([]);
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get("https://covidnigeria.herokuapp.com/api").then((result) => {
			let data = result.data.data;
			let states = result.data.data.states;
			setStatesInfo(states);
			setData(data);
		});
	}, []);

	const search = (event) => {
		event.preventDefault();
		// event.keyCode !== 13

		// if(event.)
		const searchString = event.target.search.value;
		const searchInfo =
			searchString.charAt(0).toUpperCase() + searchString.slice(1);
		console.log(searchInfo);
		let searchId = document.getElementById(searchInfo);
		searchId.scrollIntoView(searchInfo);
		// searchId.classList.add("highlight");
	};

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
			<div>
				<header className="App-header">
					<div className="logo">
						COVID-19
						<Map></Map>
					</div>
					<div className="search_box">
						<form onSubmit={search} className="search">
							<input
								onKeyDown={search}
								name="search"
								placeholder="Search state"
								type="text"
							/>
							<button type="submit">
								<Magnifier></Magnifier>
							</button>
						</form>
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
									color={"ylw"}
									title={"Total Active Cases"}
									value={data.totalActiveCases}
								></OtherData>
								<OtherData
									color={"grn"}
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
									regularly, using a face masks and maintaining social
									distancing.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
