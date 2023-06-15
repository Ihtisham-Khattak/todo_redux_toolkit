import React, { useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState("");
  console.log("🚀 ~ file: Todos.js:5 ~ Todos ~ todo:", todo);

  return (
    <div>
      <form>
        <label>Add Todo</label>
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add Todo"
          required
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Todos;
