import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import LeftMenu from 'app/components/LeftMenu';
import Map from 'app/components/Map';
import MenuViewer from 'app/components/MenuViewer';
import ProfileButton from 'app/components/TopButtons/profilebutton';

import { useSelector, useDispatch } from 'react-redux';
import { useUserSlice } from 'store/user';
import { isLogined, getUser } from 'store/user/selectors';

import { useHistory } from 'react-router-dom';

import firebase from 'firebase/app';
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqmhY1Hd_2JSKNeFyV7EIN5YGKde9eZMA",
  authDomain: "food-arena-front.firebaseapp.com",
  projectId: "food-arena-front",
  storageBucket: "food-arena-front.appspot.com",
  databaseURL: "https://food-arena-front-default-rtdb.asia-southeast1.firebasedatabase.app/",
  messagingSenderId: "887719948990",
  appId: "1:887719948990:web:4571e01bb684a2240a64ef",
  measurementId: "G-YR02WKFQQY"
};

firebase.initializeApp(firebaseConfig);

export function HomePage() {

  const { actions } = useUserSlice();
  const dispatch = useDispatch();
  const isLogin = useSelector(isLogined);
  const user = useSelector(getUser);

  let history = useHistory();

  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <Helmet>
        <title>Places</title>
        <meta name="description" content="Find THE FOOD!" />
      </Helmet>
      <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
      <div>
        <Map/>
        <LeftMenu/>
        <ProfileButton onClick={() => {
          if(isLogin) {
            history.push('/chat');
          } else {
            const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(googleAuthProvider);
          }
        }}/>
        <MenuViewer/>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user }) => {
            if(isSignedIn) {
              dispatch(actions.doLogin({
                isSignedIn: isSignedIn,
                user: user
              }))
            }
          }}
        </FirebaseAuthConsumer>
      </div>
    </FirebaseAuthProvider>
  );
}
