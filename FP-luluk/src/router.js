import React from 'react'
import Login from './FP/login'
import Resgiter from "./FP/register"
import Home from "./FP/reviewListMovie"

import ReviewListMovie from "./FP/reviewListMovie"
import MovieTable from "./FP/tableMovie"
import MovieCreate from "./FP/createMovie"

import GameReviewList from "./FP/reviewListGame"
import GameTable from "./FP/tableGame"
import GameCreate from "./FP/createGame"

import MovieDetail from "./FP/detailMovie"
import GameDetail from "./FP/detailGame"

import { Switch, Route } from "react-router";
import movieDetail from './FP/detailMovie';



const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Resgiter />
                </Route>
                <Route path="/reviewListMovie">
                    <ReviewListMovie />
                </Route>
                <Route path="/tableMovie">
                    <MovieTable />
                </Route>
                <Route path="/createMovie">
                    <MovieCreate />
                </Route>
                <Route path="/reviewListGame">
                    <GameReviewList />
                </Route>
                <Route path="/tableGame">
                    <GameTable />
                </Route>
                <Route path="/createGame">
                    <GameCreate />
                </Route>

                <Route path="/detailMovie">
                    <MovieDetail />
                </Route>

                <Route path="/detailGame">
                    <GameDetail />
                </Route>


            </Switch>
        </>
    )
}

export default Routes
