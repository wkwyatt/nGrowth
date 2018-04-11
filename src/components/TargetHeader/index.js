import React from 'react';
import PropTypes from 'prop-types';

export default ({ name, logo }) => {
    return (
        <header className="target-header">
            <div className="cover">
                <h2>{name}</h2>
            </div>
            <div className="user">
                <img className="img-circle" src={logo} alt="logo" />
            </div>
        </header>
    );
}