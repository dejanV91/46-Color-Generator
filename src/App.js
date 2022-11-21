import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={"null"}
            placeholder="#f15025"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {/* <article className="color" style={{ background: `${rgbColor}` }}>
          <p className="percent-value">20%</p>
          <p className="color-value">#526879</p>
        </article> */}
      </section>
    </>
  );
}

export default App;
