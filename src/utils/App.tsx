import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import { store } from "../store/store";
import { Provider } from "react-redux";

// -----------------------------Pages------------------------------------

import Dashboard from "../pages/Dashboard";

const theme = {
  bodyBg: "#f5f5f5",
  text: "#333",
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
