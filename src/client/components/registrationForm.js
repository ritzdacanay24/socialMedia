import React, {Component} from 'react';
import axios from 'axios';


export default class RegistrationForm extends Component {
    constructor(props)  {
        super(props);

            this.state = {
                email: "",
                firstName: "",
                lastName: "",
                password: ""
            }
        
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event){
            this.setState({
            [event.target.name]: event.target.value   
            });
        }
        handleSubmit(event){
            const {email, password, firstName, lastName} = this.state

            axios.post(`http://localhost:5000/api/users`,
                {
                    user: {
                        email: email,
                        firstName: firstName,
                        lastName: lastName,
                        password: password
                        }
                },

            {withCredentials: true}

            ) 
            .then(response => {
                if (response.data.status === "created") {
                    this.props.handleSuccessfulAuth(response.data);
                  }
            })
            .catch(error =>{
                console.log("Registration error, you may not see the high council", error);

            });
        event.preventDefault();

        }

    render() {
        return (
            <div className = 'newUserText'>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <h4>New User Registration</h4>
                    </div>
                    <div>
                        <input type="firstName" name="firstName" placeholder="Enter your first name" value= {this.state.firstName} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <input type="lastName" name="lastName" placeholder="Enter your last name" value= {this.state.lastName} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Enter your email" value= {this.state.email} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Create a password" value= {this.state.password} onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <div>
                             <button className = "button" type = "submit">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}
