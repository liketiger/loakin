import React from 'react'
import styled from 'styled-components';
import { useAppDispatch } from '../../utils/RTKhooks';
import { modalActions } from '../../store/modal';

const Modal = () => {
  const dispatch = useAppDispatch();

  const closeModalHandler = () => dispatch(modalActions.toggleModal());

  return <DimmedLayer onClick={closeModalHandler}>
    <ModalContent onClickCapture={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}>
      준비중...
    </ModalContent>
  </DimmedLayer>
};

const DimmedLayer = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
`;

const ModalContent = styled.div`
  width: 50vw;
  height: 100%;
  background-color: white;
  margin-left: auto;
`

export default Modal;
