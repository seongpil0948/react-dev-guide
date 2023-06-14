import { useEffect, useRef, useState } from "react";
import { select } from "d3";

export default function D3Charts() {
  return (
    <>
      <ChartOne></ChartOne>
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
      <svg style={{ display: "block" }} ref={svgRef} />
      <div className="row">
        <button
          onClick={() => {
            setData(data.map((el) => el + 5));
          }}
        >
          increase + 5
        </button>
        <button
          onClick={() => {
            setData(data.filter((el) => el > 35));
          }}
        >
          filter circle r should gt 35
        </button>
        <button
          onClick={() => {
            setData([...data, Math.round(Math.random() * 100)]);
          }}
        >
          add data
        </button>
      </div>
    </>
  );
}
