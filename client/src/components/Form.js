import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

export class Form extends Component {
state ={
  step: 1,
  firstName: '',
  lastName: '',
  email: '',
  jabatan:'',
}

//next step
  nextStep = () => {
    const{ step } = this.state;
    this.setState({
      step: step + 1
    });
  }

//back step
prevStep = () => {
  const{ step } = this.state;
  this.setState({
    step: step - 1
  });
}

//Handle fields change
handleChange = input => e => {
  this.setState({[input]: e.target.value});

}

  render() {
    const{ step } = this.state;
    const{ firstName,lastName,email,jabatan } = this.state;
    const values = { firstName,lastName,email,jabatan }
    
    switch(step) {
      case 1:
        return(
          <FormUserDetails 
            nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          />
        )
        case 2:
          return<h1>FormPersonalDetails</h1>

        case 3:
          return<h1>Confirm</h1>

        case 4:
          return<h1>Success</h1>
    }
    
  }
}

export default Form
