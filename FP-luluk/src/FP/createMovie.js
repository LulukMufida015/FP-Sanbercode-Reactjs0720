import React, { Component } from 'react';
import Axios from 'axios'

class movieCreate extends Component {
    onSavePostBtnClick = () => {
        var input_Title = this.refs.inputTitle.value
        var input_Description = this.refs.inputDescription.value
        var input_Year = this.refs.inputYear.value
        var input_Duration = this.refs.inputDuration.value
        var input_Genre = this.refs.inputGenre.value
        var input_Rating = this.refs.inputRating.value
        var input_Review = this.refs.inputReview.value
        var input_Image = this.refs.inputImage.value

        var dataMovie = {
            title: input_Title,
            description: input_Description,
            year: input_Year,
            duration: input_Duration,
            genre: input_Genre,
            rating: input_Rating,
            review: input_Review,
            image_url: input_Image
        }

        if (input_Title && input_Description && input_Year && input_Duration && input_Genre && input_Rating && input_Review && input_Image) {
            Axios.post(`https://backendexample.sanbersy.com/api/movies`, dataMovie)
                .then((res) => {
                    console.log(res)
                    console.log('Update Berhasil')
                    window.location = '../movieTable'
                })
                .catch((err) => {
                    console.log(err)
                })

        } else {
            console.log('Data Harus Di isi Semua')
        }



    }






    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-4 my-card p-5">
                    <h4>Create Your Data Movies</h4>
                    <input className='form-control mt-3' type='text' placeholder='input title' ref='inputTitle' />
                    <input className='form-control mt-3' type='text' placeholder='input description' ref='inputDescription' />
                    <input className='form-control mt-3' type='text' placeholder='input year' ref='inputYear' />
                    <input className='form-control mt-3' type='text' placeholder='input duration' ref='inputDuration' />
                    <input className='form-control mt-3' type='text' placeholder='input genre' ref='inputGenre' />
                    <input className='form-control mt-3' type='text' placeholder='input rating' ref='inputRating' />
                    <input className='form-control mt-3' type='text' placeholder='input review' ref='inputReview' />
                    <input className='form-control mt-3' type='text' placeholder='input image url' ref='inputImage' />


                    <button onClick={this.onSavePostBtnClick} className='btn btn-outline-primary mt-3'>Save</button>

                </div>

            </div>
        );
    }

}

export default movieCreate;
