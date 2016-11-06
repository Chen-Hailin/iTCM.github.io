var React = require('react');
import {Modal, Button, Popover, Tooltip, FormGroup, ControlLabel, OverlayTrigger, FormControl, HelpBlock, Col, Form
,Checkbox} from 'react-bootstrap';

export default class SignupForm extends React.Component {
  constructor() {
    super();
    console.log("SignupForm here");
    this.state = {
      First:'',
      Last:'',
      Email: '',
      Password:'',
      Confirm:'',
      Gender:'',
    };
  }
  getValidationState_Confirm(e){
    if(e.length > 0){
      if(this.state.Password == e) return 'success';
      else return 'error'
    }
  }
  getValidationState_name(e){
    const length = e.length;
    if (length > 3) return 'success';
    else if (length > 0) return 'error';
  }
  getValidationState_length(e) {
    const length = e.length;
    if (length > 7) return 'success';
    else if (length > 3) return 'warning';
    else if (length > 0) return 'error';
  }
  getValidationState_Gender(e){
    if(e == "--") return 'error';
    else if (e.length > 0) return 'success';
  }
  handleChange(e, name) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }
  render(){
    const tooltip = (
          <Tooltip id="tooltip">Validation is based on string length</Tooltip>
        );
    const tooltip_confrim = (
          <Tooltip id="tooltip">Match your Password</Tooltip>
    );
    return(
        <Form horizontal>
                <FormGroup controlId="formHorizontalFirst" validationState={this.getValidationState_name(this.state.First)}>
                    <OverlayTrigger placement="top" overlay={tooltip}>  
                      <Col componentClass={ControlLabel} sm={2}>First Name</Col>
                    </OverlayTrigger>
                    <Col sm={10}>
                      <FormControl
                        type="text"
                        value={this.state.First}
                        placeholder="Enter First Name"
                        onChange={(e)=>this.handleChange(e, "First")}
                      />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalLast" validationState={this.getValidationState_name(this.state.Last)}>
                    <OverlayTrigger placement="top" overlay={tooltip}>
                      <Col componentClass={ControlLabel} sm={2}>Last Name</Col>
                    </OverlayTrigger>
                    <Col sm={10}>
                      <FormControl
                        type="text"
                        value={this.state.Last}
                        placeholder="Enter Last Name"
                        onChange={(e)=>this.handleChange(e, "Last")}
                      />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalFirst" validationState={this.getValidationState_Gender(this.state.Gender)}>
                    <Col componentClass={ControlLabel} sm={2}> Gender </Col>
                    <Col sm={10}>
                      <FormControl componentClass="select" 
                        value={this.state.Gender}
                        placeholder="Select Gender"
                        onChange={(e)=>this.handleChange(e, "Gender")}>
                        <option value="--">--</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </FormControl>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail" validationState={this.getValidationState_length(this.state.Email)}>
                    <OverlayTrigger placement="top" overlay={tooltip}>
                      <Col componentClass={ControlLabel} sm={2}> Email </Col>
                    </OverlayTrigger>
                    <Col sm={10}>
                      <FormControl
                      type="text"
                      value={this.state.Email}
                      placeholder="Enter Email"
                      onChange={(e)=>this.handleChange(e, "Email")}
                    />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword" validationState={this.getValidationState_length(this.state.Password)}>
                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                      <Col componentClass={ControlLabel} sm={2}> Password </Col>
                    </OverlayTrigger>
                    <Col sm={10}>
                      <FormControl
                        type="Password"
                        value={this.state.Password}
                        placeholder="Enter Password"
                        onChange={(e)=>this.handleChange(e, "Password")}
                      />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalConfirm" validationState={this.getValidationState_Confirm(this.state.Confirm)}>
                    <OverlayTrigger placement="bottom" overlay={tooltip_confrim}>
                      <Col componentClass={ControlLabel} sm={2}>Confirm Password</Col>
                    </OverlayTrigger>
                    <Col sm={10}>
                      <FormControl
                        type="Password"
                        value={this.state.Confirm}
                        placeholder="Enter Confirm"
                        onChange={(e)=>this.handleChange(e, "Confirm")}
                      />
                    </Col>
                </FormGroup>

          </Form>
              );
  }
}