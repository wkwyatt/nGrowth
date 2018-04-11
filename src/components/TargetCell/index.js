import React from 'react';
import TargetHeader from '../TargetHeader';
import { Button, Glyphicon } from 'react-bootstrap';

export default ({company, removeButtonClicked, showFinancialPerformance, onEditClicked}) => {
    return (
        <div key={company.id} className="target-cell-container target-cell-clicked">
            <div className="target-cell">
                <TargetHeader name={company.companyName} logo={company.logo} />
                <div>
                    <Button className="edit-button" bsSize="large" onClick={() => onEditClicked(company)}>
                        <Glyphicon glyph="pencil" />
                    </Button>
                    <div className="status-container"><span className={`status-bubble ${company.status}`} />{company.status}</div>
                    <div className="target-cell-company-info top-info">
                        <h4>Company Info:</h4>
                        {company.companyInfo.map(c => (
                            <span>{c}</span>
                        ))}
                    </div>
                    <div className="target-cell-company-info">
                        <h4>Key Contacts:</h4>
                        {company.keyContact.map(c => (
                            <span>{c}</span>
                        ))}
                    </div>
                    <div className="target-cell-footer" onClick={() => showFinancialPerformance(company)}>
                        <i className="fa fa-mail-forward"></i> Financial Performance
                    </div>
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