import { BsStar } from "react-icons/bs";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { SpanSpace } from "../../pages/HistoryPage";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { BsStarFill } from "react-icons/bs";
import {
  toggleSave,
  deleteHistory,
  editLable,
} from "../../store/features/historySlice";

function ListHistory() {
  const state = useSelector((state: RootState) => {
    return state.history;
  });

  const dispatch = useDispatch();

  return (
    <div>
      {state.map((obj) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            key={obj.id}
          >
            <div>{obj.lable ? obj.lable : obj.query}</div>
            <div>
              <SpanSpace onClick={() => dispatch(deleteHistory(obj.id))}>
                <MdDeleteForever />
              </SpanSpace>
              <SpanSpace
                onClick={() =>
                  dispatch(editLable({ id: obj.id, lable: "hello" }))
                }
              >
                <MdEdit />
              </SpanSpace>
              <SpanSpace onClick={() => dispatch(toggleSave(obj.id))}>
                {obj.save ? <BsStarFill /> : <BsStar />}
              </SpanSpace>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListHistory;
