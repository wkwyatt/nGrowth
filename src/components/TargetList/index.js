import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TargetListActions } from '../../actions';

import TargetCell from '../TargetCell';

const { removeTarget } = TargetListActions;

class TargetList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            targets: props.targets
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.targets != this.props.targets) {
            this.setState({ targets: nextProps.targets });
        }
    }

    renderData(target) {
            return (
                <TargetCell
                    key={target.id}
                    company={target}
                    removeButtonClicked={this.props.removeTarget}
                />
            )
    }

    render() {
        console.log('redering',this.state.targets);
        return (
            <div className="container">
                {this.state.targets.length > 0 ?
                    this.state.targets.map(t => this.renderData(t))
                    :
                    <div className="">
                        No Data
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
       targets : state.targetList.targets
    };
};

export default connect(mapStateToProps, { removeTarget })(TargetList);