import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
}
    

    render() {
        const{ values, handleChange } = thins.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField
                    hintText="Masukan Nama Depan Anda"
                    floatingLabelText="Nama Depan"
                    onChange={handleChange('firstName')}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
