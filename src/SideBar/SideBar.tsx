import styled from "styled-components";
import Docs from "./NavbarUi/Docs";
import History from "./NavbarUi/History";
import Refech from "./NavbarUi/Refech";
import Shortcutkey from "./ModelWindow/ShortcutkeyModel";
import Settings from "./NavbarUi/Settings";
const SideDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  outline: 1px solid rgba(128, 128, 128, 0.2);
`;

const NoStyledDiv = styled.div`
  width: 100%;
  display: inline;
`;

function SideBar() {
  return (
    <>
      <SideDiv>
        <NoStyledDiv>
          <Docs />
          <History />
        </NoStyledDiv>
        <NoStyledDiv>
          <Refech />
          <Settings />
          <Shortcutkey />
        </NoStyledDiv>
      </SideDiv>
    </>
  );
}

export default SideBar;
