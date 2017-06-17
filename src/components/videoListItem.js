import React from 'react';

const VideoListItem = ({video}) => {
	const imgUrl = video.snippet.thumbnails.default.url;

	return (
		<div>
			<li className="list-group-item">
				<div className="video-list media">
					<div className="media-left">
						<img src={imgUrl} className="media-object" />
					</div>
					<div className="media-body">
						<div className="media-heading">{video.snippet.title}</div>
					</div>
				</div>
			</li>
		</div>
	);
}

export default VideoListItem;