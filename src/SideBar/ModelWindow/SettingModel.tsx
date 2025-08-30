import { useDispatch, useSelector } from "react-redux";
import Modal from "./model";
import { toggleSetting } from "../../store/features/settingSlice";
import type { RootState } from "../../store/store";
import styled from "styled-components";

const BackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

function SettingModel() {
  const modalState = useSelector((state: RootState) => {
    return state.setting;
  });
  const dispatch = useDispatch();
  return (
    <>
      {!!modalState && (
        <BackDrop>
          <Modal
            isOpen={!!modalState}
            onClose={() => dispatch(toggleSetting())}
          >
            <h1 style={{ color: "black" }}>Settings</h1>
          </Modal>
        </BackDrop>
      )}
    </>
  );
}

export default SettingModel;
