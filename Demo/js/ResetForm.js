var React = require('react');
import {Modal, Button, Popover, Tooltip, FormGroup, ControlLabel, OverlayTrigger, FormControl, HelpBlock, Col, Form
,Checkbox} from 'react-bootstrap';

export default class ResetForm extends React.Component {
	constructor() {
    super();
    this.state = {
      Email: '',
    };
  }
	getValidationState_Email() {
    const length = this.state.Email.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
    handleChange_Email(e) {
    this.setState({ Email: e.target.value });
  }
	render(){
    const tooltip = (
          <Tooltip id="tooltip">Validation is based on string length</Tooltip>
        );
		return(
			  <Form horizontal>
                <FormGroup controlId="formHorizontalEmail" validationState={this.getValidationState_Email()}>
                    <OverlayTrigger placement="top" overlay={tooltip}>
                      <Col componentClass={ControlLabel} sm={2}> Email </Col>
                    </OverlayTrigger>
                    <Col sm={10}>
                      <FormControl
                      type="text"
                      value={this.state.Email}
                      placeholder="Enter Email"
                      onChange={this.handleChange_Email.bind(this)}
                    />
                    </Col>
                </FormGroup>
        </Form>
              );
	}
}