import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import ResizeableComp from "./components/ResizeableComp";
import Editor from "@/panel/components/Editor";

function CodePanel() {
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel collapsible defaultSize={70} minSize={20}>
            <Editor />
          </ResizablePanel>
          <ResizeableComp />
          <ResizablePanel>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              cum, sit dolorem earum fugiat tenetur libero optio at hic,
              asperiores soluta. Temporibus, assumenda voluptatum nihil ducimus
              accusantium porro delectus! Illo.
            </h1>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}

export default CodePanel;
