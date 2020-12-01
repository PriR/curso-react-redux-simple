import React from "react";
import Card from "./Card";

export default ({ min, max }) => {
  const aleatorio = parseInt(Math.random() * (max - min));
  return (
    <Card title="Sorteio de um número" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
};
