import { ReactNode } from "react";
import styled from "styled-components";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <StyledModal className="fixed z-10 top-0 left-0 w-full h-full backdrop-blur-md  bg-black/50">
      {children}
    </StyledModal>
  );
};

export default Modal;

const StyledModal = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(12px);
  background: rgba(0, 0, 0, 0.5);
`;
