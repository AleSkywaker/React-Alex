import React, { Component } from 'react';

// function Saluda(props) {
//   return <h1>Hola {props.nombre}</h1>;
// }

// const Saluda = (props) => <h1>Hola {props.nombre}</h1>;

export class Saluda extends Component {
  render() {
    return <h1>Hola {this.props.nombre}</h1>;
  }
}

export class Text extends Component {
  render() {
    const activo = this.props.isActivated ? 'On' : 'Off';
    const mapedNumber = this.props.arrayOfNumber.map((e) => {
      return e * 5;
    });

    const { titulo, nombre, number, objecto, texto } = this.props;

    return (
      <div>
        {titulo}
        <h3>{texto}</h3>
        <p>{nombre}</p>
        <p>{number}</p>
        <p>{mapedNumber.join(', ')}</p>
        <p>{activo}</p>
        <p>{objecto.email}</p>
      </div>
    );
  }
}

Text.defaultProps = {
  texto: 'Star Wars',
};

export class Contador extends Component {
  constructor() {
    super();
    this.state = { contador: 0 };

    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 });
    }, 60000);
  }

  render() {
    const min = this.state.contador <= 1 ? 'minuto' : 'minutos';
    return (
      <p className='contador'>
        {this.state.contador} {min}
      </p>
    );
  }
}
