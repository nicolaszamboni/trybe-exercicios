import React from 'react';

const nome = 'Nicolas Zamboni';
const descrição = 'Sou estudante na Trybe, tenho 30 anos e amo cachorros'

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {nome}
        </h1>
        <p>
          {descrição}
        </p>
        <h2>Minhas Habilidades</h2>
        <ul>
          <li>{'Proativo'}</li>
          <li>{'Flexivel'}</li>
          <li>{'Feliz'}</li>                    
        </ul>
      </div>
    );
  }
}

export default About;