import React, { Component } from 'react';
import "../FormularioCadastro/estilo.css";

class FormularioCadastro extends Component {
    constructor(props){
        super(props)
        this.titulo = "";
        this.texto  = "";
    }
    
    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;

    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }
    render() {
        return (
            <form className="formulario-cadastro"
                onSubmit={this._criarNota.bind(this)}
            >
                <input
                    type="text"
                    placeholder="Título"
                    className="formulario-cadastro_input" 
                    onChange= {this._handleMudancaTitulo.bind(this)}

                />
                <textarea
                    placeholder="Escreva sua nota..."
                    className="formulario-cadastro_textarea"
                    rows = {10} 
                    onChange = {this._handleMudancaTexto.bind(this)}
                />
                <button className="formulario-cadastro_submit">
                    Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro

// sempre que instanciar uma função em uma variavel, onde uma das suas propriedades estejam com o this,lembrar de usar o bind() para pegar a referencia do objeto que faz sentido