/**
 * Created by feichongzheng on 16/12/15.
 */

import React from 'react';
import NavTop from '../navigation/navTop';
import PropTypes from 'prop-types';

const Layout = ({children, className, style}) => {
    return (
        <div className={className} style={style}>
            <NavTop/>
            <div style={{marginTop: '50px'}}>
                {children}
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
    minWidth: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Layout;
