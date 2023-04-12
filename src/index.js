import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

serviceWorkerRegistration.register({
    onUpdate: (e) => {
        const { waiting: { postMessage = null } = {}, update } = e;
        if (postMessage) {
            postMessage({ type: "SKIP_WAITING" });
        }
        update().then(() => {
            window.location.reload();
        });
    },
});
