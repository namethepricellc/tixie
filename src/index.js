const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');
const { BrowserRouter as Router, Route } = require('react-router-dom');
const Register = require('./routes/register');

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route exact path="/" component={App} />
            <Route exact path="/register" component={Register} />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
