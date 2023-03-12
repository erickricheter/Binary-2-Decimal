import { useState } from "react";

interface Props {
  valor: string;
  errorMessage: string;
  setValor: (valorInput: string) => void;
  setErrorMessage: (valorInput: string) => void;
}

export const Input = ({
  valor,
  setValor,
  errorMessage,
  setErrorMessage,
}: Props) => {
  return (
    <>
      <input
        maxLength={8}
        value={valor}
        type="text"
        onChange={(e) => {
          setErrorMessage(" ");
          setValor(e.currentTarget.value);
        }}
      ></input>
      <p>{errorMessage}</p>
    </>
  );
};
