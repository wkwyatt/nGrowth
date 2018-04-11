import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TargetListActions } from '../../actions';
import TargetList from '../../components/TargetList';
import MainModal from '../../components/MainModal';
import NewTargetForm from '../../components/NewTargetForm';
import { Line as LineChart } from 'react-chartjs';
// import { Button } from 'react-bootstrap';

const { addTarget, removeTarget, editTarget } = TargetListActions;

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

    saveTarget = (target) => {
        this.props.editTarget(target);
        this.closeModal();
    };

    showTargetModal = (target) => {
        console.log('show target modal', target);
        const modalContent = (
            <div>
                <NewTargetForm
                    target={target}
                    onSaveClicked={this.saveTarget}
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
        var chartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        const modalContent = <LineChart data={chartData}
                                        // options={graphOptions}
                                        width="600" height="250"/>;
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
    },
    graphContainer: {
        border: '1px solid black',
        padding: '15px'
    }
};

const graphOptions = {
    scaleShowGridLines: true,
    scaleGridLineColor: 'rgba(0,0,0,.05)',
    scaleGridLineWidth: 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
}

const mapStateToProps = (state) => {
    return {
        targets : state.targetList.targets
    };
};

export default connect(mapStateToProps, { addTarget, removeTarget, editTarget })(Home);
