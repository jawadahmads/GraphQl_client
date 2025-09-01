import { useDispatch, useSelector } from "react-redux";
import Modal from "./model";
import { toggleShortcutkey } from "../../store/features/shortcutkey";
import type { RootState } from "../../store/store";
import { BackDrop } from "./model";
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
