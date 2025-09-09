import { useState } from "react";

export default function Test() {
    const [Value1,setValue1] = useState("");
    const [Value2,setValue2] = useState("");

    return(
        <div style={{ margin: 50 }}>
        <input 
            className="input-box"
            type="number"
            placeholder="First Number"
            value={Value1}
            onChange={(e) => setValue1(Number(e.target.value))}
        />
        <input
            className="input-box"
            type="number"
            placeholder="Second Number"
            value={Value2}
            onChange={(e) => setValue2(Number(e.target.value))}
        />
        <h2>ตัวอย่างการสร้าง state</h2>
        <p>ค่าที่เก็บใน state 1 ตอนนี้คือ: {Value1}</p>
        <p>ค่าที่เก็บใน state 2 ตอนนี้คือ: {Value2}</p>
        <p>ลองบวกเลข ตอนนี้คือ: {Value1 + Value2}</p>
        </div>
    );

}