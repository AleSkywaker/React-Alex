import React, { Component } from 'react';

export class Formulario extends Component {
  handleClick(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const twitter = document.getElementById('twitter').value;

    const cuenta = {
      nombre: name,
      redSocial: twitter,
    };
    console.log(cuenta);
  }

  render() {
    return (
      <div>
        <h4>Formulario</h4>
        <form>
          <p>
            <label>Nombre: </label>
            <input id='name' name='userName' placeholder='nombre' />
          </p>
          <p>
            <label>Twitter: </label>
            <input id='twitter' name='twitterAccount' placeholder='introduce tu twitter' />
          </p>

          <button onClick={this.handleClick}>Enviar</button>
        </form>
      </div>
    );
  }
}
