import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


class movieTable extends Component {
    state = {
        dataMovie: []
    }

    componentDidMount = () => {
        this.getDataMovie()
    }

    getDataMovie = () => {

        Axios.get(`https://backendexample.sanbersy.com/api/movies`)
            .then((res) => {
                this.setState({ dataMovie: res.data })
                console.log(res.data)

            })

            .catch((err) => {
                console.log(err)

            })
    }

    onDeleteBtnClick = (id, title) => {
        console.log({
            title: "Delete Data Movie",
            text: "Are You Sure Want to Delete " + title + ' ?',
            showCancelButton: true,
            icon: "warning",
            cancelButtonColor: 'red'

        })
            .then((val) => {
                if (val.value) {
                    Axios.delete(`https://backendexample.sanbersy.com/api/movies/` + id)
                        .then((res) => {
                            console.log('Delete Data Success')
                            this.getDataMovie()
                            console.log(res)


                        })

                        .catch((err) => {
                            console.log(err)

                        })

                } else {
                    console.log('oke')
                }

            })

    }

    renderDataToJsx = () => {
        return this.state.dataMovie.map((val, index) => {
            return (

                <tr>


                    <td>{index + 1}</td>
                    <td>{val.title}</td>
                    <td>{val.description}</td>
                    <td>{val.year}</td>
                    <td>{val.duration}</td>
                    <td>{val.genre}</td>
                    <td>{val.rating}</td>
                    <td>{val.review}</td>
                    <td><img src={val.image_url} width='100px' alt='broken' /></td>
                    <td>
                        <input type='button' class='btn btn-outline-danger' onClick={() => this.onDeleteBtnClick(val.id, val.title)} value='delete' />

                    </td>

                    <td>
                        <Link to={'/editDataMovie/' + val.id}>
                            <input type='button' class='btn btn-outline-info' value='edit' />
                        </Link>
                    </td>
                </tr>

            )

        })

    }





    render() {
        return (
            <div className='container'>
                <h4>Manage Your Movies</h4>
                <div className="table-responsive">

                    <table class="table" border="1px">
                        <thead>
                            <tr style={{ backgroundColor: "darkgray", fontWeight: "bold" }}>
                                <th scope="col">No</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Year</th>
                                <th scope="col">Duration</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Review</th>
                                <th scope="col">Image</th>


                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody style={{ backgroundColor: "white" }}>

                            {this.renderDataToJsx()}

                        </tbody>
                    </table>

                </div>

            </div>
        );
    }

}

export default movieTable;
