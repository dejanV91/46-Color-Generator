import React, { useState } from "react";
import Values from "values.js";
import { SingleColor } from "./components/SingleColor";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(new Values("#31d4a9").all(5));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let color = new Values(input.toString()).all(5);
      setList(color);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={error ? "error" : "null"}
            placeholder="#f15025"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} index={index} {...color} />;
        })}
      </section>
    </>
  );
}

export default App;
