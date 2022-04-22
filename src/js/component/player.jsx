import propTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";
import { Controls } from "./controls.jsx";
import { SongList } from "./songList.jsx";

export const Player = () => {
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
	const [currentSong, setCurrentSong] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const songUrl =
		"https://assets.breatheco.de/apis/sound/" + songs[currentSong].url;
	const audioElement = useRef();
	const playSong = () => {
		audioElement.current.play();
		setIsPlaying(true);
	};
	const pauseSong = () => {
		audioElement.current.pause();
		setIsPlaying(false);
	};
	const skipSong = () => {
		if (currentSong >= 2) {
			setCurrentSong(0);
		} else {
			setCurrentSong(currentSong + 1);
		}
		audioElement.current.play();
	};
	const previousSong = () => {
		if (currentSong <= 0) {
			setCurrentSong(2);
		} else {
			setCurrentSong(currentSong - 1);
		}
	};

	console.log(isPlaying);
	return (
		<div className="playerContainer d-flex justify-content-center flex-column align-items-center">
			<audio src={songUrl} ref={audioElement}></audio>
			<div className="playerContainer">
				<SongList />
				<Controls
					onBack={() => {
						previousSong();
						setIsPlaying(false);
					}}
					onForward={() => {
						skipSong();
						setIsPlaying(false);
					}}
					onClick={() => {
						if (isPlaying === false) {
							playSong();
						} else {
							pauseSong();
						}
					}}
				/>
			</div>
		</div>
	);
};
