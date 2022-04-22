import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faForward,
	faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { Player } from "./player.jsx";

export const Controls = ({ onClick, onForward, onBack, isPlaying }) => {
	return (
		<div className="playerControls ">
			<button className="skip-btn" onClick={onBack}>
				<FontAwesomeIcon icon={faBackward} />
			</button>
			<button className="play-btn" onClick={onClick}>
				<FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
			</button>
			<button className="skip-btn" onClick={onForward}>
				<FontAwesomeIcon icon={faForward} />
			</button>
		</div>
	);
};
