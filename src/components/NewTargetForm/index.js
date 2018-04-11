import React, { Component } from 'react';
import {
    Button,
    ButtonToolbar,
    ToggleButton,
    ToggleButtonGroup,
} from 'react-bootstrap';
import FieldGroup from './FieldGroup';

export default class NewTargetForm extends Component {
    constructor(props) {
        super(props);
        console.log('form data', props);
        this.state = {
            companyName: props.target ? props.target.companyName : '',
            status: props.target ? props.target.status : '',
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('UPDATE', this.props.target, nextProps.target);
        if (this.props.target !== nextProps.target) {
        // if (this.props.target && nextProps.target && this.props.target.id !== nextProps.target.id) {
            console.log('!!!UPDATED!!!');
            this.setState({
                companyName: nextProps.target ? nextProps.target.companyName : '',
                status: nextProps.target ? nextProps.target.status : '',
            }, () => console.log(this.state))
        }
    }

    handleStatusChange = (status) => {
        this.setState({ status });
    };

    handleTextChange = (prop, e) => {
        this.setState({[prop]: e.target.value});
    };

    getValidationState = () => {
        const length = this.state.companyName.length;
        if (length > 1) return 'success';
        else return 'error';
        return null;
    };

    render() {
        const { target } = this.props;
        const { companyName, status } = this.state;

        var imgURL = companyName.split(' ').join('').toLowerCase();
        imgURL = imgURL.length < 2 ? 'http://via.placeholder.com/350x150?text=logo' : `//logo.clearbit.com/${imgURL}.com`;
        const newTarget = {
            companyName: companyName,
            status: status,
            logo: imgURL,
            keyContact: ["Adam Trien", "Gentry Ganote", "Mark Zuckerberg", "Peter Thiel"],
            companyInfo: ["Patents"],
            financialPerformance: []
        };

        return (
            <div>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Company Name"
                    placeholder="Enter text"
                    value={companyName}
                    onChange={(e) => this.handleTextChange('companyName', e)}
                />
                <ButtonToolbar className="status-selector">
                    <ToggleButtonGroup type="radio" name="options" defaultValue={status} value={status} onChange={this.handleStatusChange}>
                        <ToggleButton className="status-selector-btn researching" value="researching">researching</ToggleButton>
                        <ToggleButton className="status-selector-btn pending" value="pending">pending</ToggleButton>
                        <ToggleButton className="status-selector-btn approved" value="approved">approved</ToggleButton>
                        <ToggleButton className="status-selector-btn declined" value="declined">declined</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
                { target ? (
                    <div>
                        <Button bsStyle="primary" onClick={() => {
                        }} style={{marginRight: 10}}>Save</Button>
                        <Button bsStyle="warning" onClick={() => this.props.onDeleteClicked(target.id)}>Delete</Button>
                    </div>
                ) : <Button bsStyle="primary" onClick={() => this.props.onCreateClicked(newTarget)}>Create New Target</Button> }
            </div>
        );
    }
}