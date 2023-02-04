import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './routes/register';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/" component={App} />
            <Route exact path="/register" component={Register} />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
