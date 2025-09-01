import styled from "styled-components";
import { MdClear } from "react-icons/md";
import ListHistory from "./ListHistory";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "@/store/store";
import { clearAll } from "@/store/features/historySlice";

const HeaderHistory = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 600;
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
    <div>
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
