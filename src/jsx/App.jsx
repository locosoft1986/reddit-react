let React = require('react');
let $ = require('jquery-browserify');
let ReactRouter = require('react-router');

let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let Link = ReactRouter.Link;
let IndexRoute= ReactRouter.IndexRoute;

class Index extends React.Component {
    render() {
        return (
            <h1>
                Hello World!
            </h1>
        );
    }
}

React.render((
    <Router>
        <Route path='/' component={Index}>
        </Route>
    </Router>
), document.body);
