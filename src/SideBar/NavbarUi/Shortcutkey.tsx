import { useDispatch } from "react-redux";
import { toggleShortcutkey } from "../../store/features/shortcutkey";
import { MdOutlineAppShortcut } from "react-icons/md";
import { StyledDivUi } from "./styledContainer";
function Shortcut() {
  const dispatch = useDispatch();
  return (
    <StyledDivUi
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        return dispatch(toggleShortcutkey());
      }}
    >
      <MdOutlineAppShortcut size={22} />
    </StyledDivUi>
  );
}

export default Shortcut;
