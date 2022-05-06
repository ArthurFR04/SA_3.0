import React, { Component } from 'react';
import { Link } from "react-router-dom";



let salvar = () => {
    console.log(document);

}

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 7
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        
    }
    

    render() {
        return (
            <form>
                <label>
                    Estão indo:
                <input
                        name="isGoing"
                        type="checkbox"
                        // checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Número de convidados:
                <input
                        name="numberOfGuests"
                        type="number"
                        // value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>

                <input type="submit" value="Enviar" onClick={console.log(this.handleInputChange.value)}
                />
            </form>
        );
    }

}

export default LoginScreen;