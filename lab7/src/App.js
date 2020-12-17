import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GroupOrientation from './components/btns'
import DateAndTimePickers from './components/time'
import SimpleCard from './components/homeCard'

export default function App() {
    return(
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/btns">Guziki</Link>
                        </li>
                        <li>
                            <Link to="/date">Data i godzina</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/btns">
                        <Btns />
                        <GroupOrientation />
                    </Route>
                    <Route path="/date">
                        <DateChoose />
                        <DateAndTimePickers />
                    </Route>
                    <Route path="/">
                        <Home />
                        <SimpleCard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>
}

function Btns() {
    return <h2>Guziki</h2>
}

function DateChoose(){
    return <h2>Wybór daty</h2>
}