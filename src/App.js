import React, { useState } from "react";
import hexToRGBA from "./shared/hexaToRGBA";

function App() {
  const [hexaInput, setHexaInput] = useState("#156538");
  const [errorClass, setErrorClass] = useState("null");
  const [rgbColor, setRGBAColor] = useState("rgb(21, 101, 56)");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setHexaInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstLetter = hexaInput.charAt(0);
    if (
      firstLetter === "#" &&
      (hexaInput.length === 4 || hexaInput.length === 7)
    ) {
      setErrorClass("null");
      hexToRGBA(hexaInput);
      // more code for correct input
    } else {
      setErrorClass("error");
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={errorClass}
            placeholder="#f15025"
            value={hexaInput}
            onChange={handleChange}
          />
          <button className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        <article className="color" style={{ background: `${rgbColor}` }}>
          <p className="percent-value">20%</p>
          <p className="color-value">#526879</p>
        </article>
      </section>
    </>
  );
}

export default App;
