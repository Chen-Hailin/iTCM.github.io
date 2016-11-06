var React = require('react');
import {Modal, Button, Popover, Tooltip, FormGroup, ControlLabel, OverlayTrigger, FormControl, HelpBlock, Col, Form
,Checkbox} from 'react-bootstrap';

export default class LoginForm extends React.Component {
	constructor() {
    super();
    console.log("LoginForm here");
    this.state = {
      Email: '',
      Password:'',
    };
  }
	getValidationState_Email() {
    const length = this.state.Email.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
  getValidationState_Password() {
    const length = this.state.Password.length;
    if (length > 7) return 'success';
    else if (length > 3) return 'warning';
    else if (length > 0) return 'error';
  }
    handleChange_Email(e) {
    this.setState({ Email: e.target.value });
  }
  	handleChange_Password(e) {
    this.setState({ Password: e.target.value });
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

                <FormGroup controlId="formHorizontalPassword" validationState={this.getValidationState_Password()}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                      <Col componentClass={ControlLabel} sm={2}> Password </Col>
                    </OverlayTrigger>
                    <Col sm={10}>
                      <FormControl
                        type="Password"
                        value={this.state.Password}
                        placeholder="Enter Password"
                        onChange={this.handleChange_Password.bind(this)}
                      />
                    </Col>
                  </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

          </Form>
              );
	}
}