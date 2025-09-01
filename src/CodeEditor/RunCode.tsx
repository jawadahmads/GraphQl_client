import { createHistory } from "@/store/features/historySlice";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { type History } from "@/store/features/historySlice";
import { FaPlay } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function RunCode() {
  const query = useSelector((state: RootState) => {
    return state.query;
  });

  const dispatch = useDispatch();

  function RunQuery() {
    const id = Math.floor(Math.random() * 1000000); // random number
    console.log("created");
    const history: History = {
      id: id,
      query: query,
      save: false,
    };
    dispatch(createHistory(history));
  }
  return (
    <>
      <div
        style={{
          position: "sticky",
          zIndex: "10000",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Button
          onClick={RunQuery}
          variant={"secondary"}
          style={{
            borderRadius: "1rem",
            width: "50px",
            height: "50px",
          }}
        >
          <FaPlay />
        </Button>
      </div>
    </>
  );
}

export default RunCode;
