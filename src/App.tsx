import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import TodosList from "./components/TodosList/TodosList";

function App() {
  return (
    <div className="todos-app">
      <Header />
      <Navigation />
      <AddTodoForm />
      <TodosList />
    </div>
  );
}

export default App;
