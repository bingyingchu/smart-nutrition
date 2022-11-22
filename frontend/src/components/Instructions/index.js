import React from 'react';
import ReactTooltip from "react-tooltip";

const Instructions = () => {
	return (
		<div>
            <h4 data-tip data-for="searchTip">Start Your Search(Hover for instructions):</h4>
            <ReactTooltip id="searchTip" place="right" type="info" effect="solid" wrapper="span">
				<p>What you can do with this search tool:</p>
				<p>1)Type in food of your choices, e.g. fish</p>
				<p>2)Click FAQ to find answers to frequently asked questions</p>
				<p>3)Download a list of resources for more information</p>
			</ReactTooltip>
        </div>
	);
};

export default Instructions;