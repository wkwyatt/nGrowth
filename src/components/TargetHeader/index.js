import React from 'react';
import PropTypes from 'prop-types';

export default ({name}) => {
    return (
        <header className="target-header">
            <h2>{name}</h2>
        </header>
    );
}