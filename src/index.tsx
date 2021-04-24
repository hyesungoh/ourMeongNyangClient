import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import theme from "style/theme";
import GlobalStyle from "style/global";

import Container from "container/Container";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Container />
        <GlobalStyle />
    </ThemeProvider>,
    document.getElementById("root")
);
