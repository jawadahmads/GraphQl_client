import Handler from "../CodeEditor/Handler";
import Editor from "@/CodeEditor/Editor";
import Output from "./Output";
import RunCode from "@/CodeEditor/RunCode";
import { ResizablePanel, ResizablePanelGroup } from "@/Xternals/ui/resizable";

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
              height: "100%",
              position: "relative",
              padding: "1rem",
            }}
          >
            <RunCode />
            <Output />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}
export default CodePanel;
