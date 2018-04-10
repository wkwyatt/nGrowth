import React from 'react';
import PropTypes from 'prop-types';
import TargetHeader from '../TargetHeader';

export default ({company}) => {
    return (
        <div key={company.id} className="target-cell-container target-cell-clicked">
            <div className="target-cell">
                <TargetHeader name={company.companyName} />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda facere molestiae rerum veritatis? A ad alias corporis dolorum, ducimus fugiat, id in iste labore minus modi mollitia nemo soluta voluptatum.</p>
            </div>
        </div>
    );
}