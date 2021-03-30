import React, { useCallback, useState } from 'react';


import logoImg from '../../assets/logo.svg';
import NewTransactionModal from '../NewTransactionModal';

import { Container, Content } from './styles';


const Header: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
   
  const handleOpenNewTransactionModal = useCallback(()=>{
    setIsNewTransactionModalOpen(true);
  },[]);

  const handleCloseNewTransactionModal = useCallback(()=>{
    setIsNewTransactionModalOpen(false);
  },[]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dd money" />
        <button type="button" 
        onClick={handleOpenNewTransactionModal}
        >
        Nova transação
        </button>

        <NewTransactionModal
         isOpen={isNewTransactionModalOpen}
         onRequestClose={handleCloseNewTransactionModal}
         />
       
      </Content>
   </Container>
  );
}

export default Header;