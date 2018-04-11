import React from 'react';
import TargetCell from '../TargetCell';

export default (props) => {
    const renderData = (target) => {
        return (
            <TargetCell
                key={target.id}
                company={target}
                removeButtonClicked={props.removeTarget}
                showFinancialPerformance={props.showFinancialPerformance}
            />
        )
    };

    return (
        <div className="container">
            {props.targets.length > 0 ?
                props.targets.map(t => renderData(t))
                :
                <div className="">
                    No Data
                </div>
            }
        </div>
    );
}