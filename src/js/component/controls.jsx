import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faForward,
	faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { Player } from "./player.jsx";

export const Controls = ({ onClick, onForward, onBack }) => {
	return (
		<div className="playerControls position-fixed bottom">
			<button className="skip-btn" onClick={onBack}>
				<FontAwesomeIcon icon={faBackward} />
			</button>
			<button className="play-btn" onClick={onClick}>
				<FontAwesomeIcon icon={faPlay} />
			</button>
			<button className="skip-btn" onClick={onForward}>
				<FontAwesomeIcon icon={faForward} />
			</button>
		</div>
	);
};
