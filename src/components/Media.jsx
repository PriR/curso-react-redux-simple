import React from "react";
import Card from "./Card";

import { connect } from "react-redux"; // decorator

const Media = ({min, max, primeiroNome}) => {
  // const {min, max} = props;
  // console.log(props.numeros)
  // console.log(props.min)
  // console.log(props.max)
  // console.log(props)
  console.log("Primeiro Nome: ", primeiroNome)
  console.log("MIN: ", min)
  console.log("MAX: ", max)
  return (
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
    primeiroNome: state.nomes[0]
  }
}

export default connect(mapStateToProps)(Media); // o resultado de connect será chamado em Media, e o objeto de mapStateToProps será retornado via props
