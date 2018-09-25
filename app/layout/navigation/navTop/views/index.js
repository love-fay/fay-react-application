/**
 * Created by feichongzheng on 16/12/15.
 */
import React, {Component} from 'react';
import '../style/index.less';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Nav from './nav';

class Index extends Component {

    static propTypes = {
        location: PropTypes.any,
        history: PropTypes.object,
    };


    handleClick = (e) => {
        let key = e.key;
        if (key !== undefined) {
            this.props.history.push(key);
        }
    };

    onChange = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    render () {
        return [
            <Nav style={this.props.style} key={1} onChange={this.handleClick}/>,
        ]
    }
}

export default withRouter(Index);
