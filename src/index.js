import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonsDisplay";
import Loader from "./Loader";

class App extends React.Component {
	state = { lat: null, errorMessage: "" };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ lat: position.coords.latitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}

	displayContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div> Error: {this.state.errorMessage} </div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return (
				<div>
					<SeasonDisplay lat={this.state.lat} />
				</div>
			);
		}
		return <Loader message="please accept user location request" />;
	}

	render() {
		return <div> {this.displayContent()} </div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
