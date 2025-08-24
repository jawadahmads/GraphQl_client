import styled from "styled-components";
import { SpanSpace } from "../../pages/HistoryPage";
import type { History } from "../../store/features/historySlice";
import { IoMdClose } from "react-icons/io";
import { type Dispatch, type SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { editLable } from "../../store/features/historySlice";

const CancelSpace = styled.span`
  margin: 0 0.2rem;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

interface PropsEdit extends History {
  setIsEditId: Dispatch<SetStateAction<number | undefined>>;
}

const autoFocus: (element: HTMLInputElement) => void = (
  element: HTMLInputElement
) => element?.focus();

function ListEdit(obj: PropsEdit) {
  const dispatch = useDispatch();

  function handleForm(formData: any) {
    dispatch(editLable({ id: obj.id, lable: formData.get("lable") }));
    obj.setIsEditId(undefined);
    console.log(formData.get("lable"));
  }

  return (
    <form action={handleForm}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <input ref={autoFocus} type="text" placeholder="lable" name="lable" />
        </div>
        <div
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SpanSpace>
            <button type="submit">save</button>
          </SpanSpace>
          <CancelSpace onClick={() => obj.setIsEditId(undefined)}>
            <IoMdClose />
          </CancelSpace>
        </div>
      </div>
    </form>
  );
}

export default ListEdit;
