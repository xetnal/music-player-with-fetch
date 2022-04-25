import propTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";
import { Controls } from "./controls.jsx";
import { SongList } from "./songList.jsx";

export const Player = () => {
	// const [songs, setSongs] = useState({
	// 	activeSong: null,
	// 	theSongs: [
	// 		{
	// 			id: 0,
	// 			category: "game",
	// 			name: "Mario Castle",
	// 			url: "files/mario/songs/castle.mp3",
	// 		},
	// 		{
	// 			id: 1,
	// 			category: "game",
	// 			name: "Mario Star",
	// 			url: "files/mario/songs/hurry-starman.mp3",
	// 		},
	// 		{
	// 			id: 2,
	// 			category: "game",
	// 			name: "Mario Overworld",
	// 			url: "files/mario/songs/overworld.mp3",
	// 		},
	// 	],
	// });
	useEffect(() => {
		getData();
	}, []);
	const [songs, setSongs] = useState([]);
	const getData = () => {
		fetch("https://assets.breatheco.de/apis/sound/songs", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				setSongs(data);
			})
			.catch((error) => {
				console.error(error.message);
			});
	};
	let theSong = songs[0];
	console.log(theSong);
	const [currentSong, setCurrentSong] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	console.log(songs[1]);
	const songUrl = `https://assets.breatheco.de/apis/sound/`;

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
		if (currentSong >= songs.length - 1) {
			setCurrentSong(0);
		} else {
			setCurrentSong(currentSong + 1);
		}
		audioElement.current.play();
	};
	const previousSong = () => {
		if (currentSong <= 0) {
			setCurrentSong(songs.length - 1);
		} else {
			setCurrentSong(currentSong - 1);
		}
	};
	// const playClickedSong = () => {
	// 	setCurrentSong(songs.theSongs.id - 1);
	// };

	console.log(isPlaying);
	return (
		<div className="playerContainer d-flex justify-content-center flex-column align-items-center">
			<audio src={songUrl} ref={audioElement}></audio>
			<div className="playerContainer">
				<SongList
					setSongs={setSongs}
					songs={songs}
					onPlay={(song) => {
						setCurrentSong(song.id);
					}}
				/>
				<Controls
					isPlaying={isPlaying}
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
