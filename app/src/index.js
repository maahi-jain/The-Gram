import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import useAuthentication from "./customHooks/useAuthentication";
import { Provider } from "react-redux";
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById('root'));
const ConnectedApp = () => {
  const { AuthCtx, AuthProvider } = useAuthentication();
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