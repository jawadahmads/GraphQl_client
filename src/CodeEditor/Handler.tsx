import { ResizableHandle } from "@/Xternals/ui/resizable";
import { useState } from "react";

function Handler() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <ResizableHandle
        style={{
          width: "5px",
          margin: "0.4rem",
          backgroundColor: "white",
          height: "25%",
          position: "relative",
          top: "35%",
          opacity: isHovered ? "50%" : "10%",
          transition: "all",
          transitionDuration: "50ms",
          borderRadius: "2px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </>
  );
}

export default Handler;
