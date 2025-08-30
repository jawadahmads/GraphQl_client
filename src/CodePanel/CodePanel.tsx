import {
  ResizablePanel,
  ResizablePanelGroup,
} from "@/ShadcnComps/ui/resizable";
import Handler from "../CodeEditor/Handler";
import Editor from "@/CodeEditor/Editor";
import Output from "./Output";

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
          <ResizablePanel collapsible defaultSize={70} minSize={20}>
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
