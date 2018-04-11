import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TargetListActions } from '../../actions';
import TargetList from '../../components/TargetList';
import MainModal from '../../components/MainModal';
import NewTargetForm from '../../components/NewTargetForm';
import { Button } from 'react-bootstrap';
// import Line from 'react-chartjs';

const { addTarget, removeTarget } = TargetListActions;

class Home extends Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            isModalOpen: false,
            targets: props.targets,
            modalContent: React.node,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.targets !== this.props.targets) {
            this.setState({ targets: nextProps.targets });
        }
    }

    // close modal (set isModalOpen, true)
    closeModal = () => {
        this.setState({
            isModalOpen: false
        })
    };

    // open modal (set isModalOpen, false)
    openModal = () => {
        this.setState({
            isModalOpen: true
        })
    };

    createNewTargetClicked = (newTarget) => {
        this.props.addTarget(newTarget);
        this.closeModal();
    };

    showTargetModal = (target) => {
        console.log('show target modal', target);
        const modalContent = (
            <div>
                <NewTargetForm
                    target={target}
                    onSaveClicked={this.addTarget}
                    onDeleteClicked={() => {
                        this.props.removeTarget(target.id);
                        this.closeModal();
                    }}
                    onCreateClicked={this.createNewTargetClicked}
                />
            </div>
        );
        this.setState({ modalContent });
        this.openModal();
    };

    showFinancialPerformance = (target) => {
        console.log('finance', target);
        const modalContent = <div>TEST</div>;
        this.setState({ modalContent });
        this.openModal();
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Insiten</h1>
                    <button style={mainStyle.button} onClick={() => this.showTargetModal()}>New Target</button>
                </header>
                <TargetList
                    targets={this.state.targets}
                    removeTarget={this.props.removeTarget}
                    showFinancialPerformance={this.showFinancialPerformance}
                    onEditClicked={this.showTargetModal}
                />
                <MainModal
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                    style={modalStyle}
                >
                    {this.state.modalContent}
                </MainModal>
            </div>
        );
    }
}

// overwrite style
const modalStyle = {
    overlayContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        zIndex: 1
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        position: "relative",
        width: 500,
        padding: 20,
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        margin: '40px auto',
        borderRadius: 3,
        zIndex: 2,
        textAlign: 'left',
        boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0,0.5)'
    }
};

const mainStyle = {
    app: {
        margin: '120px 0'
    },
    button: {
        backgroundColor: '#408cec',
        border: 0,
        padding: '12px 20px',
        color: '#fff',
        margin: '0 auto',
        width: 150,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 3
    }
};

const mapStateToProps = (state) => {
    return {
        targets : state.targetList.targets
    };
};

export default connect(mapStateToProps, { addTarget, removeTarget })(Home);
