import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'

class movieDetail extends Component {
    state = {
        dataMovie: [],

    }

    componentDidMount() {
        var id = window.location.pathname.split('/')[2]
        console.log(id)
        console.log(window.location)
        this.getDataMovieDetail(id)
    }

    getDataMovieDetail = (param) => {
        Axios.get(`https://backendexample.sanbersy.com/api/movies` + param)
            .then((res) => {
                console.log('ini res.data ')
                console.log(res.data)
                this.setState({ dataMovie: res.data })
            })
    }


    render() {

        return (
            <div className='container'>
                <div className='row my-card p-3'>
                    <div className="col-sm-4">
                        <div className='p-2'>
                            <img src={this.state.dataMovie.image_url} width='100%' alt="broken" />
                        </div>
                    </div>
                    <div className="col-sm-8 p-3">
                        <h2 style={{ color: '#0f752e' }}>
                            {this.state.dataMovie.title}
                        </h2>
                        <h4 style={{ color: '#52575c' }}>
                            {this.state.dataMovie.genre}
                        </h4>
                        <p style={{ color: "dodgerblue", fontWeight: "bold" }}>
                            Year : {this.state.dataMovie.year}
                        </p>
                        <p style={{ color: '#25282b', fontWeight: "bold" }}>
                            Duration : {this.state.dataMovie.duration}
                        </p>
                        <p style={{ color: "firebrick", fontWeight: "bold" }}>
                            Rating : {this.state.dataMovie.rating}
                        </p>
                        <p style={{ color: '#25282b', fontWeight: "bold" }}>
                            Review : {this.state.dataMovie.review}
                        </p>
                        <p style={{ color: '#52575c', fontSize: "20px" }}>
                            {this.state.dataMovie.description}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default movieDetail;
