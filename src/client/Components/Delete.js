import React, { Component } from 'react';
import { Container, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

class Delete extends Component {
  render() {
    return (
      <>
        <button className="btn-danger btn" onClick={() => this.props.onDelete(this.props.id)}>Delete Post</button>
      </>
    );
  }
}

export default Delete;