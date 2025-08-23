import { useDispatch, useSelector } from "react-redux";
import Modal from "../reactPortal/model";
import { toggleShortcutkey } from "../store/features/shortcutkey";
import type { RootState } from "../store/store";
import styled from "styled-components";

const BackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

function Shortcutkey() {
  const modalState = useSelector((state: RootState) => {
    return state.shortcutkey;
  });
  const dispatch = useDispatch();
  return (
    <>
      {!!modalState && (
        <BackDrop>
          <Modal
            isOpen={!!modalState}
            onClose={() => dispatch(toggleShortcutkey())}
          >
            <h1 style={{ color: "black" }}>ShortCutkey</h1>
          </Modal>
        </BackDrop>
      )}
    </>
  );
}

export default Shortcutkey;
