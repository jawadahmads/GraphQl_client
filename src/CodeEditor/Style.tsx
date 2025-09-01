import { EditorView } from "@uiw/react-codemirror";

export const editorStyling = EditorView.theme({
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
  },

  ".cm-scroller::-webkit-scrollbar-thumb:hover": {
    background: "rgba(120, 120, 120, 0.9)" /* hover effect */,
  },

  ".cm-scroller::-webkit-scrollbar-track": {
    background: "rgba(25, 25, 25, 0.4)",
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
    borderRadius: "0.5rem",
  },

  ".cm-gutterElement.cm-activeLineGutter": {
    backgroundColor: "#27212E !important",
  },

  ".cm-gutter.cm-foldGutter": {
    display: "none",
  },
});
