import React, {Fragment} from 'react'
import CharacterComponent from "../components/CharacterComponent";

class CharacterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            character: ""
        }
    }

    static characterNumberGenerator(props) {
        let i = (props.birthday.month * props.birthday.day * props.birthday.year);
        let result = '';
        do {
            if (i <= 88){
                result = i;
                break;
            }
            else{
                for (i; i >= 88; i*=0.5){
                    if(i<=88){
                        result = i;
                        break;
                    }
                    result = i;
                }

            }

            result = i;
        }
        while (i > 88);
        return Math.round(result);
    }


    componentWillReceiveProps() {
    let characterNumber = CharacterContainer.characterNumberGenerator(this.props);
        fetch(`https://swapi.co/api/people/${characterNumber}/?format=json`)
            .then(response => response.json())
            .then(data => this.setState({character: data}));
    }


    render() {
        return (
            <Fragment>
                <CharacterComponent character={this.state.character}/>
            </Fragment>
        );
    }


}

export default CharacterContainer