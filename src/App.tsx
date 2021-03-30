import React from 'react';
import { GlobalStyle } from './styles/global';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { TransactionProvider } from './hooks/useTransactions';


const App: React.FC = () => {

  return (
    <TransactionProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;