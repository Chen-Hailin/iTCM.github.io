var React = require('react');
import {Modal, Button, Popover, Tooltip, FormGroup, ControlLabel, OverlayTrigger, FormControl, HelpBlock} from 'react-bootstrap';
import SignupForm from './SignupForm.js';
export default class SignupModal extends React.Component {
    componentWillMount(){
    console.log('SignupModal here');
    document.getElementById("SignUp").onclick = this.openModal.bind(this);
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
            <Modal.Title>SignUp</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignupForm />
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
            <Button bsStyle="primary">submit</Button>
          </Modal.Footer>
        </Modal>
      );
   }
}
