import { useState } from "react";

export default function Header({ value, onChange }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Numerical Methods</h1>
      <select
        aria-label="เลือกสูตร"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        style={styles.select}
      >
        <option value="">-- เลือกสูตร --</option>
        <option value="bisection">Bisection</option>
        <option value="falsePosition">False Position</option>
      </select>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0ea5e9",
    color: "black",
    padding: "12px 20px",
  },
  title: { margin: 0, fontSize: "50px" },
  select: {
    padding: "6px 10px",
    borderRadius: 6,
    border: "1px solid #000",
    fontSize: "14px",
    margin: 10
  },
};
