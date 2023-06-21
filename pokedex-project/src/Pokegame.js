import { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
    static defaultProps = {
        pokemons: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }
    
    render() {
        let team1 = [];
        let team2 = [];
        this.props.pokemons.forEach(pokemon => {
            if (Math.round(Math.random()) === 0 && team1.length !== 4) {
                team1.push(pokemon);
            } else if (team2.length !== 4) {
                team2.push(pokemon);
            } else {
                team1.push(pokemon);
            }
        });

        let overallExp1 = team1.reduce((exp, card) => exp + card.base_experience, 0);
        let overallExp2 = team2.reduce((exp, card) => exp + card.base_experience, 0);
        
        return(
            <>
                <Pokedex pokemons={team1} allExp={overallExp1} isWinner={overallExp1 > overallExp2 ? true : false}/>
                <Pokedex pokemons={team2} allExp={overallExp2} isWinner={overallExp2 > overallExp1 ? true : false}/>
            </>
        );
    }
}

export default Pokegame;