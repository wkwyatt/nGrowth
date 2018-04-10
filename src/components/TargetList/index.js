import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as targetListActions from '../../actions/targetListActions';
import PropTypes from 'prop-types';

class TargetList extends Component {
    renderData(target) {
            return (
                <div key={target.id}>
                    {target.companyName}
                </div>
            )
    }


    render() {
        return (
            <div className="">
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