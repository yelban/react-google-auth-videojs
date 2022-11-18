import { initializeApp } from 'firebase/app';
import {
	browserPopupRedirectResolver,
	getAuth,
	getRedirectResult,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithRedirect,
	signOut,
} from 'firebase/auth';
import {
	child,
	equalTo,
	get,
	getDatabase,
	goOffline,
	once,
	onDisconnect,
	onValue,
	orderByChild,
	// push,
	query,
	ref,
	remove,
	// serverTimestamp,
	set,
	update,
} from 'firebase/database';

import firebaseConfig from './firebase-config';

console.log('%c firebase.js', 'color:#BB0');

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
auth.useDeviceLanguage();

export const db = getDatabase(app);

export const slot = `${process.env.AB_SLOT}`;
console.log('slot', slot);

export const signOutDb = async () => {
	console.log('Ⓐ signOutDb()');

	await signOut(auth);

	return true;
};

export const signInDb = async () => {
	console.log('Ⓐ signInDb()');

	// ***** late in onAuthStateChanged() *****
	// ***** use to hint button is loading *****
	window.sessionStorage.setItem('pending', 1);

	// Sign in using a redirect.
	const provider = new GoogleAuthProvider();

	// You can add additional scopes to the provider:
	// provider.addScope('user_birthday');

	// Start a sign in process for an unauthenticated user.
	await signInWithRedirect(auth, provider, browserPopupRedirectResolver);
};

export const checkPanoerDb = async (uid) => {
	console.log('Ⓐ checkPanoerDb(uid)', uid);

	const pathRef = ref(db, `panoer/${slot}/${uid}`);

	try {
		const snapShot = await get(pathRef);
		const val = snapShot.val();
		// console.log('val', val);
		return val || { level: -1 };
	} catch (err) {
		console.warn('err', err);
		return { level: -1 };
	}
};
