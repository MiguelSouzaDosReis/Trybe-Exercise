import React from 'react';
const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];
class Content extends React.Component {
    
    render() {
      return (
        conteudos.map((element) => <><h3> O conteúdo é: {element.conteudo}</h3><h4> Status: {element.status} </h4><h5> {element.bloco}</h5></>
        )
      )
    }
  }



export default Content;