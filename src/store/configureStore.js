import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fb from '../config/fbConfig';
import "firebase/auth";
import "firebase/firestore";

const enhancers = [
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(fb),
  reactReduxFirebase(fb, {
    userProfile: "users",
    useFirestoreForProfile: true,
    attachAuthIsReady: true
  })
];

const reduxDevToolsExtension = window.devToolsExtension;
if (
  process.env.NODE_ENV === "development" &&
  typeof reduxDevToolsExtension === "function"
) {
  enhancers.push(reduxDevToolsExtension());
}

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = compose(...enhancers);

export default function configureStore() {
  return createStore(rootReducer, composedEnhancers);
}