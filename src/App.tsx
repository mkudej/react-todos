import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import TodosList from "./components/TodosList/TodosList";
import { Todo } from "./interfaces/Todo";
import { TodoService } from "./services/Todo.service";

interface AppProps {
  todoService: TodoService;
}

function App({ todoService }: AppProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filter> 

  const addTodo = (title: string) => {
    todoService.add(title);
    setTodos(todoService.get());
  };

  const deleteTodo = (id: number) => {
    todoService.delete(id);
    setTodos(todoService.get());
  };

  const toggleTodoStatus = (id: number) => {
    todoService.toggleTodoStatus(id);
    setTodos(todoService.get());
  };

  return (
    <div className="todos-app">
      <Header>#todo</Header>
      <Navigation />
      <AddTodoForm submitTodoForm={addTodo} />
      <TodosList
        deleteTodo={deleteTodo}
        toggleTodoStatus={toggleTodoStatus}
        todos={todos}
      />
    </div>
  );
}

export default App;
