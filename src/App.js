import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import axios from 'axios';

class App extends Component {
    state = {
        users: [],
        loading: false
    };

    async componentDidMount() {
        this.setState({loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data, loading: false });
    }

    render() {
        const name = 'John Doe';
        // const loading = true;
        return (
            <div className='App'>
                <Users/>
            </div>
        )
    }
}

export default App;
