import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  Button,
  FormControl
} from "react-bootstrap";

class Gift extends Component {
  constructor() {
    super();
    this.state = {
      person: "",
      present: ""
    };
  }

  render() {
    return (
      <div className="gift">
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl
              className="input-person"
              onChange={event => this.setState({ person: event.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Present</FormLabel>
            <FormControl
              className="input-present"
              onChange={event => this.setState({ present: event.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Button
        </Button>
      </div>
    );
  }
}

export default Gift;
