import { Component } from "react";
import './Pokecard.css';

const IMAGE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let formatImgId = (id) => {
    let strIdLength = (id+"").length;
    if (strIdLength < 3) {
        return `${"0".repeat(3 - strIdLength)}${id}`;
    } else {
        return id;
    }
};

class Pokecard extends Component {
    render() {
        let imgSrc = `${IMAGE_API}${formatImgId(this.props.id)}.png`;
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