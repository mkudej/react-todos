import styled from "styled-components";

export const TodoListItem = styled.li`
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

  &.completed {
    &:before {
      display: flex;
      align-items: center;
      justify-content: center;

      background: #2f80ed;
      color: #fff;

      content: "✓";
    }
  }
`;
export const StyledTodosList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
