import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useRef } from 'react';

import { useAppValue } from '../AppContext';
import { auth, checkPanoerDb, signInDb } from '../Utils/firebase';
import VideoJS from './VideoJS';

console.log('↳ About.jsx');

function Auth() {
	console.log('%c Auth()', 'color:darkorange');

	const { currentUser, setCurrentUser } = useAppValue();

	const playerRef = React.useRef(null);

	const videoJsOptions = {
		autoplay: true,
		controls: true,
		responsive: true,
		fluid: true,
		sources: [
			{
				src: '//commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
				type: 'video/mp4',
			},
		],
	};

	const handlePlayerReady = (player) => {
		playerRef.current = player;

		// You can handle player events here, for example:
		player.on('waiting', () => {
			console.log('player is waiting');
		});

		player.on('dispose', () => {
			console.log('player will dispose');
		});
	};

	const handleBtnLogout = (e) => {
		console.log('handleBtnLogout(e)', e);

		window.sessionStorage.removeItem('pending');

		setCurrentUser(null);
	};

	const handleBtnLogin = (e) => {
		console.log('handleBtnLogin(e)', e);

		signInDb();
	};

	const updateUser = async (user) => {
		console.log('Ⓐ updateUser(user)', user.uid);

		const res = await checkPanoerDb(user.uid);
		console.log('res', res);

		setCurrentUser({
			uid: user.uid,
			displayName: user.displayName,
			email: user.email,
			photoURL: user.photoURL,
			level: res.level,
		});
	};

	useEffect(() => {
		console.log('useEffect(,[]) <Auth>');

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log('onAuthStateChanged()', user);

			if (window.isUpdateCurrentUserTid) {
				clearTimeout(window.isUpdateCurrentUserTid);
			}

			window.isUpdateCurrentUserTid = setTimeout(() => {
				console.log('UpdateCurrentUser');

				if (user) {
					window.sessionStorage.removeItem('pending');

					// setCurrentUser(user);

					updateUser(user);
				} else {
					console.log('not login');

					setCurrentUser(null);
				}
			}, 1000);
		});

		return () => {
			unsubscribe();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		console.log('useEffect(,[currentUser]) <Auth>', currentUser);
	}, [currentUser]);

	return (
		<div>
			<h1>Auth</h1>
			{currentUser && (
				<div>
					<button className='btn' type='button' onClick={handleBtnLogout}>
						logout
					</button>
					<VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
				</div>
			)}
			{!currentUser && (
				<div>
					<button className='btn' type='button' onClick={handleBtnLogin}>
						login {window.sessionStorage.getItem('pending') && '...'}
					</button>
				</div>
			)}
		</div>
	);
}

export default Auth;
