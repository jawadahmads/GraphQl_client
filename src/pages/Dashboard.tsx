import SideBar from "../components/SideBar";
import styled from "styled-components";
import HistoryPage from "../pages/HistoryPage";
import DocsPage from "../pages/DocsPage";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Shortcutkey from "../components/ShortcutkeyModel";
import SettingModel from "../components/SettingModel";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const SpacedDiv = styled.div`
  width: 100%;
  margin: 1rem;
`;

function Dashboard() {
  const toggleString = useSelector((state: RootState) => state.toggle);

  return (
    <>
      <StyledDiv>
        <SideBar />
        <SpacedDiv>
          {toggleString === "docs" && <DocsPage />}
          {toggleString === "history" && <HistoryPage />}
        </SpacedDiv>
        <Shortcutkey />
        <SettingModel />
      </StyledDiv>
    </>
  );
}

export default Dashboard;
