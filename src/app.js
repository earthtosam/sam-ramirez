import React from 'react';
import './stylesheet.css';
import Nav from './components/navBar';
import Footer from './components/footer';
import Home from './home';
import Restaurants from './restaurants';
import About from './about';
import Menu from './menu';
import SubMenu from './sub-menu';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import DatabaseTest from './DatabaseTest';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home/' component={Home} />
                    <Route path='/restaurants/' exact component={Restaurants} />
                    <Route path='/about' exact component={About} />
                    <Route path='/menu' component={Menu} />
                    <Route path='/restaurants/:id' exact component={Menu} />
                    <Route path='/restaurants/:categories' component={SubMenu} />
                </Switch>
                <Footer />
                <DatabaseTest />
            </div>
        </Router>
    );
}

export default App;