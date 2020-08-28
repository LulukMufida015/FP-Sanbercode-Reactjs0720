import React, { Component } from 'react';
import './gameReviewList.css'
import { FormGroup, Label, Input } from 'reactstrap'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class gameReviewList extends Component {
    state = {
        dataGame: [],
        search: ''
    }

    componentDidMount() {
        this.getDataGames()
    }

    getDataGames = () => {
        Axios.get(`https://backendexample.sanbersy.com/api/games`)
            .then((res) => {
                console.log(res)
                this.setState({ dataGame: res.data })
            })

            .catch((err) => {
                console.log(err)
            })
    }

    renderDataGameToJsx = () => {

        var dataFiltered = this.state.dataGame.filter((game) => {
            return game.name.toLowerCase().startsWith(this.state.search)
        })

        if (dataFiltered.length === 0) {
            return (
                <h2>Data Not Found</h2>
            )
        }

        return dataFiltered.map((val) => {
            return (
                <div key={val.id} className="my-card col-sm-2 mr-3 mt-3">
                    <Link to={'/gameDetail/' + val.id}>
                        <img style={{ height: '70%', objectFit: 'cover', objectPosition: 'top' }} src={val.image_url} width='100%' alt="dataGame" />
                        <div className='game-name'>{val.name}</div>
                        <div className='game-year'>{val.release}</div>
                        <div className='game-genre'>{val.genre}</div>
                    </Link>
                </div>
            )

        })

    }

    onSearchChange = () => {
        this.setState({ search: this.refs.search.value })
    }

    render() {

        if (this.state.dataGame.length === 0) {
            return (
                <h1>Data Masih Kosong</h1>
            )
        }

        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-sm-2 mt-3">
                        <div className='my-fixed-filter '>
                            <div className="my-card p-3 mb-3">
                                <input type='text' className='form-control' placeholder='Search' ref='search' onChange={this.onSearchChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="row">
                            {this.renderDataGameToJsx()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default gameReviewList;
