import React, { Component } from 'react';
import './reviewListMovie.css'
import { FormGroup, Label, Input } from 'reactstrap'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class reviewListMovie extends Component {
    state = {
        dataMovie: [],
        search: ''
    }

    componentDidMount() {
        this.getDataMovies()
    }

    getDataMovies = () => {
        Axios.get(`https://backendexample.sanbersy.com/api/movies`)
            .then((res) => {
                console.log(res)
                console.log("masuk")
                this.setState({ dataMovie: res.data })
            })

            .catch((err) => {
                console.log(err)
            })
    }

    renderDataToJsx = () => {

        var dataFiltered = this.state.dataMovie.filter((mov) => {
            return mov.title.toLowerCase().startsWith(this.state.search)
        })

        if (dataFiltered.length === 0) {
            return (
                <h2>Data Not Found</h2>
            )
        }

        return dataFiltered.map((val) => {
            return (
                <div key={val.id} className="my-card col-sm-2 mr-3 mt-3">
                    <Link to={'/movieDetail/' + val.id}>
                        <img style={{ height: '70%', objectFit: 'cover', objectPosition: 'top' }} src={val.image_url} width='100%' alt="dataMovie" />
                        <div className='movie-title'>{val.title}</div>
                        <div className='movie-year'>{val.year}</div>
                        <div className='movie-genre'>{val.genre}</div>
                    </Link>
                </div>
            )

        })

    }

    onSearchChange = () => {
        this.setState({ search: this.refs.search.value })
    }

    render() {

        if (this.state.dataMovie.length === 0) {
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
                                <input type='text' className='form-control' placeholder='Search Movie' ref='search' onChange={this.onSearchChange} />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="row">
                            {this.renderDataToJsx()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default reviewListMovie;
