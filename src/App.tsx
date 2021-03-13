import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import TodosList from "./components/TodosList/TodosList";

function App() {
  return (
    <div className="todos-app">
      <Header>#todo</Header>
      <Navigation />
      <AddTodoForm />
      <TodosList />
    </div>
  );
}

export default App;
