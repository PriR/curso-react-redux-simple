import React from "react";
import { connect } from "react-redux";
import "./Intervalo.css";
import Card from "./Card";
import { alterarNumeroMinimo } from "../store/actions/numeros";
import { alterarNumeroMaximo } from "../store/actions/numeros";

const Intervalo = (props) => {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.alterarMinimo(+e.target.value)}
            // value={min}
            // onChange={(e) => onMinChanged(+e.target.value)} // passa o valor para o setMin
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
            // value={max}
            // onChange={(e) => onMaxChanged(+e.target.value)} // passa o valor para o setMax
          />
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    alterarMinimo(novoNumero) {
      // será colocado nas propriedades em props por meio do connect
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action); // notifica para atualizar os estados dos reducers
    },
    alterarMaximo(novoNumero) {
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
