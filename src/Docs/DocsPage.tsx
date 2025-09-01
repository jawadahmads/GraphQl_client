import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { Bold, Italic } from "lucide-react";
import styled from "styled-components";

const HeaderDocs = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 600;
`;

function DocsPage() {
  return (
    <>
      <HeaderDocs>
        <div>Docs</div>
        <div>
          <ToggleGroup type="single">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </HeaderDocs>
    </>
  );
}

export default DocsPage;
