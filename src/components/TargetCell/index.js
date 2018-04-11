import React from 'react';
import TargetHeader from '../TargetHeader';

export default ({company, removeButtonClicked, showFinancialPerformance}) => {
    return (
        <div key={company.id} className="target-cell-container target-cell-clicked">
            <div className="target-cell">
                <button className="main-button" onClick={() => removeButtonClicked(company.id)}>X</button>
                <TargetHeader name={company.companyName} logo={company.logo} />
                <div className="status-container"><span className={`status-bubble ${company.status}`} />{company.status}</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda facere molestiae rerum veritatis? A ad alias corporis dolorum, ducimus fugiat, id in iste labore minus modi mollitia nemo soluta voluptatum.</p>
                <div className="target-cell-footer" onClick={() => showFinancialPerformance(company)}>
                    <i className="fa fa-mail-forward"></i> Financial Performance
                </div>
            </div>
        </div>
    );
}

const styles = {
    statusBubble: {
        width: 10,
        height: 10,
        borderRadius: '50%',
    },
    researching: { backgroundColor: 'purple' },
    pending: { backgroundColor: 'yellow' },
    approved: { backgroundColor: 'green' },
    declined: { backgroundColor: 'red' },
};