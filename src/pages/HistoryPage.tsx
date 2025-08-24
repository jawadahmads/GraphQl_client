import styled from "styled-components";
import { MdClear } from "react-icons/md";
import ListHistory from "../ui/HisotryUi/ListHistory";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "../store/features/historySlice";
import type { RootState } from "../store/store";

const HeaderHistory = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-bottom: 1rem;
`;

export const SpanSpace = styled.span`
  margin: 0 0.2rem;
  cursor: pointer;
  align-self: center;
  justify-self: center;
`;

interface SizeProp {
  size: number;
}

function HistoryPage() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => {
    return state.history;
  });

  function BooleanClear({ size }: SizeProp) {
    if (!!state.length) {
      if (state.some((element) => !element.save)) {
        return (
          <>
            <MdClear size={size} />
          </>
        );
      }
    }
  }

  return (
    <div style={{ margin: "1rem" }}>
      <HeaderHistory>
        <h1>History</h1>
        <SpanSpace onClick={() => dispatch(clearAll())}>
          <BooleanClear size={20} />
        </SpanSpace>
      </HeaderHistory>
      <ListHistory />
    </div>
  );
}

export default HistoryPage;
