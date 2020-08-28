import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'

class gameDetail extends Component {
    state = {
        dataGame: [],

    }

    componentDidMount() {
        var id = window.location.pathname.split('/')[2]
        console.log(id)
        console.log('ini window location')
        console.log(window.location)
        this.getDataGameDetail(id)
    }

    getDataGameDetail = (param) => {
        Axios.get(`https://backendexample.sanbersy.com/api/games/` + param)
            .then((res) => {
                console.log('ini res.data ')
                console.log(res.data)
                this.setState({ dataGame: res.data })
            })
    }


    render() {
        return (
            <div className='container'>
                <div className='row my-card p-3'>
                    <div className="col-sm-4">
                        <div className='p-2'>
                            <img src={this.state.dataGame.image_url} width='100%' alt="broken" />
                        </div>
                    </div>
                    <div className="col-sm-8 p-3">
                        <h2 style={{ color: '#0f752e' }}>
                            {this.state.dataGame.name}
                        </h2>
                        <h4 style={{ color: '#52575c' }}>
                            {this.state.dataGame.genre}
                        </h4>
                        <p style={{ color: "dodgerblue", fontWeight: "bold" }}>
                            Year : {this.state.dataGame.release}
                        </p>
                        <p style={{ color: '#25282b', fontWeight: "bold" }}>
                            SinglePlayer : {this.state.dataGame.singlePlayer}
                        </p>
                        <p style={{ color: "firebrick", fontWeight: "bold" }}>
                            MultiPlayer : {this.state.dataGame.multiplayer}
                        </p>
                        <p style={{ color: '#25282b', fontWeight: "bold" }}>
                            Platform : {this.state.dataGame.platform}
                        </p>

                    </div>
                </div>

            </div>
        );
    }
}

export default gameDetail;

