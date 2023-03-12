import React from "react";

interface Props {
  resultConverter: number;
}

const ResultConverter = ({ resultConverter }: Props) => {
  return (
    <div>
      <h2
        style={{
          color: "red",
          border: "solid black 1px",
          display: "flex",
          textAlign: "center",
        }}
        className="teste"
      >
        {resultConverter}
      </h2>
    </div>
  );
};

export default ResultConverter;
