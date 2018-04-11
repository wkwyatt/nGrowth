import React from 'react';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock,
} from 'react-bootstrap';

export default ({id, label, help, targetValue, ...props}) => (
    <FormGroup controlId={id} validationState={props.getValidationState}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
)
