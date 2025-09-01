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
      </HeaderDocs>
    </>
  );
}

export default DocsPage;
