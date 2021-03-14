import { useState } from "react";
import {
  StyledAddTodoForm,
  StyledFormInput,
  StyledFormSubmitButton,
} from "./styles";

interface AddTodoFormProps {
  submitTodoForm: (title: string) => void;
}

const AddTodoForm = ({ submitTodoForm }: AddTodoFormProps) => {
  const [title, setTitle] = useState("");

  const handleTodoTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title) {
      submitTodoForm(title);
      setTitle("");
    }
  };

  return (
    <StyledAddTodoForm onSubmit={handleFormSubmit}>
      <StyledFormInput
        onChange={handleTodoTitleChange}
        value={title}
        placeholder="add details"
        type="text"
      />
      <StyledFormSubmitButton>Add</StyledFormSubmitButton>
    </StyledAddTodoForm>
  );
};

export default AddTodoForm;
