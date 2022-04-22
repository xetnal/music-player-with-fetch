import React from "react";

export const SongList = ({ songs, onPlay }) => {
	const songsList = songs.map((song) => {
		return (
			<li key={song.id} className="song" onClick={onPlay}>
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
