import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'
import { ACCESS_TOKEN } from '../../../constants';

class OAuth2RedirectHandler extends Component {

    getUrlParameter(name) {
        console.log("yo")
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    componentDidMount() {
        console.log('just mounted  OAuth2RedirectHandler');
    }

    render() {
        console.log('sdfsdfdssdfdsfdsf   = OAuth2RedirectHandler ');
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            console.log(token);
            return <Redirect to={{
                pathname: "/",
                state: { from: this.props.location }
            }} />;
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: {
                    from: this.props.location,
                    error: error
                }
            }} />;
        }
    }
}

export default OAuth2RedirectHandler;