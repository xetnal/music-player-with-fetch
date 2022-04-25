import React, { useState } from "react";

export const SongList = ({ songs, onPlay, setSongs }) => {
	const toggleSelectedSong = (index) => {
		setSongs({ ...songs });
	};
	const toggleSelectedStyle = (index) => {
		if (songs[index] === songs.activeSong) {
			return "song selected";
		} else return `song`;
	};

	const songsList = songs.map((song, index) => {
		return (
			<li
				key={index}
				className={`${toggleSelectedStyle(index)} song`}
				onClick={() => {
					onPlay(song);
					toggleSelectedSong(index);
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
