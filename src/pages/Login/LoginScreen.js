import React, { Component } from 'react';
import { Link } from "react-router-dom";


class LoginScreen  extends Component {
    render() {
        return (
            <div className="title">
                <h4>Login</h4>
                <p>Aqui é o Login sabe ? Bota o nomezin e senha ai pra entrar :)</p>
                <Link to="/HomeScreen">Dale pro Home</Link>
            </div>
        );
    }
}

export default LoginScreen;