import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";

const TopicsList = () => {
    return (
        <div>
            <h1>Topics List</h1>
        </div>
    )
};

const TopicDetail = () => {
    return (
        <div>
            <h1>Topic Detail</h1>
        </div>
    )
};

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/topics' component={TopicsList}/>
                    <Route path='/topics/:topicId' component={TopicDetail}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
