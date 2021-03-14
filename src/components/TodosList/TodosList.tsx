import { Todo } from "../../interfaces/Todo";
import { StyledTodosList, TodoListItem } from "./styles";

interface TodosListProps {
  todos: Todo[];
}

const TodosList = ({ todos }: TodosListProps) => {
  return (
    <StyledTodosList>
      {todos.map((todo: Todo) => (
        <TodoListItem key={todo.id}>{todo.title}</TodoListItem>
      ))}
    </StyledTodosList>
  );
};

export default TodosList;
