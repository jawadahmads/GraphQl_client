<!-- import SideBar from "../components/SideBar";
import styled from "styled-components";
import HistoryPage from "../pages/HistoryPage";
import DocsPage from "../pages/DocsPage";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Shortcutkey from "../components/ShortcutkeyModel";
import SettingModel from "../components/SettingModel";
import RightPanel from "../panel/RightPanel";
import LeftPanel from "../panel/LeftPanel";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const SpacedDiv = styled.div`
  width: 100%;
  margin: 1rem;
`;

const Divider = styled.div`
  width: 10px;
  height: 100%;
  margin: 1rem;
  border: 2px solid #e20303;
`;

const minWidth = 200;

function Dashboard() {
  const toggleString = useSelector((state: RootState) => state.toggle);

  const [leftWidth, setLeftWidth] = useState<number | undefined>();
  const [separatorXPosition, setSeparatorXPosition] = useState<
    undefined | number
  >(undefined);
  const [dragging, setDragging] = useState(false);

  const onMouseDown = (e: React.MouseEvent): void => {
    setDragging(true);
    setSeparatorXPosition(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent): void => {
    if (dragging && leftWidth && separatorXPosition) {
      const newLeftWidth = leftWidth + e.clientX - separatorXPosition;
      setSeparatorXPosition(e.clientX);
      if (newLeftWidth < minWidth) {
        setLeftWidth(minWidth);
        return;
      }

      setLeftWidth(newLeftWidth);
    }
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  });

  console.log(separatorXPosition);
  return (
    <>
      <StyledDiv>
        <SideBar />
        <div style={{ display: "flex" }}>
          <LeftPanel leftWidth={leftWidth} setLeftWidth={setLeftWidth}>
            <SpacedDiv>
              {toggleString === "docs" && <DocsPage />}
              {toggleString === "history" && <HistoryPage />}
            </SpacedDiv>
          </LeftPanel>
          <Divider onMouseDown={onMouseDown} />
          <RightPanel></RightPanel>
        </div>

        <Shortcutkey />
        <SettingModel />
        <Button>helloo</Button>
      </StyledDiv>
    </>
  );
}

export default Dashboard; -->
