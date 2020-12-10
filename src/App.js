import logo from "./logo.svg";
import "./App.css";
import { TodoItem } from "./TodoItem";

function App() {
  const todoItems = [];
  return (
    <div className="App">
      {todoItems.map(() => (
        <TodoItem></TodoItem>
      ))}
    </div>
  );
}

export default App;
