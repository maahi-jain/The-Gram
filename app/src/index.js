import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./customHooks/useAuthentication";
import { Provider } from "react-redux";
import store from "./store"

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