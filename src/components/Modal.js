import React from 'react';
import {
  ModalS,
  CloseButton,
  ModalItems,
  DivModal,
  TitleModal,
} from '../styles/ModalStyles';

export function Modal({ isOpen, closeModal, title, children }) {
  if (!isOpen) return null;

  return (
    <DivModal role="dialog" aria-labelledby="modal-title" aria-hidden={!isOpen}>
      <ModalS>
        <ModalItems>
          <CloseButton onClick={closeModal} aria-label="Fechar modal">X</CloseButton>
          <TitleModal id="modal-title">{title}</TitleModal>
        </ModalItems>
        {children}
      </ModalS>
    </DivModal>
  );
}
