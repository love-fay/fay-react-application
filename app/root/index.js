import React from 'react';
import {withRouter} from 'react-router-dom';
import Common from './common';
import ComingSoon from 'fay-react-ui/res/business/comingSoon';
import Home from '../home';
import Layout from '../layout';

class Root extends React.Component{

    static unAuth = ['', '/', '/comingSoon', '/app1', '/app2', '/app3', '/app4', '/app5'];

    render(){
        const {location} = this.props;
        const {pathname} = location;
        const pathPrefix = pathname.split('/')[1];
        const router = {
            'app1': <Layout>app1</Layout>,
            'app2': <Layout>app2</Layout>,
            'app3': <Layout>app3</Layout>,
            'app4': <Layout>app4</Layout>,
            'app5': <Layout>app5</Layout>,
            'comingSoon': <Layout><ComingSoon/></Layout>,
            '': <Layout><Home/></Layout>,
        };
        return (
            <div style={{height: '100%'}}>
                {router[pathPrefix] || router['comingSoon']}
                <Common/>
            </div>
        )
    }
}


export default withRouter(Root);