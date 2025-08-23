import styled from "styled-components";
import Docs from "../ui/NavbarUi/Docs";
import History from "../ui/NavbarUi/History";
import Refech from "../ui/NavbarUi/Refech";
import Setting from "../ui/NavbarUi/Settings";
import Shortcutkey from "../ui/NavbarUi/Shortcutkey";

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
          <Setting />
          <Shortcutkey />
        </NoStyledDiv>
      </SideDiv>
    </>
  );
}

export default SideBar;
