import { useDispatch, useSelector } from "react-redux";
import Modal, { BackDrop } from "./model";
import { toggleSetting } from "../../store/features/settingSlice";
import type { RootState } from "../../store/store";
import styled from "styled-components";
import { Button } from "@/components/ui/button";
import { MdClear } from "react-icons/md";

const ContanierDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
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
                <h1
                  style={{
                    marginRight: "10rem",
                    fontWeight: "900",
                    fontSize: "2rem",
                  }}
                >
                  Setting
                </h1>
                <button
                  style={{ marginLeft: "10rem" }}
                  onClick={() => dispatch(toggleSetting())}
                >
                  <MdClear />
                </button>
              </ContanierDiv>
              <ContanierDiv>
                <div>
                  <h1>Theme</h1>
                  <p style={{ fontSize: "0.9rem" }}>
                    Adjust how the interface appears
                  </p>
                </div>
                <div>
                  <Button
                    style={{ marginRight: "0.2rem", padding: "0.5rem" }}
                    variant={"secondary"}
                  >
                    Dark
                  </Button>
                  <Button
                    style={{ marginLeft: "0.2rem", padding: "0.5rem" }}
                    variant={"secondary"}
                  >
                    Light
                  </Button>
                </div>
              </ContanierDiv>
              <ContanierDiv>
                <div>
                  <h1>Clear Storage</h1>
                  <p style={{ fontSize: "0.9rem" }}>
                    Remove all locally stored data and start fresh.
                  </p>
                </div>

                <Button style={{ padding: "0.5rem" }} variant={"secondary"}>
                  clearData
                </Button>
              </ContanierDiv>
              <ContanierDiv>
                <div style={{ marginRight: "2rem" }}>
                  <h1>Presist Headers</h1>
                  <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                    Save headers upon reloading. Only enable if you trust this
                    device
                  </p>
                </div>

                <div style={{ marginLeft: "2rem" }}>
                  <Button
                    style={{ padding: "0.5rem", marginRight: "0.3rem" }}
                    variant={"secondary"}
                  >
                    On
                  </Button>
                  <Button
                    style={{ padding: "0.5rem", marginRight: "0.3rem" }}
                    variant={"secondary"}
                  >
                    Of
                  </Button>
                </div>
              </ContanierDiv>
            </>
          </Modal>
        </BackDrop>
      )}
    </>
  );
}

export default SettingModel;
