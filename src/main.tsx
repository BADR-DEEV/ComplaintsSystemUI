import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from './app/Store';
import { ToastContainer } from "react-toastify";



  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <ToastContainer />
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
