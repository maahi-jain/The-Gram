import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { AuthProvider } from "./customHooks/useAuthentication.js";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
const ConnectedApp = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </React.StrictMode>
  )
}

root.render(<ConnectedApp />);