import { useState } from "react";

export default function FalsePosition() {
  const [fx, setFx] = useState("");
  const [XL, setXL] = useState("");
  const [XR, setXR] = useState("");
  const [tol, setTol] = useState("");
  const [maxIter, setMaxIter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fx, XL, XR, tol, maxIter });
  };

  return (
    <section style={{ padding: 16 }}>
      <h2>False Position Method</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label style={styles.label}>f(x)</label>
          <input
            style={styles.inputFx}
            value={fx}
            onChange={(e) => setFx(e.target.value)}
            placeholder="x**3 - x - 2"
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>
            X<sub>L</sub>
          </label>
          <input
            type="number"
            style={styles.inputNum}
            value={XL}
            onChange={(e) => setXL(e.target.value)}
            placeholder="1"
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>
            X<sub>R</sub>
          </label>
          <input
            type="number"
            style={styles.inputNum}
            value={XR}
            onChange={(e) => setXR(e.target.value)}
            placeholder="2"
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>tol (ε)</label>
          <input
            type="number"
            style={styles.inputNum}
            value={tol}
            onChange={(e) => setTol(e.target.value)}
            placeholder="0.0001"
          />
        </div>

        <div style={styles.field}>
          <label style={styles.label}>maxIter</label>
          <input
            type="number"
            style={styles.inputNum}
            value={maxIter}
            onChange={(e) => setMaxIter(e.target.value)}
            placeholder="50"
          />
        </div>

        <button type="submit" style={styles.button}>คำนวณ</button>
      </form>
    </section>
  );
}

const styles = {
  form: {
    display: "flex",
    flexWrap: "wrap",
    gap: 14,
    alignItems: "center",
  },
  field: {
    display: "flex",
    alignItems: "center",
    gap: 8,
     
  },
  label: {
    minWidth: 70,          // ความกว้าง label ให้เท่ากัน
    textAlign: "left",
    fontWeight: 600,
  },
  inputFx: {
    width: 280,            // ช่อง f(x) กว้างกว่าช่องตัวเลข
    padding: "6px 8px",
    border: "1px solid #d1d5db",
    borderRadius: 6,
  },
  inputNum: {
    width: 110,            // ขนาดมาตรฐานช่องตัวเลข
    padding: "6px 8px",
    border: "1px solid #d1d5db",
    borderRadius: 6,
  },
  button: {
    padding: "8px 14px",
    borderRadius: 8,
    border: "none",
    background: "#0ea5e9",
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
    height: "fit-content",
  },
};
