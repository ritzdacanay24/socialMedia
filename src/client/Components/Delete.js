import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

class Delete extends Component {
  render() {
    return (
      <>
        <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
      </>
    );
  }
}

export default Delete;