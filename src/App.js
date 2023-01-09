import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const removeTodo = (todo) => {
    setTodos(todos.filter((x) => x !== todo));
  };

  const addTodos = (input) => {
    setTodos((x) => {
      return [...x, input];
    });
    //setInput = "";
  };

  console.log(todos);
  return (
    <div className="App">
      <div classname="container">
        <h3 style={{ textAlign: "center" }}>TODO LIST </h3>
        <div style={{ marginTop: 10 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ border: "none", padding: 10, outline: "none" }}
            type="text"
            placeholder="write"
          />

          <button onClick={() => addTodos(input)} style={{ marginLeft: 10 }}>
            add
          </button>
        </div>
        <div>
          {todos.map((todo) => (
            <div style={{ margin: 10, display: "flex", alignItems: "center" }}>
              <h3>{todo}</h3>
              <h4
                onClick={() => removeTodo(todo)}
                style={{ marginleft: 20, cursor: "pointer" }}
              >
                X
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
