import { useState, useEffect, useLayoutEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import citysdk from "../../census/census";

function App() {
  const [count, setCount] = useState(0);
  const [payload, setPayload] = useState("");

  useEffect(() => {
    citysdk(
      {
        vintage: 2016,
        geoHierarchy: {
          //  state: {
          //    lat: 38.8482,
          //    lng: -76.932,
          //  },
          state: null,
          // FIXME: hypothesis: needs the specified components in geoHeirarchy for lens
          county: "*",
        },
        sourcePath: ["acs", "acs5", "profile"],

        values: ["DP03_0007E", "DP03_0007PE"],
        //values: ["DP03_0007E"],
        //geoResolution: "500k",
      },
      (err, res) => {
        if (err) console.warn("ERROR:", err);
        //console.log("DONE: \n");
        //console.log(res);
        setPayload(res);
        //return promises
        //  .writeFile("./data/response-big.json", JSON.stringify(res, null, 2))
        //  .then(console.log("COMPLETE"));
      }
    );
  }, []);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <pre>{payload}</pre>
    </div>
  );
}

export default App;
