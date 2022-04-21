import propTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";
import { Controls } from "./controls.jsx";
import { SongList } from "./songList.jsx";

export const Player = (props) => {
	const [songs, setSongs] = useState([
		{
			id: 1,
			category: "game",
			name: "Mario Castle",
			url: "files/mario/songs/castle.mp3",
		},
		{
			id: 2,
			category: "game",
			name: "Mario Star",
			url: "files/mario/songs/hurry-starman.mp3",
		},
		{
			id: 3,
			category: "game",
			name: "Mario Overworld",
			url: "files/mario/songs/overworld.mp3",
		},
	]);
	const [isPlaying, setIsPlaying] = useState(false);
	const songUrl = "https://assets.breatheco.de/apis/sound/" + songs[0].url;
	const audioElement = useRef();
	const playSong = () => {
		audioElement.current.play();
		setIsPlaying(true);
	};
	const pauseSong = () => {
		audioElement.current.pause();
		setIsPlaying(false);
	};

	console.log(isPlaying);
	return (
		<div className="playerContainer d-flex justify-content-center flex-column align-items-center">
			<audio src={songUrl} ref={audioElement}></audio>
			<div className="playerContainer">
				<SongList />
				<Controls
					onBack={pauseSong}
					onForward={pauseSong}
					onClick={() => {
						if (isPlaying === false) {
							playSong();
						} else {
							pauseSong();
						}
					}}
					className="position-fixed bottom"
				/>
			</div>
		</div>
	);
};
