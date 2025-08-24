import SideBar from "../components/SideBar";
import styled from "styled-components";
import HistoryPage from "../pages/HistoryPage";
import DocsPage from "../pages/DocsPage";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Shortcutkey from "../components/ShortcutkeyModel";
import SettingModel from "../components/SettingModel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useRef } from "react";
import type { ImperativePanelHandle } from "react-resizable-panels";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

function Dashboard() {
  const toggleString = useSelector((state: RootState) => state.toggle);

  const ref = useRef<ImperativePanelHandle>(null);

  const collapsePanel = () => {
    const panel = ref.current;
    if (panel) {
      panel.collapse();
    }
  };

  const setPanelWidth = () => {
    const panel = ref.current;
    if (panel) {
      panel.expand(50);
    }
  };
  if (toggleString === "") {
    collapsePanel();
  } else {
    setPanelWidth();
  }

  return (
    <>
      <StyledDiv>
        <SideBar />
        <div style={{ margin: "1rem" }}>
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel
              collapsible
              ref={ref}
              defaultSize={50} // 30% width
              minSize={20}
            >
              {toggleString === "docs" && <DocsPage />}
              {toggleString === "history" && <HistoryPage />}
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  margin: "1rem",
                  flexGrow: "1",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                rerum repellat! Quam alias tenetur vero natus, autem error est.
                Ad rerum quaerat eos. Incidunt architecto nulla iure expedita
                omnis dicta?
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        <Shortcutkey />
        <SettingModel />
      </StyledDiv>
    </>
  );
}

export default Dashboard;
