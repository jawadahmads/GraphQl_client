import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { myTheme } from "./theme";
import { graphql } from "cm6-graphql";
import { buildSchema as bs } from "graphql";
import { editorStyling } from "./Style";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "@/store/features/querySlice";
import type { RootState } from "@/store/store";

/** This is the Schema of the Query */
const schema = bs(`
  type User {
    id: ID!
    name: String!
  }
  type Query {
    users: [User]
  }
`);

/** This is the CODE Editor */
function Editor() {
  const query = useSelector((state: RootState) => state.query);

  const dispatch = useDispatch();

  const onChange = useCallback((val: string) => {
    dispatch(setQuery(val));
  }, []);

  return (
    <>
      <CodeMirror
        value={query}
        height="100%"
        extensions={[graphql(), editorStyling]}
        onChange={onChange}
        theme={myTheme}
        style={{
          height: "100%",
        }}
      />
    </>
  );
}
export default Editor;
