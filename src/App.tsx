import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { select } from "d3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          data-testid="counterBtn"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <ul>
        <li>
          <h3>Product 1</h3>
          <button>Add to cart</button>
        </li>
        <li>
          <h3>Product 2</h3>
          <button>Add to cart</button>
        </li>
      </ul>
      <ChartOne />

    </>
  );
}

function ChartOne() {
  const [data, setData] = useState([24, 30, 45, 70, 26]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current); // selection 객체

    svg
      .selectAll("circle")
      .data(data)
      .join(
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      )
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("stroke", "red");
  }, [data]);

  return (
    <>
      <svg ref={svgRef}></svg>
      <button onClick={() => {setData(data.map(el => el + 5))}}>increase + 5</button>
      <button onClick={() => {setData(data.filter(el => el > 35))}}>filter circle r should gt 35</button>
      <button onClick={() => {setData([...data, Math.round(Math.random() *100)])}}>add data</button>
    </>
  );
}

export default App;
