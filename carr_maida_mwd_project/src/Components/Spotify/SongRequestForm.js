import React from "react";

/* STATELESS CHILD COMPONENT */
const SongRequestForm = ({ song, onChange, onSubmit }) => {
  return (
    <div>
    	<hr />
      	This is the form for requesting a new song
      	<form onSubmit={onSubmit} autoComplete="off">
			<div className="form-group">
				<label>Song Title: </label>
				<br />
				<input
					type="text"
					className="form-control"
					id="song-name-input"
					value={song.song_title}
					onChange={onChange}
					name="song_title"
					placeholder="Love Story"
					required
				/>
			</div>
			<div className="form-group">
				<label>Artist: </label>
				<br />
				<input
					type="text"
					className="form-control"
					id="song-artist-input"
					value={song.song_artist}
					onChange={onChange}
					name="song_artist"
					placeholder="T Swizzle"
					required
				/>
			</div>
			
			<div className="form-group">
				<button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
					Submit
				</button>
			</div>
		</form>
	</div>
	);
};

export default SongRequestForm;



