import 'video.js/dist/video-js.css';

import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';

import { useAppValue } from '../AppContext';

console.log('↳ VideoJS.jsx');

function VideoJS({ options, onReady }) {
	console.log('%c VideoJS()', 'color:darkorange');

	const { currentUser } = useAppValue();

	const videoRef = useRef(null);
	const playerRef = useRef(null);

	useEffect(() => {
		console.log('useEffect(,[]) <VideoJS>');
	}, []);

	useEffect(() => {
		console.log('useEffect(,[currentUser]) <VideoJS>', currentUser);
	}, [currentUser]);

	useEffect(() => {
		console.log('useEffect(,[options, videoRef]) <VideoJS>');

		if (!playerRef.current) {
			const videoElement = document.createElement('video-js');

			videoElement.className = 'videojs-big-play-centered';

			videoRef.current.appendChild(videoElement);

			// eslint-disable-next-line no-multi-assign
			const player = (playerRef.current = videojs(videoElement, options, () => {
				videojs.log('player is ready');
				// eslint-disable-next-line no-unused-expressions
				onReady && onReady(player);
			}));
		} else {
			const player = playerRef.current;

			player.autoplay(options.autoplay);

			player.src(options.sources);
		}
	}, [options, videoRef]);

	useEffect(() => {
		console.log('useEffect(,[playerRef]) <VideoJS>');

		const player = playerRef.current;

		return () => {
			if (player && !player.isDisposed()) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, [playerRef]);

	return (
		<div data-vjs-player>
			<div ref={videoRef} />
		</div>
	);
}

export default VideoJS;
