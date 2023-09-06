import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components'; // Importa ThemeProvider
import App from "./App";
import store from "./redux/store";
import "./index.css";

const theme = {
  // Define aquí tus variables de tema si es necesario
};

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
