var React = require('react');
import {Modal, Button, Popover, Tooltip, FormGroup, ControlLabel, OverlayTrigger, FormControl, HelpBlock} from 'react-bootstrap';
import LoginForm from './LoginForm.js';
export default class LoginModal extends React.Component {
    componentWillMount(){
    console.log('LoginModal here');
    document.getElementById("Login").onclick = this.openModal.bind(this); 
}
    constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }
    openModal(){
        this.setState({showModal: true});
    }
    close(){
        console.log(this);
        this.setState({showModal: false});
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
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <LoginForm />
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
            <Button bsStyle="primary">submit</Button>
          </Modal.Footer>
        </Modal>
      );
   }
}
