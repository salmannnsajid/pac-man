import React, { FC, ComponentType } from 'react';
import 'antd/dist/antd.compact.css';

import './GlobalStyles.css';
import { Store } from './model/Store';
import { StoreProvider } from './components/StoreContext';
import { GamePage } from './pages/GamePage/GamePage';

const App: FC<{ store?: Store; Router?: ComponentType }> = ({
  store = new Store(),
}) => {
  return (
    <StoreProvider value={store}>
      <GamePage />
    </StoreProvider>
  );
};

export default App;
