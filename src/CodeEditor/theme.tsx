import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

export const myTheme = createTheme({
  theme: "light",
  settings: {
    background: "#27212E",
    backgroundImage: "",
    foreground: "#fbfff3",
    caret: "#ff0000",
    selection: "#8a91991a",
    selectionMatch: "#8a91991a",
    lineHighlight: "#8a91991a",
    gutterBackground: "#27212E",
    gutterForeground: "#ffffff",
  },
  styles: [
    { tag: t.comment, color: "#75715E" }, // gray
    { tag: t.variableName, color: "#17170b" }, // default white
    { tag: [t.string, t.special(t.brace)], color: "#E6DB74" }, // yellow
    { tag: t.number, color: "#AE81FF" }, // purple
    { tag: t.bool, color: "#AE81FF" }, // purple
    { tag: t.null, color: "#AE81FF" }, // purple
    { tag: t.keyword, color: "#F92672" }, // pink/red
    { tag: t.operator, color: "#F92672" }, // pink/red
    { tag: t.className, color: "#A6E22E" }, // green
    { tag: t.definition(t.typeName), color: "#66D9EF" }, // cyan
    { tag: t.typeName, color: "#66D9EF" }, // cyan
    { tag: t.angleBracket, color: "#F92672" }, // pink/red
    { tag: t.tagName, color: "#F92672" }, // pink/red
    { tag: t.attributeName, color: "#A6E22E" }, // green
  ],
});
