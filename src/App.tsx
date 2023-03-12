import React, { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import ResultConverter from "./components/ResultConverter";
import { Convertor } from "./utils/convertor";
import { Validator } from "./utils/validator";

function App() {
  const [valor, setValor] = useState("0");
  const [errorMessage, setErrorMessage] = useState("");
  const [resultBinary, setBinary] = useState(0);
  const handleSubmit = () => {
    if (Validator.binary(valor)) {
      setBinary(Convertor.binary2decimal(valor));
      setErrorMessage(" ");
    } else setErrorMessage("Isso não é binário");
  };
  return (
    <div className="App">
      <h1>Conversor de Binary para Decimal</h1>
      {/* <Text errorMessage=" ">{valor || "0"}</Text> */}
      {/* <Text errorMessage=" ">{valor ? valor : "0"}</Text> NAO MAIS UTILIZADO*/}
      <Input
        valor={valor}
        setValor={setValor}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      ></Input>
      <button onClick={handleSubmit}>Butom</button>
      <ResultConverter resultConverter={resultBinary}></ResultConverter>
    </div>
  );
}
export default App;
