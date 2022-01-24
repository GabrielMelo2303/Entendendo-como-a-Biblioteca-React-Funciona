import React, { Component } from 'react';
import "../CardNota/estilo.css"

class CardNotas extends Component {
    render() {
        return (
            <section className = "Card-Nota">
                <header className =  "card-nota_cabecalho">
                    <h3 className = "card-nota_titulo">{this.props.titulo}</h3>
                </header>
                <p className = "card-nota_texto">{this.props.texto}</p>
            </section>
        );
    }
}
export default CardNotas;