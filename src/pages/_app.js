import { createGlobalStyle, ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globals";
import theme from "../styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
