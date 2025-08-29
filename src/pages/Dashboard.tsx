import SideBar from "../components/SideBar";
import styled from "styled-components";
import HistoryPage from "../pages/HistoryPage";
import DocsPage from "../pages/DocsPage";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Shortcutkey from "../components/ShortcutkeyModel";
import SettingModel from "../components/SettingModel";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useRef } from "react";
import type { ImperativePanelHandle } from "react-resizable-panels";
import CodePanel from "../panel/CodePanel";
import ResizeableComp from "@/panel/components/ResizeableComp";

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
        <Shortcutkey />
        <SettingModel />
        <SideBar />
        <div style={{ margin: "1rem" }}>
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
                width: "1500px",
              }}
            >
              <CodePanel />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </StyledDiv>
    </>
  );
}

export default Dashboard;
