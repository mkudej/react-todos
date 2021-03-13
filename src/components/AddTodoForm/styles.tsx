import styled from "styled-components";

export const StyledAddTodoForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 110px;
  column-gap: 25px;
  margin: 18px 0;
`;
export const StyledFormInput = styled.input`
  border: 1px solid #bdbdbd;
  padding: 0 12px;
  border-radius: 12px;

  font-weight: 400;
  font-size: 14px;
`;
export const StyledFormSubmitButton = styled.button`
  height: 56px;

  color: #fff;
  background: #2f80ed;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border-radius: 12px;

  font-weight: 600;
`;
