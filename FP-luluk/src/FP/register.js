import React from 'react'
import './register.css'
import Axios from 'axios';

class register extends React.Component {
    state = {
        error: ''
    }
    registerClick = () => {
        var inputUser = this.refs.user.value
        var inputPassword = this.refs.password.value
        var inputConfirm = this.refs.confirm.value
        if (inputUser && inputPassword && inputConfirm) {
            if (inputPassword !== inputConfirm) {
                return this.setState({ error: 'Password tidak sama' })
            }

        } else {

            this.setState({ error: "Form Must be filled" })

        }

        Axios.get('https://backendexample.sanbersy.com/api/users?username=' + inputUser)
            .then((res) => {
                if (res.data.length > 0) {
                    return this.setState({ error: "User Sudah Terdaftar" })
                }
                var data = {
                    username: inputUser,
                    password: inputPassword,
                }

                Axios.post('https://backendexample.sanbersy.com/api/users', data)
                    .then((res) => {
                        console.log(res)
                        console.log('Register', 'Register Succes, Please Login!!', 'success')
                        window.location = '../login'
                    })

                    .catch((err) => {
                        console.log(err)

                    })


            })

            .catch((err) => {
                console.log(err)
            })

        this.refs.user.value = ''
        this.refs.password.value = ''
        this.refs.confirm.value = ''



    }

    closeBtnError = () => {
        this.setState({ error: "" })
    }

    renderError = () => {
        if (this.state.error) {
            return (
                <div className='alert alert-danger mt-3 row justify-content-between' >
                    <span>
                        {this.state.error}
                    </span>
                    <span onClick={this.closeBtnError} style={{ cursor: 'pointer' }}>X</span>
                </div>
            )
        }
    }





    render() {

        return (
            <div className="container-fluid my-5">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column a1 text-center p-5 register-form">
                        <div className='register-MovieGame'>REGISTER</div>
                        <div className='sign-in-register'>Please fill in this form to create an account.</div>

                        <div className='username-password'>Username :</div>
                        <input ref='user' type='text' placeholder='Enter Username' className='input-register' ></input>

                        <div className='username-password'>Password :</div>
                        <input ref='password' type='password' placeholder='Enter Password' className='input-register' ></input>

                        <div className='username-password'>Repeat Password :</div>
                        <input ref='confirm' type='password' placeholder='Repeat Password' className='input-register' ></input>

                        <hr />

                        <div className='terms-privacy'>By creating an account you agree to our <a href="./">Terms & Privacy</a>.</div>

                        <div className="btn btn-primary btn-register" onClick={this.registerClick}>Register</div>


                        {this.renderError()}




                        <div>Already have an account? <a href='../login'>Sign in</a></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default register;
