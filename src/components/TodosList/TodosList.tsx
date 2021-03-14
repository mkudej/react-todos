import { Todo } from "../../interfaces/Todo";
import { TodoStatus } from "../../interfaces/TodoStatus";
import { RemoveTodoItem, StyledTodosList, TodoListItem } from "./styles";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import React from "react";

interface TodosListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodoStatus: (id: number) => void;
}

const TodosList = ({ todos, toggleTodoStatus, deleteTodo }: TodosListProps) => {
  const handleRemoveTodo = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    deleteTodo(id);
  };

  return (
    <StyledTodosList>
      {todos.map((todo: Todo) => (
        <TodoListItem
          className={todo.status === TodoStatus.COMPLETED ? "completed" : ""}
          onClick={() => toggleTodoStatus(todo.id)}
          key={todo.id}
        >
          {todo.title}
          {todo.status === TodoStatus.COMPLETED && (
            <RemoveTodoItem onClick={(e) => handleRemoveTodo(e, todo.id)}>
              <TrashIcon />
            </RemoveTodoItem>
          )}
        </TodoListItem>
      ))}
    </StyledTodosList>
  );
};

export default TodosList;
