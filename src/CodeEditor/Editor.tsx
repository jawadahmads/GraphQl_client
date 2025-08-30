import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { myTheme } from "./theme";
import { graphql } from "cm6-graphql";
import { buildSchema as bs } from "graphql";
import { editorStyling } from "./Style";

const schema = bs(`
  type User {
    id: ID!
    name: String!
  }
  type Query {
    users: [User]
  }
`);

function Editor() {
  const [value, setValue] = React.useState(`query {
  users {
    id
    name
  }
}`);

  const onChange = React.useCallback((val: string) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  return (
    <CodeMirror
      value={value}
      height="100%"
      extensions={[graphql({ schema }), editorStyling]}
      onChange={onChange}
      theme={myTheme}
      style={{
        height: "100%",
      }}
    />
  );
}
export default Editor;
