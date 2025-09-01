import { FaHistory } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleHistory } from "../../store/features/toggleSlice";
import { StyledDivUi } from "./styledContainer";

function History() {
  const dispatch = useDispatch();
  return (
    <StyledDivUi
      onClick={() => {
        dispatch(toggleHistory());
      }}
    >
      <FaHistory size={22} />
    </StyledDivUi>
  );
}

export default History;
