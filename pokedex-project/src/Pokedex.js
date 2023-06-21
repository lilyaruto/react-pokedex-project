import { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
    render() {
        return(
            <div className="pokedex">
                <h1 className="title">Pokedex</h1>
                <div className="pokedex-list">
                    {this.props.pokemons.map(card => (
                        <div className="card_element">
                            <Pokecard id={card.id} name={card.name} type={card.type} exp={card.base_experience} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;