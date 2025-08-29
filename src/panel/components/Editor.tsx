import React from "react";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";

const myTheme = createTheme({
  theme: "light",
  settings: {
    background: "#27212E",
    backgroundImage: "",
    foreground: "#75baff",
    caret: "#ff0000",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#8a91991a",
    gutterBackground: "#27212E",
    gutterForeground: "#ffffff",
  },
  styles: [
    { tag: t.comment, color: "#787b8099" },
    { tag: t.variableName, color: "#0080ff" },
    { tag: [t.string, t.special(t.brace)], color: "#5c6166" },
    { tag: t.number, color: "#5c6166" },
    { tag: t.bool, color: "#5c6166" },
    { tag: t.null, color: "#5c6166" },
    { tag: t.keyword, color: "#5c6166" },
    { tag: t.operator, color: "#5c6166" },
    { tag: t.className, color: "#5c6166" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "#5c6166" },
    { tag: t.angleBracket, color: "#5c6166" },
    { tag: t.tagName, color: "#5c6166" },
    { tag: t.attributeName, color: "#5c6166" },
  ],
});

const largeTextTheme = EditorView.theme({
  // scroll bar
  ".cm-scroller::-webkit-scrollbar-thumb": {
    background: "rgba(78, 78, 78, 0.8)" /* instead of quoted hex + opacity */,
    borderRadius: "25px",
  },

  "::-webkit-scrollbar-corner": {
    background: "#191919",
    borderBottomRightRadius: "50%",
  },

  ".cm-scroller::-webkit-scrollbar": {
    width: "7px",
    height: "7px",
    margin: "0.4rem",
    borderRadius: "2px",
  },

  ".cm-scroller::-webkit-scrollbar-thumb:hover": {
    background: "rgba(120, 120, 120, 0.9)" /* hover effect */,
  },

  ".cm-scroller::-webkit-scrollbar-track": {
    backgroundColor: "#191919",
    opacity: "10%",
  },

  // content
  ".cm-content": {
    fontSize: "22px",
    lineHeight: "1.7",
    fontFamily: '"Fira Code", Monaco, Consolas, monospace',
    padding: "1rem",
  },

  ".cm-gutters": {
    border: "none",
    marginTop: "0.5rem",
  },

  ".cm-lineNumbers": {
    fontSize: "22px",
  },

  ".cm-editor": {
    /* our container wrapper for Codemirror instance */
    flex: "1" /* expand to the maximum */,
    height: "100%",
    position: "relative" /* needed for child component .cm-scroller */,
    fontSize: "22px",
  },

  ".cm-scroller": {
    position: "absolute !important",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    overflowY: "auto",
  },

  ".cm-activeLine.cm-line": {
    borderRadius: "1rem",
  },

  ".cm-gutterElement.cm-activeLineGutter": {
    backgroundColor: "#27212E !important",
  },

  ".cm-gutter.cm-foldGutter": {
    display: "none",
  },
});

function Editor() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: string) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  return (
    <CodeMirror
      value={value}
      height="100%"
      extensions={[javascript({ jsx: true }), largeTextTheme]}
      onChange={onChange}
      theme={myTheme}
      style={{
        height: "100%",
      }}
    />
  );
}
export default Editor;
