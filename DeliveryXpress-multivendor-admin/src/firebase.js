// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app'
import { getMessaging, isSupported } from 'firebase/messaging'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const initialize = (
  FIREBASE_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MSG_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
) => {
  const firebaseConfig = {
    apiKey: "AIzaSyDs4RDQZBSppvzTsGeRtbu8pz1iYzeo2yY",
    authDomain: "grasshopper-1bd20.firebaseapp.com",
    projectId: "grasshopper-1bd20",
    storageBucket: "grasshopper-1bd20.firebasestorage.app",
    messagingSenderId: "10686462916",
    appId: "1:10686462916:web:2904854444fc42964f4291",
    measurementId: "G-0X2H607NW7"
  }

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig)
  const messaging = getMessaging(app)
  return messaging
}
export const isFirebaseSupported = async() => {
  return await isSupported()
}
