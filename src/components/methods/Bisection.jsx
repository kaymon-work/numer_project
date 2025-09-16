import { useState } from "react";
import { create, all } from "mathjs";

const math = create(all);

export default function Bisection() {
  const [fx, setFx] = useState("");
  const [xL, setXL] = useState("");
  const [xR, setXR] = useState("");
  const [tol, setTol] = useState("0.000001");
  const [maxIter, setMaxIter] = useState("50");
  const [result, setResult] = useState(null);

  const Cal = () => {
    let xl = parseFloat(xL);
    let xr = parseFloat(xR);
    const eps = parseFloat(tol);
    const maxIt = parseInt(maxIter);

    let xm = 0;
    let xmOld = 0;
    let error = 1;

    for (let i = 1; i <= maxIt && error > eps; i++) {
      xm = (xl + xr) / 2;
      const fxl = math.evaluate(fx, { x: xl });
      const fxm = math.evaluate(fx, { x: xm });

      if (i > 1) {
        error = Math.abs((xm - xmOld) / xm);
      }
      xmOld = xm;

      if (fxm === 0) break;
      if (fxl * fxm < 0) {
        xr = xm;
      } else {
        xl = xm;
      }
    }

    setResult(xm);
  };

  return (
    <div>
      <h2>Bisection Method</h2>

      <input
        type="text"
        placeholder="f(x)"
        value={fx}
        onChange={(e) => setFx(e.target.value)}
      />
      <input
        type="number"
        placeholder="xL"
        value={xL}
        onChange={(e) => setXL(e.target.value)}
      />
      <input
        type="number"
        placeholder="xR"
        value={xR}
        onChange={(e) => setXR(e.target.value)}
      />
      <input
        type="number"
        placeholder="tolerance"
        value={tol}
        onChange={(e) => setTol(e.target.value)}
      />
      <input
        type="number"
        placeholder="max iteration"
        value={maxIter}
        onChange={(e) => setMaxIter(e.target.value)}
      />
      <button onClick={Cal}>Calculate</button>

      {result !== null && (
        <h3>Result ≈ {result}</h3>
      )}
    </div>
  );
}
