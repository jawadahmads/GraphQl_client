import { useDispatch, useSelector } from "react-redux";
import Modal, { BackDrop } from "./model";
import { toggleSetting } from "../../store/features/settingSlice";
import type { RootState } from "../../store/store";
import styled from "styled-components";
import { Bold, Italic } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";

const ContanierDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  outline: 1px solid rgba(128, 128, 128, 0.1);
  font-size: 1.5rem;
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
            <>
              <ContanierDiv>
                <h1 style={{ marginRight: "6rem" }}>Setting</h1>
                <button
                  style={{ marginLeft: "6rem" }}
                  onClick={() => dispatch(toggleSetting())}
                >
                  Close
                </button>
              </ContanierDiv>
              <ContanierDiv>
                <h1>Theme</h1>
                <div>
                  <ToggleGroup type="single">
                    <ToggleGroupItem value="bold" aria-label="Toggle bold">
                      <Bold className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="italic" aria-label="Toggle italic">
                      <Italic className="h-4 w-4" />
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </ContanierDiv>
              <ContanierDiv>
                <h1>ClearStorage</h1>
                <button>Clear data</button>
              </ContanierDiv>
              <ContanierDiv>HEY</ContanierDiv>
            </>
          </Modal>
        </BackDrop>
      )}
    </>
  );
}

export default SettingModel;
