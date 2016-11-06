var React = require('react');
import {Modal, Button, Popover, Tooltip, FormGroup, ControlLabel, OverlayTrigger, FormControl, HelpBlock} from 'react-bootstrap';
import LoginForm from './LoginForm.js';
import ResetForm from './ResetForm.js';
export default class LoginModal extends React.Component {
    componentWillMount(){
    console.log('LoginModal here');
    document.getElementById("Login").onclick = this.openLogin.bind(this); 
}
    constructor() {
    super();
    this.state = {
      showModal: false,
      showResetModal: false,
      showConfirm: false,
    };
  }
    openLogin(){
        this.setState({showModal: true});
    }
    closeLogin(){
        this.setState({showModal: false});
    }
    closeReset(){
        this.setState({showResetModal: false});
    }
    openReset(){
        this.setState({showResetModal: true});
    }
    openConfirmReset(){
        this.setState({showConfirm: true});
    }
    closeConfirmReset(){
      this.setState({showConfirm: false});
    }
    render() {
        const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
        );
      const tooltip = (
          <Tooltip id="modal-tooltip">
            wow.
          </Tooltip>
      );
      return (
      <div>
        <Modal show={this.state.showModal} onHide={this.closeLogin.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm />
            </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="link" onClick={()=>{this.closeLogin(); this.openReset()}}>Forget Password</Button>
            <Button onClick={this.closeLogin.bind(this)}>Close</Button>
            <Button bsStyle="primary" href="user/index.html">submit</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showResetModal} onHide={()=>{this.closeReset(); this.openLogin()}}>
          <Modal.Header closeButton>
            <Modal.Title>Reset Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ResetForm />
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{this.closeReset(); this.openLogin()}}>cancel</Button>
            <Button bsStyle="primary" onClick={()=>this.openConfirmReset()}>submit</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showConfirm} onHide={()=>{this.closeConfirmReset();this.closeReset()}}>
          <Modal.Body>confirmation email has been sent, please check your mailbox!
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={()=>{this.closeConfirmReset();this.closeReset()}}>OK</Button>
          </Modal.Footer>
        </Modal>
        </div>
      );
   }
}
