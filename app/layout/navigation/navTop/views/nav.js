/**
 * Created by feichongzheng on 16/12/15.
 */
import React, {Component} from 'react';
import Menu from 'fay-react-ui/menu';
import Icon from 'fay-react-ui/icon';
import '../style/index.less';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {prefix} from "../../../../classNamePrefix";
import data from './data.json';

let pathname;

class Nav extends Component {

    static propTypes = {
        onChange: PropTypes.func,
    };

    constructor(props) {
        super(props);
        const {location} = props;
        pathname = location.pathname;
        pathname = pathname.indexOf('/') === 0 ? '/' + pathname.split('/')[1] : (pathname && '/' + pathname.split('/')[0]);
        this.state = {
            left: '0'
        }
    }

    nav = data => data.map((item) => {
        const {name, key, type} = item;
        return (
            <Menu.Item key={key}>
                <Icon type={type}/>&nbsp;
                <span>{name}</span>
            </Menu.Item>
        )
    });

    handleScroll = () => {
        const left = document.documentElement.scrollLeft || document.body.scrollLeft;
        this.setState({left: -left});
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const stylePrefix = prefix + '-layout-nav-top';
        const {left} = this.state;
        return (
            <Menu onClick={this.props.onChange}
                  selectedKeys={[pathname]}
                  mode="horizontal"
                  className={stylePrefix}
                  style={{...this.props.style, left: left}}
            >
                {this.nav(data)}
            </Menu>
        )
    }
}

export default withRouter(Nav);
