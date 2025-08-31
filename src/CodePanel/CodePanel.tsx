import { ResizablePanel, ResizablePanelGroup } from "@/Xternals/ui/resizable";
import Handler from "../CodeEditor/Handler";
import Editor from "@/CodeEditor/Editor";
import Output from "./Output";
import RunCode from "@/CodeEditor/RunCode";
import { relative } from "path";

function CodePanel() {
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel
            collapsible
            defaultSize={70}
            minSize={20}
            style={{ position: "relative" }}
          >
            <Editor />
          </ResizablePanel>
          <Handler />

          <ResizablePanel
            style={{
              flex: "1",
              height: "100%",
              position: "relative",
              padding: "1rem",
            }}
          >
            <Output />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}
export default CodePanel;
