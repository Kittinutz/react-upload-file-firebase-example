import * as firebase from 'firebase';

const config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;