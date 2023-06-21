import { Component } from "react";
import './Pokecard.css';

const IMAGE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

class Pokecard extends Component {
    render() {
        let imgSrc = `${IMAGE_API}${this.props.id}.png`;
        return(
            <div className="card">
                <span className="pokemon-name">{this.props.name}</span>
                <img className="pokemon-img" src={imgSrc} alt={this.props.name + "-img"}/>
                <span className="pokemon-type">Type: {this.props.type}</span>
                <span className="pokemon-exp">EXP: {this.props.exp}</span>
            </div>
        );
    }
}

export default Pokecard