import {
  StyledAddTodoForm,
  StyledFormInput,
  StyledFormSubmitButton,
} from "./styles";

const AddTodoForm = () => {
  return (
    <StyledAddTodoForm>
      <StyledFormInput placeholder="add details" type="text" />
      <StyledFormSubmitButton>Add</StyledFormSubmitButton>
    </StyledAddTodoForm>
  );
};

export default AddTodoForm;
