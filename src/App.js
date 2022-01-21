
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom'; //, Route, Link 
import Header from './Header';
import Content from './Content';
import Login from './Login';
import Footer from './Footer';
import './index.css';
import './Common.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Router path="/login">
                        <Login />
                    </Router>
                    <Router path="/">
                        <Content />
                    </Router>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
