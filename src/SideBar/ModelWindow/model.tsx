import styled from "styled-components";
import { createPortal } from "react-dom";
import {
  useEffect,
  useRef,
  type PropsWithChildren,
  type ReactElement,
} from "react";

interface PorpsModel extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  children: ReactElement;
}

export const BackDrop = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  /* background: rgba(255, 255, 255, 0.01);  */
  backdrop-filter: blur(10px);
  z-index: 1000000;
`;

const ModelDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: "flex";
  align-items: "center";
  justify-content: "center";
  z-index: 10000000;
`;

function Modal({ isOpen, onClose, children }: PorpsModel) {
  if (!isOpen) return null;

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (modalRef.current !== null) {
        if (!modalRef.current.contains(e.target)) {
          onClose();
        }
      }
    };
    document.addEventListener("click", (e) => handleOutsideClick(e));
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return createPortal(
    <>
      <ModelDiv ref={modalRef}>
        <div
          style={{
            background: "#27212E",
            borderRadius: "1rem",
            overflow: "hidden",
            border: "1px solid rgba(128, 128, 128, 0.2)",
          }}
        >
          {children}
        </div>
      </ModelDiv>
    </>,
    document.body
  );
}

export default Modal;
