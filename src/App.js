import React, { useState } from "react";
import Todo from "./components/todoItem"
export default function App() {
  // const [state, setstate] = useState({});
  return (
    <div>
      <ul>
        <Todo />
      </ul>
    </div>
  );
}

