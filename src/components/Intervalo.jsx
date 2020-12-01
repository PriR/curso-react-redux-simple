import React from "react";
import "./Intervalo.css";
import Card from "./Card";

export default ({ min, max, onMinChanged, onMaxChanged }) => {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => onMinChanged(+e.target.value)} // passa o valor para o setMin
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => onMaxChanged(+e.target.value)} // passa o valor para o setMax
          />
        </span>
      </div>
    </Card>
  );
};
