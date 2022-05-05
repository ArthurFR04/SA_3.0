import React, { Component } from 'react';
import { Link } from "react-router-dom";


export class Teste1  extends Component {
    render() {
        return (
            <div className="title">
                <h4>Teste1</h4>
                <p>Aqui é um teste ? acho que sim...</p>
                <Link to="/HomeScreen">Home</Link>
                <Link to="/Teste2">Teste2</Link>
            </div>
        );
    }
};

export class Teste2  extends Component {
    render() {
        return (
            <div className="title">
                <h4>Teste2</h4>
                <p>Aqui é outro teste ? sério ?? acho que sim... de novo...</p>
                <Link to="/HomeScreen">Home</Link>
                <Link to="/Teste1">Teste1</Link>
            </div>
        );
    }
}

