import React, { useState } from "react";
import Values from "values.js";
import { SingleColor } from "./components/SingleColor";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let color = new Values(input.toString()).all(10);
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
        {/* <article className="color" style={{ background: `${rgbColor}` }}>
          <p className="percent-value">20%</p>
          <p className="color-value">#526879</p>
        </article> */}
      </section>
    </>
  );
}

export default App;
