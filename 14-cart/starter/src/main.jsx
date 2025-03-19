import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";

/**
 * Entry Point of the React Application
 *
 * This file is responsible for rendering the React application inside the `root` div.
 *
 * Features:
 * - Wraps the entire application with `AppProvider` to provide global state management.
 * - Uses `React.StrictMode` to help detect potential issues in development.
 * - Uses `ReactDOM.createRoot` for concurrent rendering with React 18+.
 */

// Render the React application into the root DOM element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provide global context to the application */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
