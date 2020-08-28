import React, { Component } from 'react';
import Axios from 'axios'

class gameCreate extends Component {
    onSavePostBtnClick = () => {
        var input_Name = this.refs.inputName.value
        var input_Genre = this.refs.inputGenre.value
        var input_SinglePlayer = this.refs.inputSinglePlayer.value
        var input_MultiPlayer = this.refs.inputMultiPlayer.value
        var input_Platform = this.refs.inputPlatform.value
        var input_Release = this.refs.inputRelease.value
        var input_Image = this.refs.inputImage.value

        var dataGame = {
            name: input_Name,
            genre: input_Genre,
            singlePlayer: input_SinglePlayer,
            multiplayer: input_MultiPlayer,
            platform: input_Platform,
            release: input_Release,
            image_url: input_Image,
        }

        if (input_Name && input_Genre && input_SinglePlayer && input_MultiPlayer && input_Platform && input_Release && input_Image) {
            Axios.post(`https://backendexample.sanbersy.com/api/games`, dataGame)
                .then((res) => {
                    console.log(res)
                    console.log('Update Berhasil')
                    window.location = '../gameTable'
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
                    <h4>Create Your Data Games</h4>
                    <input className='form-control mt-3' type='text' placeholder='input name' ref='inputName' />
                    <input className='form-control mt-3' type='text' placeholder='input genre' ref='inputGenre' />
                    <input className='form-control mt-3' type='text' placeholder='input SinglePlayer' ref='inputSinglePlayer' />
                    <input className='form-control mt-3' type='text' placeholder='input MultiPlayer' ref='inputMultiPlayer' />
                    <input className='form-control mt-3' type='text' placeholder='input platform' ref='inputPlatform' />
                    <input className='form-control mt-3' type='text' placeholder='input release' ref='inputRelease' />
                    <input className='form-control mt-3' type='text' placeholder='input image url' ref='inputImage' />

                    <button onClick={this.onSavePostBtnClick} className='btn btn-outline-primary mt-3'>Save</button>

                </div>

            </div>
        );
    }

}

export default gameCreate;
