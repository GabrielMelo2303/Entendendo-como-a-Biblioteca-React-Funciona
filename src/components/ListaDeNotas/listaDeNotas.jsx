import React, { Component } from "react";
import CardNotas from "../CardNota/index.js"
import "../ListaDeNotas/estilo.css"
class ListaDeNotas extends Component {  // quando trabalhamos com class component , para realizar a renderização do meu componente eu chamo o metodo render() com return, e dentro dele eu crio minha estrutura.
    
    render() {
        return (
            <ul className = "lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className = "lista-notas_item" key = { index } >
                            <CardNotas titulo = {nota.titulo} texto = {nota.texto}/>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas

//tudo que estiver entre chaves em nosso JSX será um código JavaScript!!! 
// o JSX pede uma KEY para que cada item da lista tenha um identificador unico