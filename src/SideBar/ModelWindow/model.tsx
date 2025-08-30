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

const ModelDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: "rgba(0, 0, 0, 0.5)";
  display: "flex";
  align-items: "center";
  justify-content: "center";
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
            background: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </ModelDiv>
    </>,
    document.body
  );
}

export default Modal;
