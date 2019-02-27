import React from 'react';
import FormComponent from '../components/FormComponent'
import CharacterContainer from "./CharacterContainer";

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            day: 1,
            month: 1,
            year:1950,
        };
        this.handleBirthdaySubmit = this.handleBirthdaySubmit.bind(this);
    }


    handleBirthdaySubmit(birthday){
        this.setState({day:birthday.day});
        this.setState({month:birthday.month});
        this.setState({year:birthday.year});
    }

    componentWillReceiveProps(nextProps, nextContext) {
    }

    render() {
        return(
            <div>
                <FormComponent handleBirthdaySubmit={this.handleBirthdaySubmit}/>
                <CharacterContainer birthday={this.state}/>
            </div>
        )
    }


}

export default FormContainer;