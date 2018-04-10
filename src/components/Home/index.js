import React, { Component } from 'react';
import logo from '../../logo.svg';

import TargetList from '../../components/TargetList';
import NewTargetModal from '../../components/NewTargetModal';


class Home extends Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            isModalOpen: false,
        };
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
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Insiten</h1>
                    <button style={mainStyle.button} onClick={this.openModal}>New Target</button>
                </header>
                <TargetList />
                <NewTargetModal
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                    style={modalStyle}
                >

                    <input type="text" />
                    <img width="100%" style={{borderRadius: 3}} src="https://source.unsplash.com/random" alt="unsplash"/>

                    <button style={{
                        ...mainStyle.button,
                        margin: 0,
                        width: 'auto',
                        marginTop: 10
                    }} onClick={this.closeModal}>Close</button>
                </NewTargetModal>
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
        height: '100%',
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

export default Home;
