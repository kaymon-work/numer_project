import { useState } from "react";
import { evaluate } from "mathjs";

export default function Bisection() {
  const [fx, setFx] = useState("");   // เก็บข้อความสมการ
  const [x, setX] = useState("");     // ค่า x ที่อยากทดสอบ
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    try {
      // แทนค่า x ลงในฟังก์ชัน
      const value = evaluate(fx, { x: parseFloat(x) });
      setResult(value);
    } catch (err) {
      setResult("Error: ตรวจสอบสูตรอีกครั้ง");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Bisection Method - ใส่ f(x)</h2>

      {/* ช่องรับ f(x) */}
      <input
        type="text"
        placeholder="เช่น x^3 - x - 2"
        value={fx}
        onChange={(e) => setFx(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      {/* ช่องรับค่า x */}
      <input
        type="number"
        placeholder="ค่า x"
        value={x}
        onChange={(e) => setX(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      <button onClick={handleCalculate}>คำนวณ f(x)</button>

      {result !== null && (
        <p>f({x}) = {result}</p>
      )}
    </div>
  );
}
