import styled from "styled-components";

const TodoListItem = styled.li`
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-gap: 10px;
  align-items: center;

  font-weight: 600;
  font-size: 18px;

  cursor: pointer;
  user-select: none;

  & + & {
    margin-top: 27px;
  }

  &:before {
    display: block;
    width: 24px;
    height: 24px;

    border: 1px solid #828282;
    border-radius: 4px;

    content: "";
  }
`;

const StyledTodosList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TodosList = () => {
  return (
    <StyledTodosList>
      <TodoListItem>Item #1</TodoListItem>
      <TodoListItem>Item #2</TodoListItem>
      <TodoListItem>Item #3</TodoListItem>
      <TodoListItem>Item #4</TodoListItem>
    </StyledTodosList>
  );
};

export default TodosList;
