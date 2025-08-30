import { BsStar } from "react-icons/bs";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { SpanSpace } from "./HistoryPage";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { BsStarFill } from "react-icons/bs";
import { toggleSave, deleteHistory } from "../store/features/historySlice";
import { useState } from "react";
import ListEdit from "./ListEdit";

function ListHistory() {
  const state = useSelector((state: RootState) => {
    return state.history;
  });
  const [isEditId, setIsEditId] = useState<number>();
  const dispatch = useDispatch();

  return (
    <div>
      {state.map((obj) => {
        if (isEditId === obj.id) {
          return (
            <ListEdit
              key={obj.id}
              id={obj.id}
              lable={obj.lable}
              query={obj.query}
              save={obj.save}
              setIsEditId={setIsEditId}
            />
          );
        }

        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
            key={obj.id}
          >
            <div style={{ whiteSpace: "nowrap" }}>
              {obj.lable ? obj.lable : obj.query}
            </div>
            <div style={{ display: "flex" }}>
              <SpanSpace onClick={() => dispatch(deleteHistory(obj.id))}>
                <MdDeleteForever />
              </SpanSpace>
              <SpanSpace onClick={() => setIsEditId(obj.id)}>
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
