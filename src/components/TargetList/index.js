import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as targetListActions from '../../actions/targetListActions';
import PropTypes from 'prop-types';

import TargetCell from '../TargetCell';

class TargetList extends Component {
    renderData(target) {
            return (
                <TargetCell key={target.id} company={target} />
            )
    }


    render() {
        return (
            <div className="container">
                {this.props.targets.length > 0 ?
                    this.props.targets.map(t => this.renderData(t))
                    :
                    <div className="">
                        No Data
                    </div>
                }
            </div>
        );
    }
}

TargetList.propTypes = {
    targetListActions: PropTypes.object,
    targets: PropTypes.array
};

TargetList.defaultProps = {
    targetListActions: {},
    targets: []
};

function mapStateToProps(state) {
    console.log(state);
    return {
       targets : state.targetList.targets
    };
}

function mapDispatchToProps(dispatch) {
    return {
        targetListActions: bindActionCreators(targetListActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TargetList);