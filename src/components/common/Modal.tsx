import React from 'react'
import styled from 'styled-components';

const Modal = () => {
  return <DimmedLayer>
    <ModalContent />
  </DimmedLayer>
};

const DimmedLayer = styled.section`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  position: absolute;
`;

const ModalContent = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  position: absolute;
  right: 0;
`

export default Modal;
