import { SiGoogledocs } from "react-icons/si";
import { useDispatch } from "react-redux";
import { toggleDocs } from "../../store/features/toggleSlice";
import { StyledDivUi } from "./styledContainer";

function Docs() {
  const dispatch = useDispatch();

  return (
    <StyledDivUi onClick={() => dispatch(toggleDocs())}>
      <SiGoogledocs size={30} />
    </StyledDivUi>
  );
}

export default Docs;
