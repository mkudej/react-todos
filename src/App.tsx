import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="todos-app">
      <Header />
      <Navigation />
      <AddTodoForm />
    </div>
  );
}

export default App;
