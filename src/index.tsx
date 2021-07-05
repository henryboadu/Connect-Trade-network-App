import firebase from 'firebase/app';
import 'firebase/auth';
import React, {createContext, FC, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyCX17kJwlGFxoiwq8Fim8dq8fxwm3u_PDs",
    authDomain: "ctnlogin-fbed1.firebaseapp.com",
    projectId: "ctnlogin-fbed1",
    storageBucket: "ctnlogin-fbed1.appspot.com",
    messagingSenderId: "766005756830",
    appId: "1:766005756830:web:1e4e2c073b614be68e8c8f",
    measurementId: "G-VPJETPJWGD"
});

export const auth = firebase.auth();
type User = firebase.User
  
export const UserContext = createContext<User | null>(null);
const UserProvider: FC =({children}) => {
    const [user, setUser] = useState <User | null>(null)

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => setUser(userAuth));
},[])

return <UserContext.Provider value = {user}> {children} </UserContext.Provider>;
};


ReactDOM.render(<UserProvider>
    <App />
</UserProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
