import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteToken } from '../../store/actions/auth';

class Logout extends Component {
    UNSAFE_componentWillMount() {
        this.props.deleteToken();
    }
    
    render() {
        return <Redirect to={'/'} />
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteToken: () => dispatch(deleteToken())
    }
}

export default connect(null, mapDispatchToProps)(Logout);