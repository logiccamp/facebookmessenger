import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

var firebaseConfig = {
        apiKey: "AIzaSyC0rT2xQ5Neh0codEWmdRx9s_ItPD4vPMs",
        authDomain: "fbmesclone.firebaseapp.com",
        projectId: "fbmesclone",
        storageBucket: "fbmesclone.appspot.com",
        messagingSenderId: "990455085212",
        appId: "1:990455085212:web:2ae015496d8a6c85aa1559",
        measurementId: "G-YJK26HSF0E"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);



export default db;











// import { initializeApp } from "firebase/app";
// import {getAnalytics} from 'firebase/analytics'
// import {getFirestore} from 'firebase/firestore/lite'

// const firebaseApp =     initializeApp ({
//         apiKey: "AIzaSyC0rT2xQ5Neh0codEWmdRx9s_ItPD4vPMs",
//         authDomain: "fbmesclone.firebaseapp.com",
//         projectId: "fbmesclone",
//         storageBucket: "fbmesclone.appspot.com",
//         messagingSenderId: "990455085212",
//         appId: "1:990455085212:web:2ae015496d8a6c85aa1559",
//         measurementId: "G-YJK26HSF0E"
// })

// const db = getFirestore(firebaseApp);

// export default db;
