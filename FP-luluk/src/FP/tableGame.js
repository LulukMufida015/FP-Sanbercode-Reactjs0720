import React, { Component } from "react"
import axios from "axios"

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Link,
} from '@material-ui/core'


const preventDefault = (event) => event.preventDefault();

function changeIt(num) {
    if (num === 1) {
        return "Yes"
    } else {
        return "No"
    }
}


class gameTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            games: []
        }
    }

    componentDidMount() {
        axios.get('https://www.backendexample.sanbersy.com/api/games')
            .then(res => {
                let games = res.data.map(el => {
                    return {
                        id: el.id,
                        name: el.name,
                        singlePlayer: el.singlePlayer,
                        release: el.release,
                        multiplayer: el.multiplayer,
                        genre: el.genre,
                        platform: el.platform,
                        image: el.image_url,
                    }
                })
                this.setState({ games })
            })
    }


    render() {
        return (
            <>
                <h1>Daftar Game Game Terbaik</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" border="1px">
                        <TableHead>
                            <TableRow style={{ backgroundColor: "darkgray", fontWeight: "bold" }}>
                                <TableCell>No</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Genre</TableCell>
                                <TableCell align="center">Single Player</TableCell>
                                <TableCell align="center">Multi Player</TableCell>
                                <TableCell align="center">Platform Device</TableCell>
                                <TableCell align="center">Release</TableCell>
                                <TableCell align="center">Image Url</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.games.map((item, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell align="right">{item.name}</TableCell>
                                            <TableCell align="right">{item.genre}</TableCell>
                                            <TableCell align="right">{changeIt(item.singlePlayer)}</TableCell>
                                            <TableCell align="right">{changeIt(item.multiplayer)}</TableCell>
                                            <TableCell align="right">{item.platform}</TableCell>
                                            <TableCell align="right">{item.release}</TableCell>
                                            <TableCell align="right"><Link href={item.image} onClick={preventDefault}>
                                                {item.image}
                                            </Link>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
}

export default gameTable;
