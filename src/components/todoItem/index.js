import React, { useState } from "react";

export default function Todo() {
      const [todos, setTodos] = useState(["sleep", "play", "drtfryf"]);

      

    return (
      <div>
          <ul>
        {todos.map((item) => {
          return <li>{item}</li>;
        })}
        </ul>
      </div>
    );
}
