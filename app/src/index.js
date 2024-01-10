import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import useAuthentication from "./CustomHooks/useAuthentication";
const root = ReactDOM.createRoot(document.getElementById('root'));
const ConnectedApp = () => {
  const { AuthProvider } = useAuthentication();
  return (
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  )
}

root.render(<ConnectedApp />);