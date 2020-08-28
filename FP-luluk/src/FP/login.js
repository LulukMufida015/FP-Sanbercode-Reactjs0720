import React from "react";
import "./login.css";
import Axios from "axios";
import { Redirect } from 'react-router-dom'


class login extends React.Component {
    state = {
        isComplete: null
    };

    onLoginBtnClick = () => {
        let inputUser = this.refs.user.value;
        let inputPassword = this.refs.password.value;

        if (inputUser && inputPassword) {
            Axios.get(`${`https://backendexample.sanbersy.com/api/`}users?username=${inputUser}&password=${inputPassword}`)
                .then(res => {
                    if (res.data.length > 0) {
                        console.log(res)
                        localStorage.setItem('id', res.data[0].id)
                        console.log(res.data)
                        if (res.data[0].password) {
                            this.setState({ isComplete: true })

                        } else {
                            this.setState({ isComplete: false })
                        }

                    } else {
                        console.log("Error", "Pass or User Invalid", "error");
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            return console.log("Error", "All Form Must be Filled", "error");
        }
    };

    render() {
        if (this.state.isComplete === false) {
            return (
                <Redirect to='../register' />
            )
        }
        if (this.state.isComplete === true) {
            return (
                <Redirect to='../movieReviewList' />
            )
        }
        return (
            <div className="container-fluid my-5">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column text-center p-5 form-login">
                        <div className="login-moviegame">MovieGame</div>
                        <div className="sign-in-login">Sign In</div>

                        <div className="username-password">Username :</div>
                        <input
                            ref="user"
                            type="text"
                            placeholder="Input Username"
                            className="input-login"
                        ></input>

                        <div className="username-password">Password :</div>
                        <input
                            ref="password"
                            type="password"
                            placeholder="Password"
                            className="input-login"
                        ></input>


                        <div
                            className="btn btn-primary mb-2"
                            onClick={this.onLoginBtnClick}
                        >
                            Login
            </div>
                        <div>
                            <a href="./">Forget Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default login;

