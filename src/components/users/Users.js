import React, {Component} from 'react';

class Users extends Component {
    render() {
        return (
            <div>
              {`${process.env.REACT_APP_GITHUB_CLIENT_ID}`}
            </div>
        );
    }
}

export default Users;
