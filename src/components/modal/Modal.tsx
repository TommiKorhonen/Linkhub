import React, { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full backdrop-blur-md  bg-black/50">
      {children}
    </div>
  );
};

export default Modal;
