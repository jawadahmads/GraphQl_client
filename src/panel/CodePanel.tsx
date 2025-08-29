import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import ResizeableComp from "./components/ResizeableComp";
import Editor from "@/panel/components/Editor";
import Output from "./components/Output";

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
          <ResizeableComp />
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
