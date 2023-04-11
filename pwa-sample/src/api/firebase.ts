// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const api_key = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const auth_domain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const project_id = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storage_bucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messaging_sender_id =
  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const app_id = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
const measurement_id = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;
const vapid_key = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: api_key,
  authDomain: auth_domain,
  projectId: project_id,
  storageBucket: storage_bucket,
  messagingSenderId: messaging_sender_id,
  appId: app_id,
  measurementId: measurement_id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const fetchToken = async (setToken: (token: string | null) => void) => {
  try {
    const currentToken = await getToken(messaging, { vapidKey: vapid_key });
    if (currentToken) {
      setToken(currentToken);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  } catch (err) {
    console.log("An error occurred while retrieving token. ", err);
  }
};
