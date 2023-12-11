import React, { FC, ComponentType } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.compact.css";

import "./GlobalStyles.css";
import { AppRoutes } from "./Routes";
import { Store } from "./model/Store";
import { StoreProvider } from "./components/StoreContext";

const App: FC<{ store?: Store; Router?: ComponentType }> = ({
  store = new Store(),
}) => {
  return (
    <StoreProvider value={store}>
      <Router>
        <AppRoutes />
      </Router>
    </StoreProvider>
  );
};

export default App;
