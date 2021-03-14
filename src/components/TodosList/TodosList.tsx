import { Todo } from "../../interfaces/Todo";
import { StyledTodosList, TodoListItem } from "./styles";

interface TodosListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodoStatus: (id: number) => void;
}

const TodosList = ({ todos, toggleTodoStatus }: TodosListProps) => {
  return (
    <StyledTodosList>
      {todos.map((todo: Todo) => (
        <TodoListItem
          className={todo.completed ? "completed" : ""}
          onClick={() => toggleTodoStatus(todo.id)}
          key={todo.id}
        >
          {todo.title}
        </TodoListItem>
      ))}
    </StyledTodosList>
  );
};

export default TodosList;
