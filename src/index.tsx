import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "App";
import theme from "style/theme";
import GlobalStyle from "style/global";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
        <GlobalStyle />
    </ThemeProvider>,
    document.getElementById("root")
);
