// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCUPDc8bX97yL2DTu_8UeIFo0FzI1ErwZw',
	authDomain: 'react-disney-plus-app-796b3.firebaseapp.com',
	projectId: 'react-disney-plus-app-796b3',
	storageBucket: 'react-disney-plus-app-796b3.appspot.com',
	messagingSenderId: '922265965237',
	appId: '1:922265965237:web:b881a87ff6bc66c130a4fc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
