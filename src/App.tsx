import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import TodosList from "./components/TodosList/TodosList";
import { Todo } from "./interfaces/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title,
        completed: false,
      },
    ]);
  };

  return (
    <div className="todos-app">
      <Header>#todo</Header>
      <Navigation />
      <AddTodoForm submitTodoForm={addTodo} />
      <TodosList todos={todos} />
    </div>
  );
}

export default App;
