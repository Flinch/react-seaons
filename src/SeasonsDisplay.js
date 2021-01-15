import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
	Summer: {
		text: "Let's hit the beach!",
		iconName: "sun",
	},

	Winter: {
		text: "Burr, it's chilly",
		iconName: "snowflake",
	},
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "Summer" : "Winter";
	} else {
		return lat > 0 ? "Winter" : "Summer";
	}
};

const SeasonsDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`${iconName} massive icon icon-left`} />
			<h1>{text}</h1>
			<i className={`${iconName} massive icon icon-right`} />
		</div>
	);
};

export default SeasonsDisplay;
