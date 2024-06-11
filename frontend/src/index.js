import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { AuthProvider } from "./customHooks/useAuthentication";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
const ConnectedApp = () => {
  console.log("Getting rendered!")
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

root.render(<ConnectedApp />);