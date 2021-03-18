import { useState } from 'react';

import { Header } from './compontents/Header';
import { Dashboard } from './compontents/Dashboard';
import { NewTransactionModal } from './compontents/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import GlobalStyles from './styles/global';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<boolean>(false);

  function handleOpenModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenModal={handleOpenModal} />
      <Dashboard />

      <NewTransactionModal
       isOpen={isNewTransactionModalOpen}
       onRequestClose={handleCloseModal} 
      />
      <GlobalStyles />
    </TransactionsProvider>
  );
}
