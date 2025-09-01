import { useEffect, useRef } from "react";
import styled from "styled-components";
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css"; // 👈 add a theme

const arr = [
  { id: 1, name: "Alice", age: 29 },
  { id: 2, name: "Bobby Hadz", age: 30 },
  { id: 3, name: "Carl", age: 31 },
  { id: 4, name: "David", age: 32 },
  { id: 4, name: "David", age: 32 },
  { id: 4, name: "David", age: 32 },
  { id: 4, name: "David", age: 32 },
  { id: 4, name: "David", age: 32 },
  { id: 4, name: "David", age: 32 },
  { id: 4, name: "David", age: 32 },
];

const ScrollBarDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  &::-webkit-scrollbar-corner {
    background: #191919;
    border-bottom-right-radius: 50%;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(78, 78, 78, 0.8);
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(120, 120, 120, 0.9);
  }

  &::-webkit-scrollbar-track {
    background: rgba(25, 25, 25, 0.4);
  }
`;

function Output() {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current); // ✅ use this instead
    }
  }, []);

  return (
    <ScrollBarDiv>
      <pre style={{ padding: "1rem", marginTop: "1rem" }}>
        <code
          ref={codeRef}
          className="json"
          style={{ fontFamily: "Fira code" }}
        >
          {JSON.stringify(arr, null, 2)}
        </code>
      </pre>
    </ScrollBarDiv>
  );
}

export default Output;
