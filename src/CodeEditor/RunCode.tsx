import { createHistory } from "@/store/features/historySlice";
import type { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { type History } from "@/store/features/historySlice";
import { Button } from "@/Xternals/ui/button";

export function RunCode() {
  const query = useSelector((state: RootState) => {
    return state.query;
  });

  const id = Math.floor(Math.random() * 1000000); // random number
  const dispatch = useDispatch();

  function RunQuery() {
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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ whiteSpace: "nowrap" }}>OUTPUT : </h1>
        <Button
          onClick={RunQuery}
          variant={"secondary"}
          style={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            margin: "0 1rem",
          }}
        >
          Run
        </Button>
      </div>
    </>
  );
}

export default RunCode;
