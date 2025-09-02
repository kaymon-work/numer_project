import { useState } from "react";
import Header from "./components/Header";
import Bisection from "./components/methods/Bisection";
import FalsePosition from "./components/methods/FalsePosition";

function App() {
  const [method, setMethod] = useState("");

  const renderMethod = () => {
    switch (method) {
      case "bisection":
        return <Bisection />;
      case "falsePosition":
        return <FalsePosition />;
      default:
        return (
          <main style={{ padding: 16 }}>
            <p>เลือกสูตรจากเมนูด้านบนก่อน</p>
          </main>
        );
    }
  };

  return (
    <>
      <Header value={method} onChange={setMethod} />
      {renderMethod()}
    </>
  );
}

export default App;
