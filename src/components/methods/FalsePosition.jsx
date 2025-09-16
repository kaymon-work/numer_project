import { useState } from "react";

function FalsePosition() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  return (
    <div className="container">
      <h2>บวกเลข</h2>

      <input
        type="number"
        placeholder="กรอกเลขตัวแรก"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="input-box"
      />

      <input
        type="number"
        placeholder="กรอกเลขตัวที่สอง"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="input-box"
      />

      <button onClick={handleCalculate} className="button">
        คำนวณ
      </button>

      {result !== null && (
        <h3 className="result">ผลลัพธ์: {result}</h3>
      )}
    </div>
  );
}

export default FalsePosition;
