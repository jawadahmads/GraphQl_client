import { useEffect, useRef } from "react";
import styled from "styled-components";

const arr = [
  { id: 1, name: "Alice", age: 29 },
  { id: 2, name: "Bobby Hadz", age: 30 },
  { id: 3, name: "Carl", age: 31 },
  { id: 3, name: "Carl", age: 31 },
  { id: 3, name: "Carl", age: 31 },
  { id: 3, name: "Carl", age: 31 },
  { id: 3, name: "Carl", age: 31 },
  { id: 3, name: "Carl", age: 31 },
  { id: 3, name: "Carl", age: 31 },
  { id: 3, name: "Carl", age: 31 },
  { id: 3, name: "Carl", age: 31 },
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
    background: rgba(78, 78, 78, 0.8); /* instead of quoted hex + opacity */
    border-radius: 25px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(120, 120, 120, 0.9); /* hover effect */
  }

  &::-webkit-scrollbar-track {
    background: rgba(25, 25, 25, 0.4);
  }
`;

function Output() {
  const ref = useRef<HTMLPreElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = JSON.stringify(arr, null, 4);
    }
  }, [ref]);
  return (
    <ScrollBarDiv>
      <pre ref={ref} style={{ padding: "1rem" }}></pre>
    </ScrollBarDiv>
  );
}

export default Output;
