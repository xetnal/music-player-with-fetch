import React, { useState } from "react";

export const SongList = ({
	songs,
	onPlay,
	activeSong,
	setActiveSong,
	currentSong,
	setCurrentSong,
}) => {
	// const toggleSelectedSong = (index) => {
	// 	setSongs({ ...songs, activeSong: songs[index] });
	// };
	// const toggleSelectedStyle = (index) => {
	// 	if (songs[index] === songs.activeSong) {
	// 		return "song selected";
	// 	} else return `song`;
	// };

	const songsList =
		!!songs &&
		songs.length > 0 &&
		songs.map((song, index) => {
			return (
				<li
					key={index}
					className={
						"song " + (activeSong === index ? "selected" : "")
					}
					onClick={() => {
						onPlay(song);
						setActiveSong(index);
						setCurrentSong(index);
						// toggleSelectedSong(index);
					}}>
					{song.name}
				</li>
			);
		});

	return (
		<div className="songList">
			<h3 className="text-center">The best audio player in the world</h3>
			<div className="line"></div>
			<ol className="theList">{songsList}</ol>
		</div>
	);
};
