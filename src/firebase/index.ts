import firebase from "firebase/app";
import "firebase/storage";

import { firebaseConfig } from "config/config";

firebase.initializeApp(firebaseConfig);

export const firebaseInstance: typeof firebase = firebase;
export const storageService: firebase.storage.Storage = firebase.storage();
