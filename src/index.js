import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import PWAPrompt from "react-ios-pwa-prompt";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(
	<React.StrictMode>
		<App />
		<PWAPrompt
			copyTitle="Install to your Device"
			copyAddHomeButtonLabel="Add to Home Screen"
			promptOnVisit={1}
			timesToShow={3}
			copyBody="This website has app functionality. Add it to your home screen to use it in fullscreen and while offline."
			copyClosePrompt="Close"
			permanentlyHideOnDismiss={false}
		/>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
