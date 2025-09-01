import { StyledDivUi } from "./styledContainer";
import { useDispatch } from "react-redux";
import { toggleSetting } from "../../store/features/settingSlice";
import { IoMdSettings } from "react-icons/io";

function Settings() {
  const dispatch = useDispatch();
  return (
    <StyledDivUi
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        return dispatch(toggleSetting());
      }}
    >
      <IoMdSettings size={22} />
    </StyledDivUi>
  );
}

export default Settings;
