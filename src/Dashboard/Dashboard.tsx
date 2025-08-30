import SideBar from "../SideBar/SideBar";
import styled from "styled-components";
import HistoryPage from "../History/HistoryPage";
import DocsPage from "../Docs/DocsPage";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Shortcutkey from "../SideBar/ModelWindow/ShortcutkeyModel";
import SettingModel from "../SideBar/ModelWindow/SettingModel";
import {
  ResizablePanel,
  ResizablePanelGroup,
} from "@/ShadcnComps/ui/resizable";
import { useRef } from "react";
import type { ImperativePanelHandle } from "react-resizable-panels";
import CodePanel from "../CodePanel/CodePanel";
import ResizeableComp from "@/CodeEditor/Handler";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
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
      panel.expand(30);
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
        <div style={{ margin: "1rem", flexGrow: 1 }}>
          <ResizablePanelGroup direction="horizontal">
            {/* left pannel */}
            <ResizablePanel collapsible ref={ref} defaultSize={30} minSize={20}>
              {toggleString === "docs" && <DocsPage />}
              {toggleString === "history" && <HistoryPage />}
            </ResizablePanel>
            {/* handler */}
            <ResizeableComp />
            {/* right pannel */}
            <ResizablePanel
              style={{
                border: "1px solid rgba(128, 128, 128, 0.2)",
                padding: "1rem",
                borderRadius: "1rem",
                width: "100%",
              }}
            >
              <CodePanel />
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
